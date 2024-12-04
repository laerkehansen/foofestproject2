import { getBands, getSchedule } from "../lib/api";
import ProgramList from "../components/ProgramList";

export default async function Home() {
  const bands = await getBands();

  return (
    <div>
      <ProgramList bands={bands} />
    </div>
  );
}
