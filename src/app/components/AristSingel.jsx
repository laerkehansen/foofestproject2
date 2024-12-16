"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
// import TilbageBtn from "./navigation/TilbageBtn";
import { getLogoUrl } from "../lib/utils";
const ArtistSingel = ({ band, events }) => {
  const { name, logo, members, genre, logoCredits, bio } = band;
  const router = useRouter();

  // Funktion til at navigere tilbage

  return (
    <div>
      <div className="relative w-full mx-auto h-[500px] grid grid-cols-1 grid-rows-[1fr_0.2fr] text-black">
        <Image
          src={getLogoUrl(logo)}
          alt={`Billede af ${name}`}
          fill={true}
          quality={100}
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover grayscale"
        />
        <h1 className="text-green font-Inter text-6xl font-extrabold italic uppercase z-10 row-start-2 pl-12">
          {name}
        </h1>
      </div>
      <button
        className="row-start-1 z-10 place-self-start py-7 px-7"
        onClick={() => router.back()}
      >
        tilbage
      </button>
      <div className="flex flex-row-reverse px-40  gap-8">
        {/* <section className="grid md:grid-cols-[0.1fr_0.5fr_1fr_0.1fr] sm:grid-cols-[0.1fr_1fr_0.1fr]  gap-8"> */}

        <div className="sm:col-start-2 md:col-start-3 px-4 text-black">
          <h2 className="uppercase text-xl font-Inter italic font-extrabold   text-black">
            Om
          </h2>
          <p className="font-Inter text-base font-normal text-black">{bio}</p>
          <p className="font-Inter text-gray-400 pt-4 ">
            Fotocredits: {logoCredits}
          </p>
        </div>
        {/* Hvis der er events, vis eventoplysninger */}
        <div className="flex flex-col gap-32">
          <div>
            <h3 className="uppercase text-xl font-Inter italic font-extrabold pb-2 text-black">
              Medlemer
            </h3>
            <ul className="flex flex-col ">
              {members.map((member, index) => (
                <p
                  key={index}
                  className="font-Inter text-sm font-normal text-black"
                >
                  {member},
                </p>
              ))}
            </ul>
          </div>
          {events.length > 0 ? (
            <section className=" ">
              <h4 className="uppercase text-2xl font-Inter italic font-extrabold pb-4 pretty text-black">
                Spilletidspunkt
              </h4>

              {events.map((event, index) => (
                <ul
                  key={index}
                  className="font-Inter text-lg py-2 text-black w-60"
                >
                  <li className="grid grid-cols-2">
                    <p className="font-medium">Location</p> {event.location}
                  </li>
                  <li className="grid grid-cols-2 ">
                    <p className="font-medium ">Day</p> {event.day}
                  </li>
                  <li className="grid grid-cols-2">
                    <p className="font-medium">time</p>
                    {event.start} - {event.end}
                  </li>
                </ul>
              ))}
            </section>
          ) : (
            <section className="py-16">
              <p className="font-Inter text-2xl text-gray-400">
                Ingen events planlagt for dette band.
              </p>
            </section>
          )}
        </div>
      </div>
      {/* </section> */}
    </div>
  );
};

export default ArtistSingel;
