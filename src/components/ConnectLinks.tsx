import "@styles/ConnectLinks.css";
import LinkedinIcon from "@assets/LinkedinIcon.jsx";
import BehanceIcon from "@assets/BehanceIcon.jsx";
import DribbbleIcon from "@assets/DribbbleIcon.jsx";

type ConnectIcon = keyof typeof mapIcon;
export type ConnectLink = {
  name: string;
  link: string;
  icon: ConnectIcon;
};

const mapIcon = {
  linkedin: <LinkedinIcon />,
  behance: <BehanceIcon />,
  dribbble: <DribbbleIcon />,
};

const ConnectLinks = ({ connectLinks }: { connectLinks: ConnectLink[] }) => {
  return (
    <ul className="connect-links">
      {connectLinks.map((link) => (
        <li key={link.name} className="connect-link">
          <a href={link.link}>
            {mapIcon[link.icon]}
            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ConnectLinks;
