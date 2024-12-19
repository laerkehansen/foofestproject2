import ArtistCard from "./ArtistCard";
const ArtisList = ({ bandData }) => {
  if (bandData.length === 0) {
    return <p>Ingen bands i denne kategori</p>;
  }

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 text-black lg:px-20 sm:px-8 pb-10">
      {bandData.map((bandObj) => (
        <ArtistCard
          // sendes som objekt for daten er ik 2 aray
          key={bandObj.band.slug}
          band={bandObj.band}
          events={bandObj}
        />
      ))}
    </ul>
  );
};

export default ArtisList;
