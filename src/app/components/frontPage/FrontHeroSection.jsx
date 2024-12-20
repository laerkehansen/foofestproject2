import Image from "next/image";
// import { getHeroImg } from "@/app/lib/api";
// import { getLogoUrl } from "../../lib/utils";
import LinkKnap from "./LinkKnap";
import { FaArrowDown } from "react-icons/fa";
import HeroImg from "@/app/img/concert-3084876_1280.jpg";

export default async function FrontHeroImg() {
  // Hent data fra API
  // const refused = await getHeroImg();

  // Kontrollér, om logo er tilgængeligt
  // if (!refused || !refused.logo) {
  //   throw new Error("Logo not found in API response.");
  // }
  // Generér URL fra logo-data
  // const logoUrl = getLogoUrl(refused.logo);

  return (
    <div className="grid lg:grid-cols-[0.2fr_1fr_0.5fr_0.5fr_0.1fr]  lg:grid-rows-[0.1fr_0.5fr_0.2fr_0.1fr] sm:grid-cols-1 sm:grid-rows-1">
      <div className="grid grid-cols-subgrid grid-rows-subgrid col-span-full row-span-full items-end">
        <Image
          className="col-span-full row-span-full grayscale z-0"
          src={HeroImg}
          width={1512}
          height={868}
          alt="hero image"
          priority
        />
        <h1 className="text-green col-start-2 col-end-2 row-start-2 lg:text-heroText md:text-9xl sm:text-4xl pb-4 lg:leading-[0.7] md:leading-[0.7] sm:leading-[0.7] font-black  italic h-fit z-10">
          FOO <br /> FEST
        </h1>

        <div className="flex flex-row gap-2 col-start-4 row-start-3 items-end z-10">
          <LinkKnap
            text="køb Billetter"
            link="billetter"
            bgColor="customPink"
          />

          <LinkKnap text="se Program" link="program" />
        </div>
      </div>
    </div>
  );
}
