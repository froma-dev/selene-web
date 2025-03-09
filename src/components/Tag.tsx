import "@styles/Tag.css";

export interface TagProps {
  id?: string;
  name: string;
  icon?: string;
  buttonTag?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const Tag = ({
  name,
  icon,
  buttonTag,
  isSelected = false,
  id,
  className = "",
  onClick,
}: TagProps) => {
  return buttonTag ? (
    <button
      id={id}
      className={`tag button ${isSelected ? "selected" : ""} ${className}`}
      onClick={onClick}
    >
      {icon ? <span className="tag-icon">{icon}</span> : null}
      <span className="tag-name">{name}</span>
    </button>
  ) : (
    <div className={`tag ${className}`} id={id}>
      {icon ? <span className="tag-icon">{icon}</span> : null}
      <span className="tag-name">{name}</span>
    </div>
  );
};

export default Tag;
