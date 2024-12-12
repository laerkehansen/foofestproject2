import { getSchedule } from "../lib/api";
import { getToday } from "../lib/utils"; // Hent funktionen til at få dagens ugedag
import ProgramList from "../components/program/Programlist";
import Filter from "../components/program/ProgramFilter";
import ProgramApp from "../components/program/ProgramApp";

export default async function Program() {
  const schedule = await getSchedule(); // Hent programdata fra API
  return (
    <div className="py-11">
      <ProgramApp schedule={schedule} />
    </div>
  );
}
