import { useState } from "react";
import { siteConfig } from "../content/site";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "",
};

function Contact() {
  const { contactSection, contact, company } = siteConfig;
  const fields = contactSection.form.fields;
  const infoLabels = contactSection.infoLabels;
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(contactSection.form.endpoint, {
        method: contactSection.form.method,
        headers: {
          "Content-Type": contactSection.form.contentType,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.error) {
        throw new Error(data.error || contactSection.form.errorMessage);
      }

      setFormData(initialFormState);
      setStatus({ type: "success", message: contactSection.form.successMessage });
    } catch {
      setStatus({ type: "error", message: contactSection.form.errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section reveal-section section--contact">
      <div className="layout-shell layout-shell--wide layout-shell--standardGutter">
        <div className="contact">
          <div className="contact__title">
            <h2>{contactSection.sectionTitle}</h2>
            <p>{contactSection.sectionText}</p>
          </div>

          <div className="contact__grid">
            <div className="contact__info">
              <div className="contact__infoBlock">
                <span className="contact__label">{infoLabels.phone}</span>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>{contact.phone}</a>
              </div>
              <div className="contact__infoBlock">
                <span className="contact__label">{infoLabels.email}</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="contact__infoBlock">
                <span className="contact__label">{infoLabels.location}</span>
                <p>{company.location}</p>
              </div>
              <div className="contact__infoBlock contact__infoBlock--support">
                <span className="contact__label">{infoLabels.support}</span>
                <p>{contactSection.contactText}</p>
              </div>
            </div>

            <div className="contact__formWrap">
              <form className="contact__form" onSubmit={handleSubmit}>
                <label className="contact__field">
                  <span>{fields.nameLabel}</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={fields.namePlaceholder}
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact__field">
                  <span>{fields.emailLabel}</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={fields.emailPlaceholder}
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="contact__field">
                  <span>{fields.phoneLabel}</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={fields.phonePlaceholder}
                    autoComplete="tel"
                  />
                </label>

                <label className="contact__field">
                  <span>{fields.messageLabel}</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={fields.messagePlaceholder}
                    required
                  />
                </label>

                <label className="contact__honeypot" aria-hidden="true">
                  <span>Company</span>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </label>

                <button
                  type="submit"
                  className="button button--primary"
                  disabled={isSubmitting}
                >
                  {fields.submitText}
                </button>

                {status.message ? (
                  <p
                    className={`contact__status contact__status--${status.type}`}
                    role="status"
                  >
                    {status.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
