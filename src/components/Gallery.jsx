import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { galleryImages, gallerySection } from "../content/gallery";
import { useReducedMotion } from "../hooks/useReducedMotion";

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.5 5.5l7 6.5-7 6.5"
        transform={direction === "left" ? "translate(24 0) scale(-1 1)" : undefined}
      />
    </svg>
  );
}

function MobileFullscreen({ images, startIndex, onClose, prefersReducedMotion }) {
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [loadedSrc, setLoadedSrc] = useState("");
  const touchStartX = useRef(0);

  useEffect(() => {
    const body = document.body;
    const scrollY = window.scrollY;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      const top = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      window.scrollTo(0, Math.abs(parseInt(top || "0", 10)));
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => Math.max(0, index - 1));
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) => Math.min(images.length - 1, index + 1));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length, onClose]);

  return createPortal(
    <div className="gallery-fullscreen" role="dialog" aria-modal="true" aria-label="Bildvisare">
      <button type="button" className="gallery-fullscreen__close" onClick={onClose}>
        ✕
      </button>
      <div className="gallery-fullscreen__index">
        {activeIndex + 1} / {images.length}
      </div>
      <button
        type="button"
        className="gallery-fullscreen__backdrop"
        aria-label="Stäng bildvisaren"
        onClick={onClose}
      />
      <div
        className={`gallery-fullscreen__stage${prefersReducedMotion ? " gallery-fullscreen__stage--reduced" : ""}`}
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0].clientX;
        }}
        onTouchEnd={(event) => {
          const deltaX = event.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(deltaX) < 40) {
            return;
          }

          if (deltaX < 0) {
            setActiveIndex((index) => Math.min(images.length - 1, index + 1));
          } else {
            setActiveIndex((index) => Math.max(0, index - 1));
          }
        }}
      >
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          onLoad={() => setLoadedSrc(images[activeIndex].src)}
          onError={() => setLoadedSrc("")}
          style={{ visibility: loadedSrc === images[activeIndex].src ? "visible" : "hidden" }}
        />
      </div>
    </div>,
    document.body
  );
}

function GalleryCard({ image, isMobile, onOpenMobile }) {
  const [imageAvailable, setImageAvailable] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  if (isMobile) {
    return (
      <article className="gallery__card">
        <button
          type="button"
          className="gallery__cardButton"
          onClick={onOpenMobile}
          aria-label={image.alt}
        >
          {imageAvailable ? (
            <img
              src={image.src}
              alt={image.alt}
              onLoad={() => setIsLoaded(true)}
              onError={() => setImageAvailable(false)}
              style={{ visibility: isLoaded ? "visible" : "hidden" }}
            />
          ) : (
            <div className="gallery__imageFallback" aria-hidden="true" />
          )}
        </button>
      </article>
    );
  }

  return (
    <article className="gallery__card">
      {imageAvailable ? (
        <img
          src={image.src}
          alt={image.alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setImageAvailable(false)}
          style={{ visibility: isLoaded ? "visible" : "hidden" }}
        />
      ) : (
        <div className="gallery__imageFallback" aria-hidden="true" />
      )}
    </article>
  );
}

function Gallery() {
  const railRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.innerWidth < 900;
  });
  const [activeMobileIndex, setActiveMobileIndex] = useState(null);
  const [scrollState, setScrollState] = useState({ left: true, right: false });
  const { behavior } = gallerySection;

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);
      if (!mobile) {
        setActiveMobileIndex(null);
      }
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return undefined;
    }

    const updateButtons = () => {
      const maxScroll = rail.scrollWidth - rail.clientWidth;
      setScrollState({
        left: rail.scrollLeft <= 2,
        right: rail.scrollLeft >= maxScroll - 2,
      });
    };

    updateButtons();
    rail.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);

    return () => {
      rail.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollByCard = (direction) => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const card = rail.querySelector(".gallery__card");
    if (!card) {
      return;
    }

    const step = card.getBoundingClientRect().width + behavior.gapPx;
    rail.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <section id="gallery" className="section reveal-section gallery">
      <div className="layout-shell layout-shell--wide layout-shell--tight">
        <div className="section-heading section-heading--gallery">
          <h2>{gallerySection.sectionTitle}</h2>
          <p>{gallerySection.sectionText}</p>
        </div>

        <div className="gallery__viewport">
          <button
            type="button"
            className="gallery__arrow gallery__arrow--left"
            aria-label="Föregående bild"
            onClick={() => scrollByCard("left")}
            disabled={scrollState.left}
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="gallery__railWrap">
            <div className="gallery__railFade gallery__railFade--left" aria-hidden="true" />
            <div className="gallery__railFade gallery__railFade--right" aria-hidden="true" />
            <div className="gallery__rail" ref={railRef} tabIndex={0}>
              {galleryImages.map((image, index) => (
                <GalleryCard
                  key={image.src}
                  image={image}
                  isMobile={isMobile}
                  onOpenMobile={() => {
                    if (isMobile) {
                      setActiveMobileIndex(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="gallery__arrow gallery__arrow--right"
            aria-label="Nästa bild"
            onClick={() => scrollByCard("right")}
            disabled={scrollState.right}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>

      {isMobile && activeMobileIndex !== null ? (
        <MobileFullscreen
          images={galleryImages}
          startIndex={activeMobileIndex}
          onClose={() => setActiveMobileIndex(null)}
          prefersReducedMotion={prefersReducedMotion}
        />
      ) : null}
    </section>
  );
}

export default Gallery;
