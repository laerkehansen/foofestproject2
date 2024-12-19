import Image from "next/image";
import { getLogoUrl } from "../../lib/utils";
import Link from "next/link";
const ArtistCard = ({ band, events }) => {
  const { name, logo, slug, genre } = band;
  const { day, location, start, end, act } = events;
  // const { day } = events;
  // Hvis der er events, vis første event (kan ændres til at vise flere events)
  // const firstEvent = events && events.length > 0 ? events[0] : null;
  return (
    <li
      key={band.slug}
      className="h-80 grid grid-rows-1 grid-cols-1 group  text-black border-2 border-black "
    >
      <Link
        href={`/lineup/${slug}`}
        // data-band={JSON.stringify(band)}
        className="grid h-full w-full grid-rows-[1fr] group grid-cols-[1fr]"
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
        <h2 className="text-customPink row-start-1 col-start-1 z-10 m-3  italic font-bold text-4xl self-end justify-self-start ">
          {name}
        </h2>
        <h3 className=" row-start-1 col-start-1  z-10 m-2 p-1  text-black bg-customPink self-start justify-self-end ">
          {genre}
          {location}
          {/* {day} */}
          {/* {events[0] ? events[0].day : "Ingen events for denne artist"} */}
        </h3>

        {/* Check if there is an event and display its information */}
        {/* man kan ik se det men msåke er det noget med styilg  */}
        {/* Event-info kun synlig på hover */}

        {/* <div className=" z-50 flex flex-col items-start justify-center bg-customPink bg-opacity-90 text-black p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          {firstEvent && (
            <div>
              <p className="text-lg">Date: {firstEvent.day}</p>
              <p className="text-lg">
                Time: {firstEvent.start} - {.end}
              </p>
              <p>hey</p>
            </div>
          )}
        </div> */}
      </Link>
    </li>
  );
};

export default ArtistCard;
