import "@styles/ConnectLinks.css";
type ConnectLink = {
  name: string;
  link: string;
};

const ConnectLinks = ({ connectLinks }: { connectLinks: ConnectLink[] }) => {
  return (
    <ul className="connect-links">
      {connectLinks.map((link) => (
        <li key={link.name}>
          <a href={link.link}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default ConnectLinks;
