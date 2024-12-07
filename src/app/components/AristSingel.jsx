import Image from "next/image";
import { getLogoUrl } from "../lib/utils";
const ArtistSingel = ({ band }) => {
  const { name, logo, members, genre, logoCredits, bio } = band;
  return (
    <div>
      <div className="grid grid-cols-1 grid-rows-1 h-64">
        <div className="w-full relative h-64 col-span-1 row-span-1">
          <Image
            src={getLogoUrl(logo)}
            alt={`Billede af ${name}`}
            fill={true}
            className="object-cover "
          />
        </div>
        <h1 className="text-green-500 text-6xl col-span-1 row-span-1 place-self-start z-10">
          {name}
        </h1>
      </div>
      <div className="flex">
        <p>{logoCredits}</p>
      </div>

      <div className="flex flex-row gap-10">
        <div>
          <h2 className="uppercase text-4xl">Medlemer</h2>
          {members.map((member, index) => (
            <p key={index}>{member}</p>
          ))}
        </div>
        <div>
          <h3 className="uppercase text-4xl">Om</h3>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistSingel;
