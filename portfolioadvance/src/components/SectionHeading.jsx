const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="section-heading">
    <span className="section-eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default SectionHeading;
