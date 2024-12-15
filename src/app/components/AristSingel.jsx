"use client";

import Image from "next/image";
import TilbageBtn from "./navigation/TilbageBtn";
import { getLogoUrl } from "../lib/utils";
const ArtistSingel = ({ band, events }) => {
  const { name, logo, members, genre, logoCredits, bio } = band;

  return (
    <div>
      <div className="flex flex-row z-10 items-start h-fit gap-3 pt-28 pl-8 sticky top-0 text-black"></div>
      {/* <TilbageBtn /> */}
      <div className="relative w-full mx-auto h-[500px] grid grid-cols-1 grid-rows-[1fr_0.2fr] text-black">
        <Image
          src={getLogoUrl(logo)}
          alt={`Billede af ${name}`}
          fill={true}
          className="object-cover grayscale"
        />
        <h1 className="text-green font-Inter text-8xl font-extrabold italic uppercase z-10 row-start-2 pl-12">
          {name}
        </h1>
      </div>
      <section className="grid md:grid-cols-[0.1fr_0.5fr_1fr_0.1fr] sm:grid-cols-[0.1fr_1fr_0.1fr] py-16 gap-8">
        <div className="col-start-2">
          <h2 className="uppercase text-6xl font-Inter italic font-extrabold pb-4 text-black">
            Medlemer
          </h2>
          {members.map((member, index) => (
            <p key={index} className="font-Inter text-2xl text-black">
              {member}
            </p>
          ))}
        </div>
        <div className="sm:col-start-2 md:col-start-3 text-black">
          <h3 className="uppercase text-6xl font-Inter italic font-extrabold pb-4 text-black">
            Om
          </h3>
          <p className="font-Inter text-2xl text-black">{bio}</p>
          <p className="font-Inter text-gray-400 pt-4 ">
            Fotocredits: {logoCredits}
          </p>
        </div>
        {/* Hvis der er events, vis eventoplysninger */}
        {events.length > 0 ? (
          <section className="py-16 col-start-2">
            <h3 className="uppercase text-6xl font-Inter italic font-extrabold pb-4 pr-8 pretty text-black">
              Spilletidspunkt
            </h3>
            <ul>
              {events.map((event, index) => (
                <li key={index} className="font-Inter text-2xl py-2 text-black">
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p>
                    <strong>Day:</strong> {event.day}
                  </p>
                  <p>
                    <strong>Start:</strong> {event.start}
                  </p>
                  <p>
                    <strong>End:</strong> {event.end}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section className="py-16">
            <p className="font-Inter text-2xl text-gray-400">
              Ingen events planlagt for dette band.
            </p>
          </section>
        )}
      </section>
    </div>
  );
};

export default ArtistSingel;
