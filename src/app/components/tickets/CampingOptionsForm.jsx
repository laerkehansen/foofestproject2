"use client";

import { useState, useEffect } from "react";
import { getAvailableSpots } from "@/app/lib/api";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validering } from "@/app/lib/validation";
const CampingOptionsForm = ({ onNext, onBack, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(validering),
    defaultValues: {
      campingSelected: formData.campingSelected || false, // Sørg for at vi holder styr på om camping er valgt
    },
  });

  // State til at holde styr på de tilgængelige pladser og loading-status
  const [availableSpots, setAvailableSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  // Funktion til at hente de tilgængelige pladser
  const fetchData = async () => {
    const data = await getAvailableSpots();
    setAvailableSpots(data); // Opdaterer tilstanden med data
    setLoading(false); // Når data er hentet, stop loading
  };

  // Brug useEffect til at hente data første gang komponenten renderes
  useEffect(() => {
    fetchData(); // Hent data første gang

    // Opdater data hvert 10. sekund
    // er itivl om der er for meget skal jo henrws
    const interval = setInterval(fetchData, 10000);

    // Ryd intervallet, når komponenten ik er aktivt
    return () => clearInterval(interval);
  }, []); // Tom afhængigheds-array gør at det kun kører én gang ved første render

  return (
    <div>
      <div>
        <div className="mb-4">
          <p>Valgte billetter:</p>
          <ul>
            <li>VIP Billetter: {formData.vipCount}</li>
            <li>Regular Billetter: {formData.regularCount}</li>
          </ul>
        </div>

        <div>
          <h2>Ledige Camping Pladser</h2>
          {loading ? (
            <div>Data hentes...</div>
          ) : (
            <ul>
              {availableSpots.map((spot, index) => (
                <li key={index}>
                  {spot.area} - Tilgængelige pladser: {spot.available}
                  <p>{spot.spots}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="button" onClick={onBack}>
          Tilbage
        </button>
      </div>
    </div>
  );
};

export default CampingOptionsForm;
