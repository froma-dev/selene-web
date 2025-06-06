import { Category } from "@src/types/Category";
import "@styles/Filter.css";

export interface FilterProps {
  id: string;
  name: string;
  isSelected?: boolean;
  onClick?: (filter: Category) => void;
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
      onClick={() => onClick?.(name as Category)}
    >
      {/* <span className={"filter-icon"}></span> */}
      <span className={"filter-name"}>{name}</span>
    </button>
  );
};

export default Filter;
