(function registerProjectsSection(global) {
  const AKCSE = (global.AKCSE = global.AKCSE || {});
  const components = (AKCSE.components = AKCSE.components || {});

  components.ProjectsSection = function ProjectsSection({ copy, projects, language }) {
    const getDescription = (project) => (language === 'en' ? project.description : project.descriptionKo);

    return (
      <section id="projects" className="section">
        <div className="section__container">
          <h2>{copy.heading}</h2>
          <p>{copy.body}</p>
          <div className="grid grid--projects" role="list">
            {projects.map((project) => (
              <article className="card card--project" role="listitem" key={project.title}>
                <h3>{project.title}</h3>
                <p>{getDescription(project)}</p>
                <a className="project-card__cta" href={project.link} target="_blank" rel="noopener noreferrer">
                  {copy.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };
})(window);
