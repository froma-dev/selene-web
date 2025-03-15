import LinkedinIcon from "@assets/LinkedinIcon.jsx";
import BehanceIcon from "@assets/BehanceIcon.jsx";
import DribbbleIcon from "@assets/DribbbleIcon.jsx";
import YouTubeIcon from "@assets/YoutubeIcon.jsx";
import TikTokIcon from "@assets/TikTokIcon.jsx";

const mapIcon = {
  linkedin: <LinkedinIcon />,
  behance: <BehanceIcon />,
  dribbble: <DribbbleIcon />,
  youtube: <YouTubeIcon />,
  tiktok: <TikTokIcon />,
};
export type LinkIcon = keyof typeof mapIcon;
export type LinkType = "connect" | "social";
export type LinkData = {
  name: string;
  href: string;
  icon: LinkIcon;
  type: LinkType;
};

const Link = ({ link }: { link: LinkData }) => {
  const { name, href, icon } = link;
  return (
    <a href={href} aria-label={name} target="_blank" rel="noopener noreferrer">
      {mapIcon[icon]}
      <span>{name}</span>
    </a>
  );
};

export default Link;
