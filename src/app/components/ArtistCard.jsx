import Image from "next/image";
import { getLogoUrl } from "../lib/utils";
import Link from "next/link";
const ArtistCard = ({ band }) => {
  const { name, logo, slug, genre } = band;
  return (
    <li key={band.slug} className="h-80">
      <Link href={`/lineup/${slug}`} className="grid grid-rows-1 grid-cols-1">
        <div className="col-span-1 row-span-1 relative h-80">
          <Image
            src={getLogoUrl(logo)}
            alt={`Billede af ${name}`}
            // width={504}
            // height={304}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            quality={100}
            // fill={true}
            className="grayscale object-cover "
          />
        </div>
        <h2 className="text-green row-span-1 col-span-1 z-10   font-Inter italicfont-extrabold text-5xl ">
          {name}
        </h2>
        <h3 className="text-green row-span-1 col-span-1   z-10  font-Inter border-2 border-green ">
          {genre}
        </h3>
      </Link>
    </li>
  );
};

export default ArtistCard;
