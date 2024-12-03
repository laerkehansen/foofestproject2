import { getBands } from "@/app/lib/api";
import ArtistCard from "../components/ArtistCard";

export default async function Home() {
  const bands = await getBands();
  console.log(bands);

  return (
    <div className="grid justify-items-center items-center h-svh w-svw">
      <div>
        <h1 className="text-4xl font-bold text-center sm:text-left">bands</h1>
        <ArtistCard />
      </div>
      <div className="bg-gray-800 self-start p-4 rounded">
        <ul className="flex flex-wrap gap-3 max-w-sm">
          {bands.map((band) => (
            <li key={band.slug}>{band.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
