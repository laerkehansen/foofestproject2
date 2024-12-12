import Link from "next/link";
const ProgramItem = ({ item }) => {
  const { start, end, act, cancelled, location, day } = item;
  return (
    <li className="border-2 border-black p-2 flex flex-row justify-between">
      <h2>{act}</h2>
      <div className="flex flex-col gap-2 justify-end">
        <p>{day}</p>
        <p>
          {start} - {end}:
          <br />
          {cancelled && (
            //skal om styles
            <span style={{ color: "red" }}>(Cancelled)</span>
          )}
        </p>
      </div>
    </li>
  );
};

export default ProgramItem;
