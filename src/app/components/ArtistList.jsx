import ArtistCard from "./ArtistCard";
const ArtisList = ({ bandData }) => {
  if (bandData.length === 0) {
    return <p>Ingen bands i denne kategori</p>;
  }

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  ">
      {bandData.map((band) => (
        <ArtistCard band={band} key={band.slug} />
      ))}
    </ul>
  );
};

export default ArtisList;
