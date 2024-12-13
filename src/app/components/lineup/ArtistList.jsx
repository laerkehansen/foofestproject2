import ArtistCard from "./ArtistCard";
const ArtisList = ({ bandData }) => {
  if (bandData.length === 0) {
    return <p>Ingen bands i denne kategori</p>;
  }

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
      {bandData.map((band) => (
        <ArtistCard band={band.band} key={band.band.slug} events={band.event} />
      ))}
    </ul>
  );
};

export default ArtisList;
