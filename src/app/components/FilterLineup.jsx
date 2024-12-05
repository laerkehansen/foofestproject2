"use client";
// Importer nødvendige hooks og komponenter
import { useState, useEffect } from "react";
import { getBands } from "@/app/lib/api";

export default function BandFilter() {
  const [bands, setBands] = useState([]); // Holder data fra API
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hent data fra API ved komponentens indlæsning
  useEffect(() => {
    async function fetchBands() {
      try {
        const data = await getBands();
        setBands(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load bands");
        setLoading(false);
      }
    }
    fetchBands();
  }, []);

  // Filtrer bands baseret på søgeterm og genre
  const filteredBands = bands.filter((band) => {
    const matchesSearch = band.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? band.genre === selectedGenre : true;
    return matchesSearch && matchesGenre;
  });

  // Find unikke genrer til dropdown
  const genres = Array.from(new Set(bands.map((band) => band.genre)));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Band Filter</h1>

      {/* Søgefelt */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Genre-dropdown */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      {/* Vis filtrerede bands */}
      <ul>
        {filteredBands.map((band) => (
          <li key={band.slug}>
            <h2>{band.name}</h2>
            {/* <p> {band.genre}</p> */}
            {/* <p>Members: {band.members.join(", ")}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
