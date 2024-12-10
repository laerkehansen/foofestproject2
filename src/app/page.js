import FrontHeroSection from "./components/FrontHeroSection";
import NowPlaying from "./components/NowPlaying";
import FrontPageNames from "./components/FrontpageNames";
import { getBands } from "@/app/lib/api";
import Footer from "./components/Footer";
import ImageSectionFront from "./components/ImageSectionFront";
import OptionSectionFront from "./components/OptionSectionFront";
import FontSectionFront from "./components/FontSectionFront";

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
