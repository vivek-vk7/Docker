import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { socialLinks } from '../data/portfolioData';

const Contact = () => (
  <section className="section" id="contact">
    <Reveal>
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect for opportunities, collaborations, or conversations around software development."
        description="I am open to internships, learning opportunities, and building impactful digital experiences with great teams."
      />
    </Reveal>

    <div className="contact-card">
      <Reveal className="contact-panel" delay={0.1}>
        <span className="contact-label">Email</span>
        <a className="contact-email" href="mailto:imvivek2005@gmail.com">
          imvivek2005@gmail.com
        </a>
        <p>
          If you would like to discuss a project, internship, or collaboration, feel free to
          reach out. I would be glad to connect.
        </p>
      </Reveal>

      <Reveal className="contact-panel" delay={0.2}>
        <span className="contact-label">Profiles</span>
        <div className="contact-links">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
        <a className="button button-primary contact-button" href="/vivek-kumar-resume.pdf" download>
          Download Resume
        </a>
      </Reveal>
    </div>
  </section>
);

export default Contact;
