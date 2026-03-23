import { motion } from 'framer-motion';
import { heroStats, socialLinks } from '../data/portfolioData';

const Hero = () => (
  <section className="hero section" id="home">
    <div className="hero-copy">
      <motion.span
        className="hero-kicker"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Vivek Kumar
      </motion.h1>

      <motion.h2 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>Aspiring Software Developer</motion.h2>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        I am a Computer Science and Engineering student at Lovely Professional University with
        a growing foundation in data structures, algorithms, and full stack development. I enjoy
        turning ideas into polished interfaces and practical applications that solve real
        problems, while continuously improving my problem-solving mindset through consistent
        coding practice.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a className="button button-primary" href="/vivek-kumar-resume.pdf" download>
          Download Resume
        </a>
        <a className="button button-secondary" href="#contact">
          Contact Me
        </a>
        <a className="button button-ghost" href="#projects">
          View Projects
        </a>
      </motion.div>

      <motion.div
        className="hero-socials"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {socialLinks.map((social) => (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        ))}
      </motion.div>
    </div>

    <motion.div
      className="hero-panel"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
    >
      <div className="panel-glow" />
      <div className="hero-card">
        <span className="availability">Open to internships and collaborations</span>
        <h3>Focused on growth, consistency, and meaningful software projects.</h3>
        <p>
          My current learning journey is centered on strengthening DSA fundamentals, building
          production-style web projects, and developing the discipline required for modern
          software engineering roles.
        </p>
      </div>

      <div className="stats-grid">
        {heroStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Hero;
