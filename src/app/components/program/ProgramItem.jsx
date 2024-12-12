import Link from "next/link";
const ProgramItem = ({ key, item }) => {
  const { start, end, act, cancelled, location, day } = item;
  return (
    <li>
      <h2>{act}</h2>
      <p>{day}</p>
      <p>
        {start} - {end}:
        {cancelled && (
          //skal om styles
          <span style={{ color: "red" }}>(Cancelled)</span>
        )}
      </p>
    </li>
  );
};

export default ProgramItem;
