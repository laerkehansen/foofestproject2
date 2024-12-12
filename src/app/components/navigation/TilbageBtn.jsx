"use client";
import { useRouter } from "next/router";
import Arrow from "@/app/img/arrow.svg";
const TilbageBtn = () => {
  const router = useRouter(); // Brug useRouter for programmatisk navigation

  // Funktion til at navigere tilbage
  const goBack = () => {
    router.back(); // Går tilbage til den forrige side i browserens historik
  };

  return (
    <button onClick={goBack} className="text-green">
      <p>tilbage</p>
      <Arrow className="rotate-180 self-center" />
    </button>
  );
};

export default TilbageBtn;
