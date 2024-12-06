import Image from "next/image";
import Swirl from "@/app/img/swirl.svg";
import NowPlayingImg from "./NowPlayingImg";

const NowPlaying = () => {
  return (
    <div className="grid grid-cols-[0.1fr_0.2fr_1fr_0.2fr_0.1fr] grid-rows-[0.3fr_0.3fr] justify-center py-20">
      <div className="flex gap-4 items-center col-start-2 col-end-5 justify-center pb-16">
        <h2 className="font-Inter text-7xl italic font-black text-black">
          Now Playing
        </h2>
        <Image src={Swirl} alt="cirkel" />
      </div>
      <NowPlayingImg className="row-start-2" />
    </div>
  );
};

export default NowPlaying;
