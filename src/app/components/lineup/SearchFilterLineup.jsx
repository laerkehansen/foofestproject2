const SearchFilterLineup = ({ setFilter }) => {
  return (
    <div>
      <label htmlFor="søg"></label>
      <input
        type="text"
        name="søg"
        id="søg"
        placeholder="Søg Sfter Artister"
        className=" border-2 border-gray-100"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchFilterLineup;
