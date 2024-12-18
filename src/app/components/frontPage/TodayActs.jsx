// "use client";
import { getToday } from "../../lib/utils.js";

import Link from "next/link.js";

// bruges ik her
const dayNames = {
  mon: "Mandag",
  tue: "Tirsdag",
  wed: "Onsdag",
  thu: "Torsdag",
  fri: "Fredag",
  sat: "Lørdag",
  sun: "Søndag",
};

const TodaysActs = ({ schedule }) => {
  const currentDay = getToday();

  // Filtrer aktiviteterne, så vi kun ser dem, der matcher den aktuelle dag
  const todaysActs = schedule.filter((act) => act.day === currentDay);
  return (
    <div className=" flex flex-col py-28 px-20 text-black">
      <div className=" flex  flex-wrap gap-2 pb-4 ">
        <h2 className=" font-bold text-6xl italic uppercase  col-start-2 text-black">
          Spiller idag - {dayNames[currentDay]}
        </h2>
        <Link
          className="bg-customPink p-2 font-medium border-2 uppercase hover:underline decoration-solid border-black place-self-center m-2 transition duration-150 ease-in-out
              hover:scale-110"
          href="/program"
        >
          se program
        </Link>
      </div>
      {todaysActs.length > 0 && (
        <ul className="flex flex-wrap col-start-2   gap-2 text-xl font-medium text-black">
          {todaysActs.map((act, index) => (
            <li
              key={index}
              className=" border-black border-2 p-2 w-fit text-black items-center gap-2 flex transition duration-150 ease-in-out
              hover:scale-110 bg-background"
            >
              <p className="uppercase">{act.act}</p>
              {/* - {dayNames[act.day]}: {act.start} -{" "}
              {act.end} */}
              {act.cancelled && (
                <span className=" bg-customPink p-1 text-sm italic">
                  (Aflyst)
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodaysActs;
