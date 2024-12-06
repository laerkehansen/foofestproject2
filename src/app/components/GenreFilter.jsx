const GenreFilter = ({ setFilterGenre, bandData }) => {
  // laver array med alle gennere som er i dataen

  const genres = Array.from(new Set(bandData.map((band) => band.genre)));
  return (
    <select className="p-2" onChange={(e) => setFilterGenre(e.target.value)}>
      <option value="">Vis alle</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default GenreFilter;
