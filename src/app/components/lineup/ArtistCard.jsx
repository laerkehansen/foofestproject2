import Image from "next/image";
import { getLogoUrl } from "../../lib/utils";
import Link from "next/link";
const ArtistCard = ({ band, events }) => {
  const { name, logo, slug, genre } = band;
  const { day, location, start, end, act } = events;
  // const { day } = events;
  // Hvis der er events, vis første event (kan ændres til at vise flere events)
  // const firstEvent = events && events.length > 0 ? events[0] : null;

  const dayNames = {
    mon: "Mandag",
    tue: "Tirsdag",
    wed: "Onsdag",
    thu: "Torsdag",
    fri: "Fredag",
    sat: "Lørdag",
    sun: "Søndag",
  };
  return (
    <li
      key={band.slug}
      className="h-80 grid grid-rows-1 grid-cols-1 group text-black border-2 border-black "
    >
      <Link
        href={`/lineup/${slug}`}
        // data-band={JSON.stringify(band)}
        className="grid h-full w-full grid-rows-[1fr] group grid-cols-[1fr]"
      >
        <div className="overflow-hidden h-full w-full row-start-1 col-start-1 relative">
          <div className="relative w-full h-full row-start-1 col-start-1 grid">
            <Image
              src={getLogoUrl(logo)}
              alt={`Billede af ${name}`}
              // width={504}
              // height={304}
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              quality={100}
              // fill={true}
              priority
              className="grayscale object-cover z-0"
            />
          </div>
          <h2 className="text-customPink absolute row-start-1 col-start-1 pb-4  z-20 m-3  italic font-bold text-4xl self-end justify-self-start top-56">
            {name}
          </h2>
          <h3 className=" row-start-1 col-start-1 absolute z-20 m-2 p-1  text-black bg-customPink self-start justify-self-end top-0 right-0">
            {genre}
          </h3>

          {/* Check if there is an event and display its information */}
          {/* man kan ik se det men msåke er det noget med styilg  */}
          {/* Event-info kun synlig på hover */}
          <div className="absolute h-96 w-full bg-green/90 flex items-center justify-center bottom-10 group-hover:bottom-0 group-hover:opacity-100 opacity-0 transition-all duration-300 z-20">
            {/* {firstEvent && ( */}
            <div className=" flex flex-col-reverse justify-between self-end pl-2 pb-2">
              <h2 className="font-extrabold italic text-5xl">
                Playing at {location}
              </h2>

              <div className="self-start">
                <div className=" pl-2">
                  <p className="text-lg text-black">
                    <strong>dag:</strong> {dayNames[day]}
                  </p>
                </div>
                <div className="p-2 ">
                  <p className="text-lg">
                    <strong>Tidspunkt: </strong>
                    <span className="text-nowrap">
                      {start} - {end}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* // )} */}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ArtistCard;
