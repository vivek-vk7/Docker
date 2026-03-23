import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { achievements } from '../data/portfolioData';

const Achievements = () => (
  <section className="section" id="achievements">
    <Reveal>
      <SectionHeading
        eyebrow="Achievements"
        title="Consistent progress through problem solving, competitive practice, and technical discipline."
        description="These highlights reflect my commitment to improving logical thinking and coding confidence through regular hands-on effort."
      />
    </Reveal>

    <div className="achievement-list">
      {achievements.map((achievement, index) => (
        <Reveal key={achievement} className="achievement-card" delay={0.1 * (index + 1)}>
          <span>0{index + 1}</span>
          <p>{achievement}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Achievements;
