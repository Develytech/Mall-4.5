import { useState } from "react";
import { siteConfig } from "../content/site";

function About() {
  const { about } = siteConfig;
  const [imageAvailable, setImageAvailable] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="about" className="section reveal-section">
      <div className="layout-shell layout-shell--standard layout-shell--standardGutter">
        <div className="about">
          <div className="about__copy">
            <p className="section-eyebrow">{about.eyebrow}</p>
            <h2>{about.headline}</h2>
            <div className="about__body">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="about__bullets">
              {about.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a className="button button--secondary" href={`#${about.cta.target}`}>
              {about.cta.label}
            </a>
          </div>

          <div className="about__media">
            {imageAvailable ? (
              <img
                src={about.image.src}
                alt={about.image.alt}
                onLoad={() => setIsLoaded(true)}
                onError={() => setImageAvailable(false)}
                style={{ visibility: isLoaded ? "visible" : "hidden" }}
              />
            ) : (
              <div className="about__mediaFallback" aria-hidden="true" />
            )}
            <div className="about__overlay">
              <span>{about.overlay.label}</span>
              <strong>{about.overlay.text}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
