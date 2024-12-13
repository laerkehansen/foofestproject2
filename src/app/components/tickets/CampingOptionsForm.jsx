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
      campingSelected: formData.campingSelected || false,
    },
  });

  const [availableSpots, setAvailableSpots] = useState([]); // Tilgængelige områder
  const [selectedArea, setSelectedArea] = useState(null); // Valgt campingområde
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const data = await getAvailableSpots();
    setAvailableSpots(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000); // Tjek hver 2. sekund
    return () => clearInterval(interval);
  }, []);

  const handleAreaSelection = (area) => {
    setSelectedArea(area);
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    onNext(data);
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {availableSpots.map((spot, index) => (
              <div key={index}>
                <label htmlFor={spot.area}>
                  Tilgængelige pladser: {spot.available}
                  {spot.area} <p>{spot.spots}</p>
                </label>
                <input
                  type="radio"
                  id={spot.area}
                  value={spot.area}
                  {...register("area")}
                  onChange={() => handleAreaSelection(spot.area)}
                />
              </div>
            ))}
          </div>

          {/* Grøn camping */}
          <div>
            <input
              type="checkbox"
              id="greenCamping"
              {...register("greenCamping")}
            />
            <label htmlFor="greenCamping">Grøn camping (+249,-)</label>
          </div>

          {/* Telte */}
          <div>
            <label htmlFor="tent2p">2-personers telt (+299,-):</label>
            <input
              type="number"
              id="tent2p"
              min="0"
              {...register("tent2p", { valueAsNumber: true })}
            />

            <label htmlFor="tent3p">3-personers telt (+399,-):</label>
            <input
              type="number"
              id="tent3p"
              min="0"
              {...register("tent3p", { valueAsNumber: true })}
            />
          </div>

          <div>
            <button type="button" onClick={onBack}>
              Tilbage
            </button>
            <button type="submit">Fortsæt</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampingOptionsForm;
