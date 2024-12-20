import FrontHeroSection from "./components/frontPage/FrontHeroSection";

import FontSectionFront from "./components/frontPage/FontSectionFront";
import { getSchedule } from "@/app/lib/api";
import TodaysActs from "./components/frontPage/TodayActs";

export default async function Home() {
  const schedule = await getSchedule();

  return (
    <div className="">
      <FrontHeroSection />

      <TodaysActs schedule={schedule} />

      <FontSectionFront />
    </div>
  );
}
