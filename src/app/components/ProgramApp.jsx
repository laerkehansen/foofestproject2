"use client";
import ProgramList from "../components/ProgramList";
import FilterMenuLineup from "./FilterMenuLineUp";
import { useState } from "react";
const ProgramApp = ({ bands }) => {
  const [dayFilter, setDayFilter] = useState([]);

  const filteredBands = bands.filter((band) => {
    const matchesName = band.name
      .toLowerCase()
      .includes(searchFilter.toLowerCase());
    const matchesGenre =
      genreFilter.length === 0 || genreFilter.includes(band.genre);
    return matchesName && matchesGenre;
  });

  return (
    <div className="grid grid-col-auto gap-4">
      <h1 className="uppercase font-Inter text-7xl italic py-20 text-center">
        Atrister
      </h1>
      <FilterMenuLineup
        setFilter={setSearchFilter}
        setFilterGenre={setGenreFilter}
        bandData={bands}
      />

      <ArtisList bandData={filteredBands}></ArtisList>
    </div>
  );
};

export default ProgramApp;
