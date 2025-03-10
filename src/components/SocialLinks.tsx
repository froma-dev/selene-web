import "@styles/SocialLinks.css";
import YouTubeIcon from "@assets/YoutubeIcon.jsx";
import TikTokIcon from "@assets/TikTokIcon.jsx";

type SocialIcon = keyof typeof mapIcon;
export type SocialLink = {
  name: string;
  link: string;
  icon: SocialIcon;
};

const mapIcon = {
  youtube: <YouTubeIcon />,
  tiktok: <TikTokIcon />,
};
const SocialLinks = ({ socialLinks }: { socialLinks: SocialLink[] }) => {
  return (
    <ul className="social-links">
      {socialLinks.map((link) => (
        <li key={link.name} className="social-link">
          <a href={link.link}>
            {mapIcon[link.icon]}
            <span>{link.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
