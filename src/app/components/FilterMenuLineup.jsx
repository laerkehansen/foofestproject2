import GenreAcordian from "./GenreAcordian";
import GenreFilter from "./GenreFilter";
import SearchFilterLineup from "./SearchFilterLineup";
import { useState } from "react";
const FilterMenuLineup = ({ setFilter, bandData, setFilterGenre }) => {
  return (
    <div className=" w-screen">
      <SearchFilterLineup setFilter={setFilter} />
      <div>
        <GenreAcordian>
          <GenreFilter setFilterGenre={setFilterGenre} bandData={bandData} />
        </GenreAcordian>
      </div>
    </div>
  );
};

export default FilterMenuLineup;
