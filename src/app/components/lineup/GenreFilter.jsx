"use client";
import { useState, useEffect } from "react";

const GenreFilter = ({ setFilterGenre, bandData }) => {
  // Find unikke genrer i dataen
  const genres = Array.from(new Set(bandData.map((band) => band.band.genre)));

  // Tilføj en tilstand for at holde styr på valgte genrer og nulstillingsstatus
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    // Opdater `setFilterGenre` med valgte genrer
    setFilterGenre(selectedGenres);
  }, [selectedGenres, setFilterGenre]);

  // Håndter ændringer i checkbox
  const handleCheckboxChange = (e) => {
    const genre = e.target.value;
    setSelectedGenres(
      (prevGenres) =>
        prevGenres.includes(genre)
          ? prevGenres.filter((g) => g !== genre) // Fjern genre
          : [...prevGenres, genre] // Tilføj genre
    );
  };

  // Nulstil alle valgte genrer
  const resetGenres = (e) => {
    e.preventDefault(); // Forhindrer formen i at blive sendt
    setSelectedGenres([]); // Fjern alle valgte genrer
  };

  return (
    <form className="p-4">
      <h3 className="text-lg font-bold mb-3">Filter efter genre:</h3>
      <button
        type="button"
        onClick={resetGenres}
        className={`p-2 text-white rounded mb-4 transition duration-300 ${
          selectedGenres.length === 0
            ? "bg-lime-300 hover:bg-lime-400"
            : "bg-lime-500 hover:bg-lime-600"
        }`}
      >
        {selectedGenres.length === 0 ? "Genrer nulstillet" : "Nulstil genrer"}
      </button>
      <div className="flex gap-2 flex-wrap">
        {genres.map((genre) => (
          <label
            key={genre}
            className="flex items-center gap-2 border-4 border-transparent p-2 text-center w-fit rounded-lg transition-all duration-300"
          >
            <input
              type="checkbox"
              value={genre}
              checked={selectedGenres.includes(genre)} // Tjek om genre er valgt
              onChange={handleCheckboxChange}
              className="sr-only"
              aria-label={`Filter efter genre: ${genre}`}
            />
            <span
              className={`px-4 py-2 rounded-lg cursor-pointer ${
                selectedGenres.includes(genre) // Hvis genre er valgt, ændre baggrundsfarve
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {genre}
            </span>
          </label>
        ))}
      </div>
    </form>
  );
};

export default GenreFilter;
