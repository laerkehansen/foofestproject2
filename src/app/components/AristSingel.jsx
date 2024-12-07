import Image from "next/image";
import { getLogoUrl } from "../lib/utils";
const ArtistSingel = ({ band }) => {
  const { name, logo, members, genre, logoCredits, bio } = band;
  return (
    <div>
      <div className="relative w-full mx-auto h-[500px] grid grid-cols-1 grid-rows-[1fr_0.2fr]">
        <Image
          src={getLogoUrl(logo)}
          alt={`Billede af ${name}`}
          fill={true}
          className="object-cover grayscale"
        />
        <h1 className="text-green font-Inter text-8xl font-extrabold italic uppercase z-10 row-start-2 pl-4">
          {name}
        </h1>
      </div>
      <section className="grid grid-cols-[0.1fr_0.5fr_1fr_0.1fr] py-16">
        <div className="col-start-2">
          <h2 className="uppercase text-6xl font-Inter italic font-extrabold pb-4">
            Medlemer
          </h2>
          {members.map((member, index) => (
            <p key={index} className="font-Inter text-2xl">
              {member}
            </p>
          ))}
        </div>
        <div>
          <h3 className="uppercase text-6xl font-Inter italic font-extrabold pb-4">
            Om
          </h3>
          <p className="font-Inter text-2xl">{bio}</p>
          <p className="font-Inter text-gray-400 pt-4">
            Fotocredits: {logoCredits}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ArtistSingel;
