import { getSchedule } from "../lib/api";
import { getToday } from "../lib/utils"; // Hent funktionen til at få dagens ugedag
import ProgramList from "../components/program/Programlist";
import Filter from "../components/program/ProgramFilter";
export default async function Program() {
  const schedule = await getSchedule();

  console.log(schedule);

  return (
    <div>
      <ProgramList schedule={schedule} />
    </div>
  );
}
