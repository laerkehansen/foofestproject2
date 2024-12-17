import { getSchedule } from "../../lib/api";

import ProgramItem from "./ProgramItem";

const ProgramList = ({ schedule }) => {
  const groupedByLocation = schedule.reduce((acc, item) => {
    if (!acc[item.location]) acc[item.location] = [];
    acc[item.location].push(item);
    return acc;
  }, {});

  return (
    <div className="pt-10 text-black">
      {Object.entries(groupedByLocation).map(([location, events]) => (
        <div className="grid grid-cols-[0.5fr_1fr] " key={location}>
          <h3 className="text-6xl sticky top-10 text-black font-Inter font-extrabold italic uppercase">
            {location}
          </h3>

          <ul className="mb-10">
            {events

              // Sortere events efter starttidspunkt
              .sort((currentEvent, nextEvent) =>
                currentEvent.start.localeCompare(nextEvent.start)
              )
              .map((event, index) => (
                <ProgramItem key={index} item={event} />
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProgramList;
