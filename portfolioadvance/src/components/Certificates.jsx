import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { certificates } from '../data/portfolioData';

const Certificates = () => (
  <section className="section" id="certificates">
    <Reveal>
      <SectionHeading
        eyebrow="Certificates"
        title="Learning milestones that strengthen both my technical knowledge and industry readiness."
        description="These certifications reflect my effort to build a strong foundation across cloud, networking, AI, and systems concepts."
      />
    </Reveal>

    <div className="certificates-grid">
      {certificates.map((certificate, index) => (
        <Reveal key={certificate.title} className="certificate-card" delay={0.1 * (index + 1)}>
          <span className="certificate-badge">{certificate.issuer}</span>
          <h3>{certificate.title}</h3>
          <p>{certificate.subtitle}</p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Certificates;
