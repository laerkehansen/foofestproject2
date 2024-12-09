import { getSchedule } from "../lib/api";
import ProgramList from "../components/ProgramList";

export default async function Home() {
  const schedule = await getSchedule();
  console.log(schedule);

  return (
    <div>
      <ProgramList schedule={schedule} />
    </div>
  );
}
