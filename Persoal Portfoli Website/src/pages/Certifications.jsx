import { certifications } from '../data/portfolio.js';
import SectionHead from '../components/SectionHead.jsx';
import Reveal from '../components/Reveal.jsx';
import { AwardIcon, ExternalIcon } from '../components/Icons.jsx';

function FeaturedCert({ cert }) {
  return (
    <article className="card card--featured">
      <a
        className="cert-frame"
        href={cert.image}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the ${cert.title} certificate in a new tab`}
      >
        <img className="cert-image" src={cert.image} alt={`${cert.title} certificate of recognition`} />
        <span className="cert-frame-hint">
          <ExternalIcon aria-hidden="true" /> View full certificate
        </span>
      </a>

      <div className="cert-body">
        {cert.badge ? (
          <span className="cert-badge">
            <AwardIcon width="14" height="14" aria-hidden="true" />
            {cert.badge}
          </span>
        ) : null}
        <h3 className="cert-title gradient-text">{cert.title}</h3>
        <div className="issuer">{cert.issuer}</div>
        {cert.highlight ? <p className="cert-highlight">{cert.highlight}</p> : null}
        <ul className="card-points cert-points">
          {cert.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="tag-row" style={{ marginBottom: 0 }}>
          {cert.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Certifications() {
  return (
    <div className="page">
      <div className="container">
        <SectionHead
          eyebrow="My certificates 📃"
          title="Certifications"
          subtitle="Trainings, programmes and courses I have completed along the way."
        />

        <div className="grid cards">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 55}
              className={cert.featured ? 'cert-featured' : undefined}
            >
              {cert.featured ? (
                <FeaturedCert cert={cert} />
              ) : (
                <article className="card">
                  <div className="card-icon" style={{ color: 'var(--accent)' }} aria-hidden="true">
                    <AwardIcon width="26" height="26" />
                  </div>
                  <div className="issuer">{cert.issuer}</div>
                  <h3>{cert.title}</h3>
                  <p className="card-desc">{cert.description}</p>
                  <div className="tag-row" style={{ marginBottom: 0 }}>
                    {cert.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
