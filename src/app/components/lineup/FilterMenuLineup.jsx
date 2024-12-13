import GenreAcordian from "./GenreAcordian";
import GenreFilter from "./GenreFilter";
import SearchFilterLineup from "./SearchFilterLineup";
// import { useState } from "react";
const FilterMenuLineup = ({ setFilter, bandData, setFilterGenre }) => {
  return (
    <div>
      {/* <SearchFilterLineup setFilter={setFilter} /> */}
      <div>
        <GenreAcordian>
          <GenreFilter
            setFilterGenre={setFilterGenre}
            bandData={bandData}
            setFilter={setFilter}
          />
        </GenreAcordian>
      </div>
    </div>
  );
};

export default FilterMenuLineup;
