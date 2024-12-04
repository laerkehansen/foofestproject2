import { getSingleBands } from "@/app/lib/api";
import ArtistSingel from "@/app/components/AristSingel";

async function Single({ params }) {
  const { slug } = await params; // Hent slug fra params
  console.log(slug); // Debug, for at sikre at slug er korrekt

  // Hent band-data baseret på slug
  const band = await getSingleBands(slug);
  console.log(band); // Debug, for at se de hentede data

  return (
    <div>
      <ArtistSingel band={band} />
      {/* Passer band-data til ArtistSingel komponenten */}
    </div>
  );
}

export default Single;
