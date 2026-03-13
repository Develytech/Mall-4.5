import { siteConfig } from "../content/site";

function Footer() {
  const { company, footer, navigation, contact } = siteConfig;
  const copyright = footer.textTemplate
    .replace("{YEAR}", String(new Date().getFullYear()))
    .replace("{COMPANY}", company.name);

  return (
    <footer className="site-footer">
      <div className="layout-shell layout-shell--wide layout-shell--tight">
        <div className="site-footer__grid">
          <div className="site-footer__column">
            <h2 className="site-footer__title">{company.name}</h2>
            <p className="site-footer__text">{footer.description}</p>
          </div>

          <div className="site-footer__column">
            <h3 className="site-footer__label">{footer.navigationTitle}</h3>
            <nav className="site-footer__nav" aria-label={footer.navigationTitle}>
              {navigation.map((item) => (
                <a key={item.target} href={`#${item.target}`} className="site-footer__link">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="site-footer__column">
            <h3 className="site-footer__label">{footer.contactTitle}</h3>
            <div className="site-footer__contact">
              <a className="site-footer__link" href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
                {contact.phone}
              </a>
              <a className="site-footer__link" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <p className="site-footer__text">{company.location}</p>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__meta">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
