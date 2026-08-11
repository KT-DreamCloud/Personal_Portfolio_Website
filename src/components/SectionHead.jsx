import Reveal from './Reveal.jsx';

export default function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}
