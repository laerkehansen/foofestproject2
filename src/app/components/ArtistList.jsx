import ArtistCard from "./ArtistCard";
const ArtisList = ({ bands }) => {
  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
      {bands.map((band) => (
        <ArtistCard band={band} key={band.slug} />
      ))}
    </ul>
  );
};

export default ArtisList;
