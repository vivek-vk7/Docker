import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const About = () => (
  <section className="section" id="about">
    <Reveal>
      <SectionHeading
        eyebrow="About Me"
        title="A developer-in-progress with a strong interest in problem solving and product thinking."
        description="I enjoy combining technical fundamentals with practical development skills to build software that feels modern, useful, and reliable."
      />
    </Reveal>

    <div className="about-grid">
      <Reveal className="glass-card" delay={0.1}>
        <h3>Academic Background</h3>
        <p>
          I am currently pursuing Computer Science and Engineering at Lovely Professional
          University, where I am building a solid base in programming, software concepts, and
          core computer science subjects.
        </p>
      </Reveal>

      <Reveal className="glass-card" delay={0.2}>
        <h3>What Drives Me</h3>
        <p>
          My interests are especially aligned with data structures and algorithms, full stack
          development, and creating seamless user experiences that balance functionality with
          thoughtful design.
        </p>
      </Reveal>

      <Reveal className="glass-card" delay={0.3}>
        <h3>How I Work</h3>
        <p>
          I focus on writing clean code, learning by building, and improving through iteration.
          Every project helps me sharpen both technical depth and practical implementation skills.
        </p>
      </Reveal>
    </div>
  </section>
);

export default About;
