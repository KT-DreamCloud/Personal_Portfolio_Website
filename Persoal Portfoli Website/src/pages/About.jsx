import { about, skillGroups, stats, timeline } from '../data/portfolio.js';
import SectionHead from '../components/SectionHead.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <SectionHead eyebrow="About me" title="Bit more about me 🧙‍♂️" />
          <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
            <Reveal className="card">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </Reveal>
          </div>

          <div className="grid stats" style={{ marginTop: '1.25rem' }}>
            {stats.map((stat, i) => (
              <Reveal key={stat.label} className="card stat" delay={i * 70}>
                <div className="card-icon" aria-hidden="true">
                  {stat.emoji}
                </div>
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHead
            eyebrow="Skills"
            title="My skills 🦸"
            subtitle="Languages, frameworks, tools and areas I work with day to day."
          />
          <div className="grid skill-groups">
            {skillGroups.map((group, i) => (
              <Reveal key={group.category} delay={i * 60}>
                <div className="card">
                  <div className="skill-group-head">
                    <span aria-hidden="true">{group.emoji}</span>
                    <h3>{group.category}</h3>
                  </div>
                  <div className="tag-row" style={{ marginBottom: 0 }}>
                    {group.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHead
            eyebrow="Journey"
            title="My timeline ⏳"
            subtitle="Where I have worked and studied so far."
          />
          <div className="timeline">
            {timeline.map((item, i) => (
              <Reveal key={item.title + item.period} className="timeline-item" delay={i * 60}>
                <span className="timeline-period">{item.period}</span>
                <h3>{item.title}</h3>
                <div className="timeline-sub">{item.subtitle}</div>
                {item.points.length > 0 && (
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
