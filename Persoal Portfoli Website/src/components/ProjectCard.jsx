import { BriefcaseIcon, ExternalIcon, GithubIcon, YoutubeIcon } from './Icons.jsx';

// `archive` adds one extra link shared by a whole group of cards, so the same
// URL does not have to be repeated on every project.
export default function ProjectCard({ project, archive }) {
  const links = [
    { url: project.live, label: 'Live Demo', Icon: ExternalIcon },
    { url: project.repo, label: 'Source', Icon: GithubIcon },
    { url: project.youtube, label: 'Demo Video', Icon: YoutubeIcon },
    { url: archive?.url, label: archive?.label, Icon: BriefcaseIcon },
  ].filter((link) => Boolean(link.url));

  return (
    <article className="card">
      <div className="card-icon" aria-hidden="true">
        {project.emoji}
      </div>
      <h3>{project.title}</h3>
      {(project.role || project.period) && (
        <div className="card-meta">
          {project.role && <span className="card-role">{project.role}</span>}
          {project.period && <span className="card-period">{project.period}</span>}
        </div>
      )}
      <p className="card-desc">{project.description}</p>
      {project.points?.length > 0 && (
        <ul className="card-points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {project.note && <p className="note">{project.note}</p>}
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {links.length > 0 && (
        <div className="btn-row">
          {links.map(({ url, label, Icon }) => (
            <a
              key={label}
              className="btn btn-sm"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <Icon />
              {label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
