import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

const Projects = () => (
  <section className="section" id="projects">
    <Reveal>
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects that reflect my interest in useful products, clean interfaces, and full stack thinking."
        description="Each project is structured to highlight the problem being solved, the technologies involved, and the kind of experience I aim to create for users."
      />
    </Reveal>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <Reveal key={project.title} className="project-card" delay={0.1 * (index + 1)}>
          <div className="project-card-top">
            <span className="project-number">Project 0{index + 1}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <div className="chip-wrap">
            {project.techStack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={project.live} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Projects;
