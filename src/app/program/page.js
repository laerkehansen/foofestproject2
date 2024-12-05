import { getBands, getSchedule } from "../lib/api";
import ProgramList from "../components/ProgramList";

export default async function Home() {
  const bands = await getBands();
  const schedule = await getSchedule();

  return (
    <div>
      <ProgramList bands={bands} />
    </div>
  );
}
