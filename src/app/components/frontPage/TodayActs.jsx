"use client";
import { getToday } from "../../lib/utils.js";
import { useState } from "react";

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
    <div className="grid grid-cols-[0.1fr_1fr_0.1fr] gap-10 py-28">
      <h2 className="font-Inter font-black text-7xl italic text-center col-start-2">
        Dagens Aktiviteter - {dayNames[currentDay]}
      </h2>
      {todaysActs.length > 0 && (
        <ul className="flex flex-wrap col-start-2 justify-center gap-2 text-2xl">
          {todaysActs.map((act, index) => (
            <li
              key={index}
              className="font-Inter border-black border-2 p-2 w-fit"
            >
              <strong>{act.act}</strong>
              {/* - {dayNames[act.day]}: {act.start} -{" "}
              {act.end} */}
              {act.cancelled && <span style={{ color: "red" }}> (Aflyst)</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodaysActs;
