"use client";
import { useState, useEffect } from "react";

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

const Filter = ({ days, scenesByDay, onFilterChange }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedScene, setSelectedScene] = useState(null);
  const [isClient, setIsClient] = useState(false); // For at tjekke om vi er på klienten

  // Brug useEffect til kun at aktivere client-side logik
  useEffect(() => {
    setIsClient(true); // Sæt isClient til true når komponenten renderes på klienten
  }, []);

  // Håndtering af dagvalg
  const handleDayChange = (day) => {
    setSelectedDay(day);
    setSelectedScene(null); // Nulstil scenevalg, når en ny dag vælges
    onFilterChange(day, null); // Informér om det nye filtervalg
  };

  // Håndtering af scenevalg
  const handleSceneChange = (scene) => {
    setSelectedScene(scene);
    onFilterChange(selectedDay, scene); // Informér om det nye filtervalg
  };

  if (!isClient) {
    return null; // Returner ingenting på serveren, indtil vi er på klienten
  }

  return (
    <div>
      <h3>Vælg dag:</h3>
      <div>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleDayChange(day)}
            style={{
              margin: "0.5rem",
              backgroundColor: selectedDay === day ? "#007bff" : "#ccc",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
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
