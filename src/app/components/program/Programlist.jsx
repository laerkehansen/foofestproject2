import { getSchedule } from "../../lib/api";

import ProgramItem from "./ProgramItem";

const Programlist = ({ schedule }) => {
  console.log("ProgramList schedule:", schedule);

  // 1. Gruppér events efter dag
  const groupedByDay = schedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {});

  // 2. Lav en liste af dagene i ugedagens rækkefølge
  const orderedDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <div>
      {orderedDays.map((day) => {
        const eventsForDay = groupedByDay[day] || [];

        // 3. Gruppér events for dagen efter lokation
        const groupedByLocation = eventsForDay.reduce((acc, item) => {
          if (!acc[item.location]) {
            acc[item.location] = [];
          }
          acc[item.location].push(item);
          return acc;
        }, {});

        return (
          <div key={day} style={{ marginBottom: "2rem" }}>
            <h2 className="text-4xl">{day}</h2>
            {Object.entries(groupedByLocation).map(([location, events]) => (
              <div key={location}>
                <h3 className="text-orange-950 text-7xl">{location}</h3>
                {events
                  .sort((a, b) => a.start.localeCompare(b.start)) // Sortér events efter starttid
                  .map((event, index) => (
                    <ProgramItem key={index} item={event} />
                  ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

// Hjælpefunktion til at gøre dagene pænere

export default Programlist;
