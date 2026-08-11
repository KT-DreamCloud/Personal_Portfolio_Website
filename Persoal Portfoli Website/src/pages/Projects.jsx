import { useMemo, useState } from 'react';
import { projects } from '../data/portfolio.js';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Reveal from '../components/Reveal.jsx';

const ALL = 'All';

export default function Projects() {
  const [filter, setFilter] = useState(ALL);

  const tags = useMemo(() => {
    const unique = new Set(projects.flatMap((project) => project.tags));
    return [ALL, ...[...unique].sort()];
  }, []);

  const visible =
    filter === ALL ? projects : projects.filter((project) => project.tags.includes(filter));

  return (
    <div className="page">
      <div className="container">
        <SectionHead
          eyebrow="My work"
          title="My projects"
          subtitle="Here are some of the things I have built across various programming languages and stacks."
        />

        <div className="filters">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`chip${filter === tag ? ' active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid cards">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
