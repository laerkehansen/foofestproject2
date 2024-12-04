import ProgramItem from "./ProgramItem";

const Programlist = ({ bands }) => {
  return (
    <ul className="grid ">
      {bands.map((band) => (
        <ProgramItem band={band} key={band.slug} />
      ))}
    </ul>
  );
};

export default Programlist;
