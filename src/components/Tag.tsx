import "@styles/Tag.css";

export interface TagProps {
  id: string;
  name: string;
  icon: string;
  buttonTag?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const Tag = ({
  name,
  icon,
  buttonTag,
  isSelected = false,
  onClick,
}: TagProps) => {
  return buttonTag ? (
    <button
      className={`tag button ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {icon ? <span className="tag-icon">{icon}</span> : null}
      <span className="tag-name">{name}</span>
    </button>
  ) : (
    <div className="tag">
      {icon ? <span className="tag-icon">{icon}</span> : null}
      <span className="tag-name">{name}</span>
    </div>
  );
};

export default Tag;
