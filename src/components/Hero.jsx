import { useState } from "react";
import { siteConfig } from "../content/site";

function Hero() {
  const { hero } = siteConfig;
  const [imageAvailable, setImageAvailable] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="hero" className="hero reveal-section">
      <div className="hero__media" aria-hidden="true">
        {imageAvailable ? (
          <img
            src={hero.imagePath}
            alt=""
            onLoad={() => setIsLoaded(true)}
            onError={() => setImageAvailable(false)}
            style={{ visibility: isLoaded ? "visible" : "hidden" }}
          />
        ) : null}
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="layout-shell layout-shell--standard layout-shell--wideGutter">
        <div className="hero__content">
          <p className="hero__badge">{hero.badge}</p>
          <h1>{hero.headline}</h1>
          <p className="hero__subtext">{hero.subtext}</p>
          {hero.description.map((item) => (
            <p key={item} className="hero__description">
              {item}
            </p>
          ))}
          <a className="button button--primary" href={`#${hero.secondaryAction.target}`}>
            {hero.secondaryAction.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
