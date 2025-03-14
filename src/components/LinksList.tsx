import "@styles/ConnectLinks.css";
import "@styles/SocialLinks.css";
import Link, { LinkData } from "@components/Link";

type LinksListProps = {
  links: LinkData[];
};

const LinksList = ({ links }: LinksListProps) => {
  const socialLinks: LinkData[] = [];
  const connectLinks = links.filter((link) => {
    if (link.type === "connect") return link;
    else socialLinks.push(link);
  });

  return (
    <>
      <ul className="connect-links">
        {connectLinks.map((link) => (
          <li key={link.name} className="connect-link">
            <Link link={link} />
          </li>
        ))}
      </ul>

      <ul className="social-links">
        {socialLinks.map((link) => (
          <li key={link.name} className="social-link">
            <Link link={link} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default LinksList;
