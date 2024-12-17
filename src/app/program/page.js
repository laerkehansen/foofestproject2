import { getSchedule } from "../lib/api";
import { getToday } from "../lib/utils"; // Hent funktionen til at få dagens ugedag
import ProgramList from "../components/program/Programlist";
import Filter from "../components/program/ProgramFilter";
import ProgramApp from "../components/program/ProgramApp";

export default async function Program() {
  const schedule = await getSchedule(); // Hent programdata fra API
  // console.log(schedule);
  return (
    <div className="grid grid-cols-[0.1fr_0.3fr_1.5fr_0.1fr]">
      <h1 className="sm:text-6xl md:text-8xl col-start-2  col-end-4 uppercase font-extrabold pt-28 italic text-black">
        Foo Program
      </h1>
      <ProgramApp schedule={schedule} />
    </div>
  );
}
