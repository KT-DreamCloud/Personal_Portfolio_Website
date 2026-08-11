import { majorProjects, oldPortfolio, personalProjects } from '../data/portfolio.js';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Reveal from '../components/Reveal.jsx';

function ProjectGroup({ title, count, children }) {
  return (
    <section className="section">
      <Reveal className="group-head">
        <h3 className="group-title">
          <span className="gradient-text">{title}</span>
          {count > 0 && <span className="group-count">{count}</span>}
        </h3>
      </Reveal>
      {children}
    </section>
  );
}

function ProjectGrid({ items, archive }) {
  return (
    <div className="grid cards">
      {items.map((project, i) => (
        <Reveal key={project.title} delay={i * 60}>
          <ProjectCard project={project} archive={archive} />
        </Reveal>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="page">
      <div className="container">
        <SectionHead
          eyebrow="My work"
          title="My projects"
          subtitle="Here are some of the things I have built across various programming languages and stacks."
        />

        <ProjectGroup title="Major Projects" count={majorProjects.length}>
          {majorProjects.length > 0 ? (
            <ProjectGrid items={majorProjects} />
          ) : (
            <Reveal>
              <p className="note">Coming soon.</p>
            </Reveal>
          )}
        </ProjectGroup>

        <ProjectGroup title="Personal Projects" count={personalProjects.length}>
          <ProjectGrid items={personalProjects} archive={oldPortfolio} />
        </ProjectGroup>
      </div>
    </div>
  );
}
