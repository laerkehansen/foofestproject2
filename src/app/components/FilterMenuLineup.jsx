import GenreFilter from "./GenreFilter";
import SearchFilterLineup from "./SearchFilterLineup";
const FilterMenuLineup = ({ setFilter, bandData, setFilterGenre }) => {
  return (
    <div className="h-44 w-screen">
      <GenreFilter setFilterGenre={setFilterGenre} bandData={bandData} />
      <SearchFilterLineup setFilter={setFilter} />
    </div>
  );
};

export default FilterMenuLineup;
