import FrontHeroSection from "./components/frontPage/FrontHeroSection";
import NowPlaying from "./components/NowPlaying";
import FrontPageNames from "./components/frontPage/FrontpageNames";
import { getBands } from "@/app/lib/api";
import Footer from "./components/navigation/Footer";
import ImageSectionFront from "./components/ImageSectionFront";
import OptionSectionFront from "./components/frontPage/OptionSectionFront";
import FontSectionFront from "./components/frontPage/FontSectionFront";

export default async function Home() {
  const bands = await getBands();
  return (
    <div>
      <FrontHeroSection />
      <NowPlaying />
      <FrontPageNames data={bands} />
      <ImageSectionFront />
      <OptionSectionFront />
      <FontSectionFront />
      <Footer />
    </div>
  );
}
