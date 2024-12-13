const GenreFilter = ({ setFilterGenre, bandData }) => {
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
    <div className="">
      <h3>Filter efter genre:</h3>
      <button
        onClick={resetGenres}
        className="p-2 bg-lime-500 text-white rounded mb-2"
      >
        Nulstil genrer
      </button>
      <div className="flex gap-2 flex-wrap ">
        {genres.map((genre) => (
          <label
            key={genre}
            className="border-4 border-black p-2 text-center w-fit"
          >
            <input
              type="checkbox"
              value={genre}
              onChange={handleCheckboxChange}
            />
            {genre}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
