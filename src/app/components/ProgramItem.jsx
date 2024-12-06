import Image from "next/image";
import Link from "next/link";
import { getLogoUrl } from "../lib/utils";

const ProgramItem = ({ band }) => {
  const { name, logo, slug, genre } = band;
  return (
    <li key={band.slug} className=" flex col-start-1 col-end-2 w-fit">
      <Link
        href={`/lineup/${slug}`}
        className="flex border border-black w-svw items-center"
      >
        <Image
          src={getLogoUrl(logo)}
          height={100}
          width={150}
          alt={name}
        ></Image>
        <h1 className="text-8xl font-Inter">{name}</h1>
      </Link>
    </li>
  );
};

export default ProgramItem;
