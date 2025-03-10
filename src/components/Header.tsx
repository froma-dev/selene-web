import { useScrollToElement } from "@hooks/useScrollToElement";
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
  const scrollToElement = useScrollToElement();
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    elementId: string
  ) => {
    e.preventDefault();
    scrollToElement(elementId);
  };

  return (
    <div className="header-container sticky">
      <header>
        <div className="brand">
          <img src={src} alt={`${alt} logo`} className="brand-image" />
          {name ? <h1 className="brand-name">{name}</h1> : null}
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={(e) => handleNavClick(e, "projects")}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={(e) => handleNavClick(e, "connect")}
                href="#connect"
              >
                Connect
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
