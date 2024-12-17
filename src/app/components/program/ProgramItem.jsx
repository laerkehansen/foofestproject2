import Link from "next/link";
const ProgramItem = ({ item }) => {
  const { start, end, act, cancelled, location, day } = item;
  return (
    <li className="border-2 border-black mb-4 w-full text-black">
      {/* linker til linup slug*/}
      <Link
        href={`/lineup/${act.toLowerCase().replace(/\s+/g, "-")}`}
        className="hover:bg-green block p-4"
      >
        <div className="flex justify-between pb-2">
          <h2 className="md:text-5xl sm:text-2xl italic font-extrabold text-black">
            {act}
          </h2>
          {/* <p>{day}</p> */}
          <p className=" font-semibold md:text-xl sm:text-lg self-center text-black text-nowrap">
            {start} - {end}
            <br />
            {cancelled && (
              //skal om styles
              <span className="bg-customPink rotate-45 font-extrabold italic text-black">
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
