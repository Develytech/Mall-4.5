import { services, servicesSection } from "../content/services";

function Services() {
  return (
    <section id="services" className="section reveal-section section--muted">
      <div className="layout-shell layout-shell--standard layout-shell--standardGutter">
        <div className="section-heading">
          <h2>{servicesSection.sectionTitle}</h2>
          <p>{servicesSection.sectionText}</p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <article key={service.title} className="services-list__item">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
