import "@styles/Header.css";
interface BrandImage {
  src: string;
  alt: string;
}
interface HeaderProps {
  logo: BrandImage;
  name?: string;
}

const Header = ({ logo, name }: HeaderProps) => {
  const { src, alt } = logo;

  return (
    <header>
      <div className="brand">
        <img src={src} alt={`${alt} logo`} className="brand-image" />
        {name ? <h1 className="brand-name">{name}</h1> : null}
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
