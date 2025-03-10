import "@styles/SocialLinks.css";
type SocialLink = {
  name: string;
  link: string;
};
const SocialLinks = ({ socialLinks }: { socialLinks: SocialLink[] }) => {
  return (
    <ul className="social-links">
      {socialLinks.map((link) => (
        <li key={link.name}>
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
