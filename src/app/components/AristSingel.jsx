"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
// import TilbageBtn from "./navigation/TilbageBtn";
import { getLogoUrl } from "../lib/utils";

const ArtistSingel = ({ band }) => {
  const { name, logo, members, genre, logoCredits, bio } = band;
  const dayNames = {
    mon: "Mandag",
    tue: "Tirsdag",
    wed: "Onsdag",
    thu: "Torsdag",
    fri: "Fredag",
    sat: "Lørdag",
    sun: "Søndag",
  };
  // const eventDay = dayNames[events.day];
  const router = useRouter();

  // Funktion til at navigere tilbage

  return (
    <div>
      <Link
        href={router}
        className=" z-10 sticky text-black top-24 left-5 bg-customPink p-2 border-2 border-black"
        onClick={() => router.back()}
      >
        Tilbage
      </Link>

      <div className="relative top-0 w-full mx-auto h-[500px] grid grid-cols-1 grid-rows-[1fr_0.2fr] text-black">
        <Image
          src={getLogoUrl(logo)}
          alt={`Billede af ${name}`}
          fill={true}
          quality={100}
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover grayscale"
        />
        <h1 className="text-green pb-16 lg:text-6xl sm:text-4xl font-extrabold italic uppercase z-10 row-start-2 lg:pl-12 sm:pl-6">
          {name}
        </h1>
      </div>

      <div className="grid lg:grid-cols-[auto_auto] md:grid-cols-[auto_auto] sm:grid-cols-1 ">
        <div className="lg:col-start-2 md:col-start-2 sm:col-start-1 lg:px-20 sm:px-10 pb-10 pt-7 flex flex-col justify-between text-black">
          <h3 className="uppercase lg:text-2xl sm:text-lg py-2  italic font-extrabold   text-black">
            Om
          </h3>
          <p className="text-base font-normal text-black ">{bio}</p>

          {logoCredits && (
            <p className="text-green italic py-4 text-xs">
              Fotocredits: {logoCredits}
            </p>
          )}
          <Link
            href="/billetter"
            className="p-2 border-2 border-black uppercase mt-6  hover:underline decoration-solid  bg-green font-medium text-center  place-self-center "
          >
            køb biletter
          </Link>
        </div>
        {/* Hvis der er events, vis eventoplysninger */}
        <div className="flex lg:row-start-1 lg:row-span-2 md:row-start-1 md:row-span-2 bg-green  sm:col-start-1   md:col-start-1  lg:col-start-1 flex-col gap-32 p-10">
          {/* {events.length > 0 ? ( */}
          <div>
            <h4 className="uppercase  lg:text-2xl sm:text-lg italic font-extrabold text-center pb-4 pretty text-black">
              Medlemmer
            </h4>

            {/* {events.map((event, index) => ( */}
            <ul className="grid gap-3">
              {members.map((member, index) => (
                <p
                  key={index}
                  className="text-base p-2 font-semibold text-black border-black border-2 bg-white"
                >
                  {member}
                </p>
              ))}
            </ul>
            {/* // ))} */}
          </div>
          {/* // ) : ( //{" "}
          <div className="  py-16">
            //{" "}
            <p className="text-2xl text-gray-400">
              // Ingen events planlagt for dette band. //{" "}
            </p>
            //{" "}
          </div>
          // )} */}
          <Link
            href="/program"
            className="bg-background p-2  font-medium border-2 border-black  text-center  place-self-center transition duration-150 ease-in-out hover:underline decoration-solid 
              hover:scale-110"
          >
            Gå til program
          </Link>
        </div>
      </div>
      {/* </div> */}
      {/* </section> */}
    </div>
  );
};

export default ArtistSingel;
