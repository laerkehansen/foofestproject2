import { getBands } from "@/app/lib/api";
import ArtistApp from "../components/ArtistApp";

export default async function Home() {
  const bands = await getBands();
  console.log(bands);

  return (
    <div>
      <ArtistApp bands={bands} />
    </div>
  );
}
