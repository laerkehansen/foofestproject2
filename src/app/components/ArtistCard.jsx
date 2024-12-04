import Image from "next/image";
import { getLogoUrl } from "../lib/utils";
import Link from "next/link";
const ArtistCard = ({ band }) => {
  const { name, logo, slug, genre } = band;
  return (
    <li key={band.slug}>
      <Link
        href={`/lineup/${slug}`}
        className="grid grid-cols-1 grid-rows-1 sm:h-24 md:h-56 lg:h-72 aspect-w-16 aspect-h-9"
      >
        <Image
          src={getLogoUrl(logo)}
          alt={`Billede af ${name}`}
          width={500}
          height={300}
          // fill={true}
          className="grayscale col-span-1 row-span-1 [object-fit: cover;]"
        />
        <div className="bg-cary p-2 text-sm place-self-start col-span-1 row-span-1 z-10">
          <h2 className="text-white">{name}</h2>
        </div>
        <div className="bg-peach p-2 place-self-end col-span-1 row-span-1 self-start z-10">
          <h3 className="text-white ">{genre}</h3>
        </div>
      </Link>
    </li>
  );
};

export default ArtistCard;
