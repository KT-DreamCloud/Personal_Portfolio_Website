import { certifications } from '../data/portfolio.js';
import SectionHead from '../components/SectionHead.jsx';
import Reveal from '../components/Reveal.jsx';
import { AwardIcon } from '../components/Icons.jsx';

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
            <Reveal key={cert.title} delay={i * 55}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
