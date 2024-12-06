"use client";
import SearchFilterLineup from "./SearchFilterLineup";
import ArtisList from "../components/ArtistList";
import FilterMenuLineup from "./FilterMenuLineUp";
import { useState } from "react";
const ArtistApp = ({ bands }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState([]);

  const filteredBands = bands.filter((band) => {
    const matchesName = band.name
      .toLowerCase()
      .includes(searchFilter.toLowerCase());
    const matchesGenre =
      genreFilter.length === 0 || genreFilter.includes(band.genre);
    return matchesName && matchesGenre;

    // const matchesGenre = genreFilter === "" || band.genre === genreFilter;
    // return matchesName && matchesGenre;
  });

  return (
    <div className="grid grid-col-auto gap-4">
      <FilterMenuLineup
        setFilter={setSearchFilter}
        setFilterGenre={setGenreFilter}
        bandData={bands}
      />
      {/* <SearchFilterLineup setFilter={setSearchFilter} /> */}

      <ArtisList bandData={filteredBands}></ArtisList>
    </div>
  );
};

export default ArtistApp;
