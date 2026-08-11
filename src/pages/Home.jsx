import { Link } from 'react-router-dom';
import { contact, profile, socials, stats } from '../data/portfolio.js';
import { DownloadIcon, iconMap } from '../components/Icons.jsx';
import Typewriter from '../components/Typewriter.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <div>
            <span className="eyebrow">Available for opportunities</span>
            <h1>
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h1>
            <div className="hero-role">
              I&apos;m a <Typewriter words={profile.roles} />
            </div>
            <p>{profile.intro}</p>
            <p className="hero-tagline">{profile.tagline}</p>

            <div className="btn-row" style={{ marginTop: '1.75rem' }}>
              <a className="btn btn-primary" href={profile.resumeUrl} download>
                <DownloadIcon />
                Download CV
              </a>
              <Link className="btn" to="/projects">
                View Projects
              </Link>
            </div>

            <div className="socials">
              {socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    className="social-btn"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <Reveal className="terminal" delay={120}>
            <div className="terminal-bar">
              <span className="dot" style={{ background: '#ff5f57' }} />
              <span className="dot" style={{ background: '#febc2e' }} />
              <span className="dot" style={{ background: '#28c840' }} />
              <span className="terminal-title mono">karan@ktdev: ~/portfolio</span>
            </div>
            <pre className="terminal-body mono">
              <span className="c">{'// developer.js'}</span>
              {'\n'}
              <span className="k">const</span> developer = {'{'}
              {'\n  name: '}
              <span className="s">&apos;{profile.name}&apos;</span>,{'\n  role: '}
              <span className="s">&apos;Software Developer&apos;</span>,{'\n  location: '}
              <span className="s">&apos;{contact.location}&apos;</span>,{'\n  stack: ['}
              <span className="s">&apos;Java&apos;</span>,{' '}
              <span className="s">&apos;React&apos;</span>,{' '}
              <span className="s">&apos;MySQL&apos;</span>,{' '}
              <span className="s">&apos;Linux&apos;</span>
              {'],'}
              {'\n  learning: '}
              <span className="s">&apos;Cloud &amp; Back-End&apos;</span>,{'\n  hireable: '}
              <span className="k">true</span>
              {'\n};'}
            </pre>
          </Reveal>
        </section>

        <section className="section">
          <SectionHead
            eyebrow="My stats"
            title="A quick snapshot"
            subtitle="Numbers and traits that describe how I work."
          />
          <div className="grid stats">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} className="card stat" delay={i * 80}>
                <div className="card-icon" aria-hidden="true">
                  {stat.emoji}
                </div>
                <div className="stat-value gradient-text">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <ContactSection />
      </div>
    </div>
  );
}
