import { getScheduleWithBands } from "@/app/lib/api";
// import ArtistApp from "../components/lineup/ArtistApp";
import ArtistApp from "../components/lineup/ArtistApp";

export default async function Home() {
  const scheduleBand = await getScheduleWithBands();
  console.log(scheduleBand);

  // console.log(bands);

  return (
    <div>
      <ArtistApp scheduleBand={scheduleBand} />
    </div>
  );
}
