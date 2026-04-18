import { navLinks } from '../data/portfolioData';

const Navbar = () => (
  <header className="site-header">
    <a className="brand-mark" href="#home">
      <span>V</span>
      <div>
        <strong>Vivek Kumar</strong>
        <small>Aspiring Software Developer</small>
      </div>
    </a>

    <nav className="nav-links" aria-label="Primary navigation">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>

    <a className="nav-cta" href="#contact">
      Let's Connect
    </a>
  </header>
);

export default Navbar;
