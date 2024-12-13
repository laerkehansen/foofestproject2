"use client"; // Vi bruger klientfunktioner som useState
import { useState } from "react";

import Filter from "./ProgramFilter";
import ProgramList from "./Programlist";
import { getToday } from "../../lib/utils.js";

const dayNames = {
  mon: "Mandag",
  tue: "Tirsdag",
  wed: "Onsdag",
  thu: "Torsdag",
  fri: "Fredag",
  sat: "Lørdag",
  sun: "Søndag",
};

const ProgramApp = ({ schedule }) => {
  const currentDay = getToday();
  const [selectedDay, setSelectedDay] = useState(currentDay); // Brug dagen direkte her
  const [selectedScene, setSelectedScene] = useState(null);

  // Gruppér scener efter dag
  const scenesByDay = schedule.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    if (!acc[item.day].includes(item.location))
      acc[item.day].push(item.location);
    return acc;
  }, {});

  // Filtrér programmet baseret på brugerens valg
  const filteredPrograms = schedule.filter(
    (item) =>
      (!selectedDay || item.day === selectedDay) &&
      (!selectedScene || item.location === selectedScene)
  );

  return (
    <div className="col-start-2 col-end-4">
      <Filter
        days={Object.keys(dayNames)}
        scenesByDay={scenesByDay}
        currentDay={currentDay}
        onFilterChange={(day, scene) => {
          setSelectedDay(day);
          setSelectedScene(scene);
        }}
      />
      <ProgramList schedule={filteredPrograms} />
    </div>
  );
};

export default ProgramApp;
