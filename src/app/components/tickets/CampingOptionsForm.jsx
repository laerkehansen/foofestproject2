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
  const [selectedArea, setSelectedArea] = useState(null);
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
    onNext({ ...data });
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

          <form action="">
            <label htmlFor="">
              tilkøb camping <input type="radio" />
            </label>
            <label htmlFor="">
              fortset uden camping
              <input type="radio" />
            </label>
            {/* når man klikker subit så afænign af om man har valgt camping eller ej 
            hvis campinh er valt så åbner formularen neden under 
            hvis camping ikke er valt så går åbner neste step i flowet og sender daten med vidre i begge tilfælde */}
            <button>submit</button>
          </form>
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
                {/* ( efter knap er trykket på så reseveres
                  camping spot i 5 min hved at sende en put recrest så den skal
                  kalde en funktion) */}
              </div>
            ))}
            <button className="bg-red-900">okay</button>
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

          {/* Tilkøb teltopsætning */}
          {/* her skal man klikke på chek hvis ja og hvis ik man klikker så går man bare vidre hvis man klikker ja 
          så neden under så åbner de to telt options som   */}

          <div>
            <input
              type="checkbox"
              id="addTentSetup"
              {...register("addTentSetup")}
              onChange={(e) => setTentSetupVisible(e.target.checked)}
            />
            <label htmlFor="addTentSetup">
              Pay to have the crew set up tents
            </label>
          </div>
          {watch("addTentSetup") && (
            <div>
              <div className="flex flex-row ">
                <label htmlFor="tent2p">2-personers telt (+299,-):</label>
                <div className="flex flex-row gap-3">
                  <button className="p-2 bg-slate-300">-</button>
                  <input
                    className="w-8"
                    type="number"
                    id="tent2p"
                    min="0"
                    {...register("tent2p", { valueAsNumber: true })}
                  />
                  <button className=" p-2 bg-slate-300">+</button>
                </div>
              </div>
              <div className="flex flex-row">
                <label htmlFor="tent3p">3-personers telt (+399,-):</label>
                <div className="flex flex-row gap-3">
                  <button className="p-2 bg-slate-300">-</button>
                  <input
                    className="w-8"
                    type="number"
                    id="tent3p"
                    min="0"
                    {...register("tent3p", { valueAsNumber: true })}
                  />
                  <button className="p-2 bg-slate-300">+</button>
                </div>
              </div>
            </div>
          )}
          <div>
            <button type="button" onClick={onBack}>
              Tilbage
            </button>
            <button type="submit" onClick={onNext}>
              Fortsæt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampingOptionsForm;
