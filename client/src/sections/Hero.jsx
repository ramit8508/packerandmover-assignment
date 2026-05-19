import { highlights } from '../data/siteData'

const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow">Packers & Movers you can trust</p>
      <h1 id="hero-title">Industrial-grade care for every move.</h1>
      <p className="lead">
        From family relocations to corporate transitions, we deliver
        damage-free moves, transparent pricing, and real-time updates.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#contact">
          Book a Pickup
        </a>
        <a className="btn btn-outline" href="#services">
          View Services
        </a>
      </div>
      <div className="stats">
        {highlights.map((item) => (
          <div key={item.label} className="stat">
            <span className="stat-value">{item.value}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-frame">
        <div className="route-card">
          <p className="card-title">Route Status</p>
          <p className="card-sub">Crew dispatched · ETA 45 mins</p>
          <div className="route-map">
            <span className="route-dot" />
            <div className="route-line" />
            <span className="route-dot route-dot-active" />
          </div>
        </div>
        <div className="quote-card">
          <p className="card-title">Instant Quote</p>
          <p className="card-sub">2 BHK · 10 km · 2 helpers</p>
          <p className="quote-amount">INR 6,800</p>
        </div>
        <div className="badge badge-dark">Insured Load</div>
        <div className="badge badge-light">24/7 Support</div>
      </div>
    </div>
  </section>
)

export default Hero
