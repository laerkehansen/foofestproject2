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
    <div>
      <h3>Vælg dag:</h3>
      <div>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleDayChange(day)}
            className={`m-2 ${
              selectedDay === day ? "bg-customPink" : "bg-costumOrange"
            } text-white border-none px-4 py-2 cursor-pointer`}
          >
            {dayNames[day]} {/* Brug danske navne */}
          </button>
        ))}
      </div>

      {selectedDay && (
        <>
          <h4>Vælg scene:</h4>
          <div>
            {(scenesByDay[selectedDay] || []).map((scene) => (
              <button
                key={scene}
                onClick={() => handleSceneChange(scene)}
                style={{
                  margin: "0.5rem",
                  backgroundColor: selectedScene === scene ? "#007bff" : "#ccc",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                }}
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
