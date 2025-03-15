import Filter, { FilterProps } from "@components/Filter";
import "@styles/FilterList.css";
import { type Category } from "src/types/Category";
interface FilterListProps {
  filters: FilterProps[];
  selectedFilters: string[];
  onFilterSelect: (filter: Category) => void;
}

const FilterList = ({
  filters,
  selectedFilters,
  onFilterSelect,
}: FilterListProps) => {
  return (
    <div className="filter-list">
      {filters.map((filter) => {
        return (
          <Filter
            key={filter.id}
            {...filter}
            isSelected={selectedFilters.includes(filter.name)}
            onClick={onFilterSelect}
          />
        );
      })}
    </div>
  );
};

export default FilterList;
