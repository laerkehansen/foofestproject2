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
      tentType: formData.tentType || "",
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
    const interval = setInterval(fetchData, 10000);

    // Ryd intervallet, når komponenten ikke længere er aktiv
    return () => clearInterval(interval);
  }, []); // Tom afhængigheds-array gør at det kun kører én gang ved første render

  // Beregn den samlede pris
  const calculateTotalPrice = () => {
    const vipPrice = 1299;
    const regularPrice = 799;
    const tent2PersonPrice = 299;
    const tent3PersonPrice = 399;
    const fee = 99;

    //beregner billetpris
    const vipTotal = formData.vipCount * vipPrice;
    const regularTotal = formData.regularCount * regularPrice;

    //bereng den ssamlede pris
    let tentTotal = 0;
    if (formData.tentType === "2") {
      tentTotal = formData.vipCount * tent2PersonPrice; //to personer pr telt
    } else if (formData.tentType === "3") {
      tentTotal = formData.regularCount * tent3PersonPrice; //tre persiner
    }

    return vipTotal + regularTotal + tentTotal + fee;
  };

  // Funktion der håndterer submit og sender data videre
  const onSubmit = (data) => {
    // vi sender pris og teltvalg til formdata
    onNext({ ...formData, ...data, totalPrice });
  };

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
        {/* Vis teltvalg */}
        <div className="mb-4">
          <p>Vælg telt:</p>
          <div>
            <label>
              <input
                type="radio"
                value="2"
                {...register("tentType")}
                className="mr-2"
              />
              2-personers telt (299 kr.)
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="3"
                {...register("tentType")}
                className="mr-2"
              />
              3-personers telt (399 kr.)
            </label>
          </div>
          {errors.tentType && (
            <span className="text-red-500">{errors.tentType.message}</span>
          )}
        </div>

        {/* Vis den samlede pris */}
        <div>
          <h3 className="text-red-500">
            Samlet pris: {formData.totalPrice} kr.
          </h3>
        </div>

        {/* Vis gebyr og den samlede pris */}
        <div>
          <h3>Samlet pris:</h3>
          <ul>
            <li>VIP Billetter: {formData.vipCount * 1299} kr.</li>
            <li>Regular Billetter: {formData.regularCount * 799} kr.</li>
            <li>
              Telt (valgt):{" "}
              {formData.tentType === "2"
                ? "2-personers telt"
                : "3-personers telt"}{" "}
              -{" "}
              {formData.tentType === "2"
                ? formData.vipCount * 299
                : formData.regularCount * 399}{" "}
              kr.
            </li>
            <li>Gebyr: 99 kr.</li>
            <li>
              <strong>Samlet: {calculateTotalPrice()} kr.</strong>
            </li>
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label>
              Vælg campingplads
              <input
                type="checkbox"
                {...register("campingSelected")}
                className="ml-2"
              />
            </label>
            {errors.campingSelected && (
              <span className="text-red-500">
                {errors.campingSelected.message}
              </span>
            )}
          </div>

          <button type="button" onClick={onBack}>
            Tilbage
          </button>
          <button type="submit">Gå videre</button>
        </form>
      </div>
    </div>
  );
};

export default CampingOptionsForm;
