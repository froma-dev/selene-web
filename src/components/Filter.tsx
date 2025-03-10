import "@styles/Filter.css";

export type Filter = "video" | "illustration" | "design" | "animation";
export interface FilterProps {
  id: Filter;
  name: string;
  isSelected?: boolean;
  onClick?: (filter: Filter) => void;
  className?: string;
}

const Filter = ({
  name,
  isSelected = false,
  id,
  className = "",
  onClick,
}: FilterProps) => {
  const classNames = [
    "filter",
    `filter-${id}`,
    "button",
    isSelected ? "selected" : "",
    className,
  ];

  return (
    <button
      id={id}
      className={classNames.join(" ")}
      onClick={() => onClick?.(id)}
    >
      {/* <span className={"filter-icon"}></span> */}
      <span className={"filter-name"}>{name}</span>
    </button>
  );
};

export default Filter;
