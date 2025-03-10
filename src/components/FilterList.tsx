import Filter, {
  FilterProps,
  type Filter as FilterType,
} from "@components/Filter";
import "@styles/FilterList.css";

interface FilterListProps {
  filters: FilterProps[];
  selectedFilters: FilterType[];
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
