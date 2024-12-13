import FrontHeroSection from "./components/frontPage/FrontHeroSection";
import NowPlaying from "./components/NowPlaying";
import FrontPageNames from "./components/frontPage/FrontpageNames";
// import { getBands } from "@/app/lib/api";
import Footer from "./components/navigation/Footer";
import ImageSectionFront from "./components/ImageSectionFront";
import OptionSectionFront from "./components/frontPage/OptionSectionFront";
import FontSectionFront from "./components/frontPage/FontSectionFront";
import { getSchedule } from "@/app/lib/api";
import TodaysActs from "./components/frontPage/TodayActs";

export default async function Home() {
  // const bands = await getBands();
  const schedule = await getSchedule(); // Hent programdata fra API
  // console.log(schedule);
  return (
    <div>
      <FrontHeroSection />
      <NowPlaying />
      <TodaysActs schedule={schedule} />
      {/* <FrontPageNames data={bands} /> */}
      <ImageSectionFront />
      <OptionSectionFront />
      <FontSectionFront />
      <Footer />
    </div>
  );
}
