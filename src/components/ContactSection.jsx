import { contact, jobs } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';

export default function ContactSection() {
  const details = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { label: 'Mobile', value: contact.phone, href: `tel:+91${contact.phone}` },
    { label: 'Education', value: contact.education },
    { label: 'Location', value: contact.location },
    { label: 'Languages', value: contact.languages },
  ];

  return (
    <section className="section" id="contact">
      <SectionHead
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Thank you for visiting my portfolio. Feel free to reach out with questions or to discuss a potential project — your feedback is always appreciated."
      />

      <div className="grid contact-layout">
        <Reveal>
          <div className="card">
            <ul className="info-list">
              {details.map((item) => (
                <li key={item.label}>
                  <span className="info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid job-stack">
          {jobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 80}>
              <article className="card job-card">
                <div className="job-top">
                  <h3>{job.title}</h3>
                  <span className="job-period">{job.period}</span>
                </div>
                <p className="job-company">
                  {job.company} · {job.location}
                </p>
                <ul className="job-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tag-row" style={{ marginBottom: 0 }}>
                  {job.skills.map((skill) => (
                    <span className="tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
