import Filter, { FilterProps } from "@components/Filter";
import "@styles/FilterList.css";

interface FilterListProps {
  filters: FilterProps[];
  selectedFilters: string[];
  onFilterSelect: FilterProps["onClick"];
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
            isSelected={selectedFilters.includes(filter.id)}
            onClick={onFilterSelect}
          />
        );
      })}
    </div>
  );
};

export default FilterList;
