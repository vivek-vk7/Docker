import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { skills } from '../data/portfolioData';

const Skills = () => (
  <section className="section" id="skills">
    <Reveal>
      <SectionHeading
        eyebrow="Skill Set"
        title="A balanced toolkit across programming, web development, and core computer science."
        description="I am continuously expanding my technical range while strengthening the fundamentals that support scalable and efficient software."
      />
    </Reveal>

    <div className="skills-grid">
      {skills.map((group, index) => (
        <Reveal key={group.title} className="skill-card" delay={0.1 * (index + 1)}>
          <div className="skill-card-top">
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.title}</h3>
          </div>
          <div className="chip-wrap">
            {group.items.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
