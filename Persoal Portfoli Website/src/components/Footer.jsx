import { profile, socials } from '../data/portfolio.js';
import { iconMap } from './Icons.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {profile.name} &mdash; built with React &amp; Vite.
        </p>
        <div className="socials" style={{ marginTop: 0 }}>
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
    </footer>
  );
}
