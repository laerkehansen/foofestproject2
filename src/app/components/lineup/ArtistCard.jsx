import Image from "next/image";
import { getLogoUrl } from "../../lib/utils";
import Link from "next/link";
const ArtistCard = ({ band, events }) => {
  const { name, logo, slug, genre } = band;

  // Hvis der er events, vis første event (kan ændres til at vise flere events)
  const firstEvent = events && events.length > 0 ? events[0] : null;
  return (
    <li
      key={band.slug}
      className="h-80 grid grid-rows-1 grid-cols-1 text-black"
    >
      <Link
        href={`/lineup/${slug}`}
        className="grid h-full w-full grid-rows-[1fr] grid-cols-[1fr]"
      >
        <div className="h-full w-full row-start-1 col-start-1 relative">
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
        <h2 className="text-customPink row-start-1 col-start-1 z-10 m-3  font-Inter italic font-bold text-5xl self-end justify-self-start ">
          {name}
        </h2>
        <h3 className=" row-start-1 col-start-1  z-10 m-2 p-1 font-Inter text-black bg-customPink self-start justify-self-end ">
          {genre}
        </h3>

        {/* Check if there is an event and display its information */}
        {/* man kan ik se det men msåke er det noget med styilg  */}
        {firstEvent && (
          <div className="  row-start-1 col-start-1  z-10 m-2 p-10 font-Inter text-black bg-customPink self-start justify-self-start ">
            <p>Date: {firstEvent.day}</p>
            <p>
              Time: {firstEvent.start} - {firstEvent.end}
            </p>
          </div>
        )}
      </Link>
    </li>
  );
};

export default ArtistCard;
