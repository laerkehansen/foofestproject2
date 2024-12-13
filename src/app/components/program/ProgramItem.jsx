import Link from "next/link";
const ProgramItem = ({ item }) => {
  const { start, end, act, cancelled, location, day } = item;
  return (
    <li className="border-2 border-black mb-4 w-full">
      {/* linker til linup slug*/}
      <Link
        href={`/lineup/${act.toLowerCase().replace(/\s+/g, "-")}`}
        className="hover:bg-green block p-4"
      >
        <div className="flex justify-between pb-2">
          <h2 className="text-5xl italic font-Inter font-extrabold">{act}</h2>
          {/* <p>{day}</p> */}
          <p className="font-Inter font-semibold text-xl self-center">
            {start} - {end}
            <br />
            {cancelled && (
              //skal om styles
              <span className="bg-customPink rotate-45 font-Inter font-extrabold italic">
                (Cancelled)
              </span>
            )}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ProgramItem;
