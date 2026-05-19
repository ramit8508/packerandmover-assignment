import { services } from '../data/siteData'

const Services = () => (
  <section id="services" className="section">
    <div className="section-title">
      <p className="eyebrow">Services</p>
      <h2>Every move, handled end-to-end.</h2>
      <p className="lead">
        Trained crews, systematic packing, and insured handling for predictable
        outcomes.
      </p>
    </div>
    <div className="grid services-grid">
      {services.map((service) => (
        <article key={service.title} className="card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  </section>
)

export default Services
