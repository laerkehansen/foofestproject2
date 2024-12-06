import Image from "next/image";
import { getHeroImg } from "@/app/lib/api";
import { getLogoUrl } from "../lib/utils";
import Button from "./button";

export default async function FrontHeroImg() {
  // Hent data fra API
  const refused = await getHeroImg();

  // Kontrollér, om logo er tilgængeligt
  if (!refused || !refused.logo) {
    throw new Error("Logo not found in API response.");
  }
  // Generér URL fra logo-data
  const logoUrl = getLogoUrl(refused.logo);

  return (
    <div className="grid grid-cols-[0.2fr_1fr_0.5fr_0.5fr_0.1fr] grid-rows-[0.1fr_0.6fr_0.2fr_0.1fr]">
      <div className="grid grid-cols-subgrid grid-rows-subgrid col-span-full row-span-full items-end">
        <Image
          className="col-span-full row-span-full"
          src={logoUrl}
          width={1512}
          height={868}
          alt="hero image"
          priority={true}
        />
        <h1 className="col-start-2 col-end-2 row-start-2 font-Inter font-black text-heroText leading-heroLeading italic text-white h-fit">
          FOO FEST
        </h1>
        <div className="flex flex-col gap-6 col-start-4 row-start-3 items-end">
          <Button text="Billetter" link="billetter" />
          <Button text="Program" link="program" />
        </div>
      </div>
    </div>
  );
}
