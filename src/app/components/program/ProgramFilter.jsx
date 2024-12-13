"use client";
import { useState } from "react";

// Din mapping for dagene
const dayNames = {
  mon: "Mandag",
  tue: "Tirsdag",
  wed: "Onsdag",
  thu: "Torsdag",
  fri: "Fredag",
  sat: "Lørdag",
  sun: "Søndag",
};

const Filter = ({ days, scenesByDay, onFilterChange, currentDay }) => {
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [selectedScene, setSelectedScene] = useState(null);

  const handleDayChange = (day) => {
    setSelectedDay(day);
    setSelectedScene(null); // Nulstil scenevalg
    onFilterChange(day, null); // Opdater valget i det overordnede komponent
  };

  const handleSceneChange = (scene) => {
    setSelectedScene(scene);
    onFilterChange(selectedDay, scene); // Opdater valget i det overordnede komponent
  };

  return (
    <div className="pt-16">
      <h3 className="text-xl font-Inter font-semibold italic">Vælg dag:</h3>
      <div>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleDayChange(day)}
            className={`m-2 ${
              selectedDay === day ? "bg-customPink" : "bg-background"
            } text-black border-black border-2 px-4 py-2 cursor-pointer text-xl font-Inter font-semibold`}
          >
            {dayNames[day]} {/* Brug danske navne */}
          </button>
        ))}
      </div>

      {selectedDay && (
        <>
          <h4 className="text-xl font-Inter font-semibold italic">
            Vælg scene:
          </h4>
          <div>
            {(scenesByDay[selectedDay] || []).map((scene) => (
              <button
                key={scene}
                onClick={() => handleSceneChange(scene)}
                className={`m-2 ${
                  selectedScene === scene ? "!bg-customPink" : "bg-background"
                } text-black border-black border-2 px-4 py-2 cursor-pointer text-xl font-Inter font-semibold`}
              >
                {scene}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;
