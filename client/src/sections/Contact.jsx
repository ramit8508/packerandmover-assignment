import { services } from '../data/siteData'
import { useContactForm } from '../hooks/useContactForm'

const Contact = () => {
  const initialService = services[0]?.title || ''
  const { formData, status, handleChange, handleSubmit } =
    useContactForm(initialService)

  return (
    <section id="contact" className="section contact">
      <div className="section-title">
        <p className="eyebrow">Contact</p>
        <h2>Request a callback in minutes.</h2>
        <p className="lead">
          Share your details and our move advisor will confirm pricing and
          availability.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="e.g. 9876543210"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Service Selection
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? 'Submitting...' : 'Submit Request'}
        </button>
        {status.message ? (
          <p className={`form-status ${status.type}`}>{status.message}</p>
        ) : null}
      </form>
    </section>
  )
}

export default Contact
