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
    <div>
      <h2>Dagens Aktiviteter - {dayNames[currentDay]}</h2>
      {todaysActs.length > 0 && (
        <ul>
          {todaysActs.map((act, index) => (
            <li key={index}>
              <strong>{act.act}</strong> - {dayNames[act.day]}: {act.start} -{" "}
              {act.end}
              {act.cancelled && <span style={{ color: "red" }}> (Aflyst)</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodaysActs;
