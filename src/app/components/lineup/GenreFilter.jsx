import SearchFilterLineup from "./SearchFilterLineup";

const GenreFilter = ({ setFilterGenre, bandData, setFilter }) => {
  // Find unikke genrer i dataen
  const genres = Array.from(new Set(bandData.map((band) => band.band.genre)));

  // Håndter ændringer i checkbox
  const handleCheckboxChange = (e) => {
    const genre = e.target.value;
    setFilterGenre((prevGenres) => {
      return prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre) // Fjern genre
        : [...prevGenres, genre]; // Tilføj genre
    });
  };

  // Nulstil alle valgte genrer
  const resetGenres = () => {
    setFilterGenre([]);
  };

  return (
    <div className="pt-10">
      <div className="flex gap-4">
        <h3 className="font-Inter text-xl font-extrabold italic pb-4 text-black">
          Filter efter genre:
        </h3>
        <SearchFilterLineup setFilter={setFilter} />
      </div>
      <div className="flex gap-2 flex-wrap justify-center">
        {genres.map((genre) => (
          <label
            key={genre}
            className="border-2 text-mid  border-black p-2 text-center w-fit text-black"
          >
            <input
              type="checkbox"
              value={genre}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            {genre}
          </label>
        ))}
        <button
          onClick={resetGenres}
          className="p-2 bg-green border-black border-2  font-semibold text-black text-xl "
        >
          Nulstil genrer
        </button>
      </div>
    </div>
  );
};

export default GenreFilter;
