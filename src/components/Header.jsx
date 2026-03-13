import { useEffect, useState } from "react";
import { siteConfig } from "../content/site";
import { useScrollPosition } from "../hooks/useScrollPosition";

function scrollToSection(target, onDone) {
  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (onDone) {
    onDone();
  }
}

function Logo({ src }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  if (!isVisible || !src) {
    return <div className="site-header__logo site-header__logo--empty" aria-hidden="true" />;
  }

  return (
    <img
      className="site-header__logo"
      src={src}
      alt=""
      onLoad={() => setIsLoaded(true)}
      onError={() => setIsVisible(false)}
      style={{ visibility: isLoaded ? "visible" : "hidden" }}
    />
  );
}

function HamburgerIcon() {
  return (
    <span className="site-header__hamburger-lines" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function HeaderNav({ items, onNavigate, className }) {
  return (
    <nav className={className} aria-label="Huvudnavigation">
      {items.map((item) => (
        <button
          key={item.target}
          type="button"
          className="site-header__navLink"
          onClick={() => onNavigate(item.target)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

function Header() {
  const hasScrolledPast = useScrollPosition(40);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleNavigate = (target) => {
    scrollToSection(target, () => setMenuOpen(false));
  };

  return (
    <header className={`site-header${hasScrolledPast ? " site-header--solid" : ""}`}>
      <div className="layout-shell layout-shell--wide layout-shell--tight">
        <div className="site-header__row">
          <a
            className="site-header__brand"
            href="#hero"
            aria-label={siteConfig.company.name}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("hero");
            }}
          >
            <Logo src={siteConfig.branding.logoPath} />
          </a>

          <HeaderNav
            items={siteConfig.navigation}
            onNavigate={handleNavigate}
            className="site-header__nav site-header__nav--desktop"
          />

          <button
            type="button"
            className="site-header__toggle"
            aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`site-header__mobilePanel${menuOpen ? " site-header__mobilePanel--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="layout-shell layout-shell--wide layout-shell--tight">
          <HeaderNav
            items={siteConfig.navigation}
            onNavigate={handleNavigate}
            className="site-header__nav site-header__nav--mobile"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
