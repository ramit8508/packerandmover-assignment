import { steps } from '../data/siteData'

const Process = () => (
  <section id="process" className="section split">
    <div>
      <p className="eyebrow">Process</p>
      <h2>Built for speed without the stress.</h2>
      <p className="lead">
        We follow a repeatable playbook so your move stays on schedule.
      </p>
    </div>
    <ol className="steps">
      {steps.map((step) => (
        <li key={step.title}>
          <span className="step-title">{step.title}</span>
          <span className="step-desc">{step.description}</span>
        </li>
      ))}
    </ol>
  </section>
)

export default Process
