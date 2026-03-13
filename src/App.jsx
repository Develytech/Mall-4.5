import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { siteConfig } from "./content/site";
import "./styles/global.css";

function App() {
  const appStyle = {
    "--color-accent": siteConfig.branding.accentColor,
    "--color-bg": siteConfig.branding.backgroundColor,
    "--color-text": siteConfig.branding.textColor,
    "--color-footer-bg": siteConfig.branding.footerBackground,
    "--color-footer-text": siteConfig.branding.footerTextColor,
    "--header-height": `${siteConfig.layout.headerHeightPx}px`,
    "--radius": `${siteConfig.layout.borderRadiusPx}px`,
    "--section-y-mobile": `${siteConfig.layout.sectionPaddingYMobilePx}px`,
    "--section-y-desktop": `${siteConfig.layout.sectionPaddingYDesktopPx}px`,
    "--gutter-tight": siteConfig.layout.gutterTight,
    "--gutter-standard": siteConfig.layout.gutterStandard,
    "--gutter-wide": siteConfig.layout.gutterWide,
    "--container-standard": `min(${siteConfig.layout.containerFluidVw}vw, ${siteConfig.layout.containerMaxWidthPx}px)`,
    "--container-wide": `min(${siteConfig.layout.wideContainerFluidVw}vw, ${siteConfig.layout.wideContainerMaxWidthPx}px)`,
    "--gallery-gap": `${siteConfig.gallery.behavior.gapPx}px`,
    "--gallery-edge": `${siteConfig.gallery.behavior.edgePaddingPx}px`,
    "--gallery-cols": siteConfig.gallery.behavior.desktopColumns,
    "--font-body":
      siteConfig.branding.fontFamily === "system"
        ? 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
        : siteConfig.branding.fontFamily,
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app page" style={appStyle}>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
