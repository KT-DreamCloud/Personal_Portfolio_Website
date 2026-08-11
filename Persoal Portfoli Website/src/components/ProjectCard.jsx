import { ExternalIcon, GithubIcon, YoutubeIcon } from './Icons.jsx';

export default function ProjectCard({ project }) {
  const links = [
    { url: project.live, label: 'Live Demo', Icon: ExternalIcon },
    { url: project.repo, label: 'Source', Icon: GithubIcon },
    { url: project.youtube, label: 'Demo Video', Icon: YoutubeIcon },
  ].filter((link) => Boolean(link.url));

  return (
    <article className="card">
      <div className="card-icon" aria-hidden="true">
        {project.emoji}
      </div>
      <h3>{project.title}</h3>
      <p className="card-desc">{project.description}</p>
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
