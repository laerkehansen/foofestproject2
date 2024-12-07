import Image from "next/image";
import { getLogoUrl } from "../lib/utils";
import Link from "next/link";
const ArtistCard = ({ band }) => {
  const { name, logo, slug, genre } = band;
  return (
    <li key={band.slug} className="bg-black">
      <Link
        href={`/lineup/${slug}`}
        className="grid grid-cols-[0.1fr_1fr_auto_0.1fr] grid-rows-[0.1fr_0.1fr_0.7fr_auto] "
      >
        <div className="grid col-span-full row-span-full grid-rows-subgrid grid-cols-subgrid object-cover">
          <Image
            src={getLogoUrl(logo)}
            alt={`Billede af ${name}`}
            width={504}
            height={304}
            // fill={true}
            className="grayscale object-cover w-full h-fit row-span-full col-span-full"
          />
          <h2 className="text-green row-start-4 col-start-2 col-end-5 z-10 font-Inter italic font-extrabold text-7xl self-end">
            {name}
          </h2>
          <h3 className="text-green row-start-2 z-10 col-start-3 col-end-4 font-Inter border-2 border-green p-2">
            {genre}
          </h3>
        </div>
      </Link>
    </li>
  );
};

export default ArtistCard;
