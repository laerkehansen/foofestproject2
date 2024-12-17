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
    <div className="grid grid-cols-[0.1fr_1fr_0.1fr] gap-10 py-28 text-black">
      <h2 className=" font-bold text-6xl italic uppercase  col-start-2 text-black">
        Spiller idag - {dayNames[currentDay]}
      </h2>
      {todaysActs.length > 0 && (
        <ul className="flex flex-wrap col-start-2  gap-2 text-xl font-medium text-black">
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
      <Link className="bg-customPink h-8 w-10 " href="/progam">
        se program
      </Link>
    </div>
  );
};

export default TodaysActs;
