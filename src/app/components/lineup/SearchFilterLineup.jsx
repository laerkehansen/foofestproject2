const SearchFilterLineup = ({ setFilter }) => {
  return (
    <div className="pb-6">
      <label htmlFor="søg"></label>
      <input
        type="text"
        name="søg"
        id="søg"
        placeholder="Søg efter artister"
        className=" border-2 border-black text-xl p-1"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchFilterLineup;
