"use client";
import { IoCheckmark } from "react-icons/io5";
import { CiSquareMinus } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { getAvailableSpots, putReserveSpot } from "@/app/lib/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validering } from "@/app/lib/validation";
import { CiSquarePlus } from "react-icons/ci";
import ReservationTimer from "./ReservationTimer";
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { KviteringContext } from "@/app/lib/KvitteringContext";

const CampingOptionsForm = ({ onNext, onBack, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // bruges til at sætte værdier dynamisk, f.eks. når vi ændrer område på vores knapper
    watch,
  } = useForm({
    resolver: zodResolver(validering),
    defaultValues: {
      campingSelected: formData.campingSelected || false, //bruges ik
      addTentSetup: formData.addTentSetup || false, // Tilføj standardværdi for addTentSetup
      vipCount: formData.vipCount || 0,
      regularCount: formData.regularCount || 0,
      area: formData.area || "",
      tent2p: 0,
      tent3p: 0,
      // area: "",

      greenCamping: false,
    },
  });

  const [availableSpots, setAvailableSpots] = useState([]); // Tilgængelige områder
  const [selectedArea, setSelectedArea] = useState(null);
  // man kan komme vider uden at have valgt et spot
  // fore
  const [formError, setFormError] = useState("");

  const { updateCartData } = useContext(KviteringContext); // Få adgang til updateCartData

  const { startReservation } = useContext(KviteringContext);

  useEffect(() => {
    const subscription = watch((data) => {
      const { area, tent2p, tent3p, greenCamping, addTentSetup } = data;
      updateCartData({
        area,
        tent2p,
        tent3p,
        greenCamping,
        addTentSetup,
      });
    });

    // Cleanup, for at fjerne eventuelle subscriptioner
    return () => subscription.unsubscribe();
  }, [watch, updateCartData]);

  // Henter data, når komponenten er blevet rendere (kører kun én gang)
  useEffect(() => {
    fetch("https://cerulean-abrupt-sunshine.glitch.me/available-spots", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((areaData) => {
        console.log("her får vi data", areaData);
        setAvailableSpots(areaData);
      })
      .catch((err) => console.error("her kommer fejl ", err));
  }, []);

  // Håndterer valget af et campingområde

  const handleAreaSelection = (area) => {
    const selectedSpot = availableSpots.find((spot) => spot.area === area); // Finder det valgte område

    const totalTickets = // Beregn total billetter (VIP + Regular)
      (formData.vipCount || 0) + (formData.regularCount || 0);

    if (!selectedSpot || totalTickets > selectedSpot.available) {
      setFormError(
        `Området "${area}" er ikke tilgængeligt. Vælg et andet område.`
      );
      setSelectedArea(null);
      setValue("area", ""); // Fjern værdien fra formularen
    } else {
      setFormError(""); // Fjern fejlmeddelelse
      setSelectedArea(area);
      setValue("area", area); // Sæt værdien i formularen

      // skal værwe her!!!
      updateCartData({ area });
      // Opdater de tilgængelige pladser
      const updatedSpots = availableSpots.map((spot) => {
        if (spot.area === area) {
          spot.available -= totalTickets; // Træk de valgte billetter fra de tilgængelige pladser
        }
        return spot;
      });
      setAvailableSpots(updatedSpots); // Opdaterer tilstanden med de nye tilgængelige pladser
    }
  };

  // Håndterer plus og minus for telte
  const handleTentChange = (type, operation) => {
    const currentValue = watch(type); // Hent det nuværende antal telte af den pågældende type
    let newValue =
      operation === "increment" ? currentValue + 1 : currentValue - 1;
    if (newValue < 0) newValue = 0; // Undgå negative værdier
    setValue(type, newValue);

    updateCartData({ [type]: newValue });
  };

  const onSubmit = (data) => {
    if (!data.area) {
      setFormError("Du skal vælge et campingområde, før du kan fortsætte.");
      return;
    }
    const totalTickets = // Beregn total billetter (VIP + Regular)
      (formData.vipCount || 0) + (formData.regularCount || 0);
    console.log("resevation", data);

    fetch("https://cerulean-abrupt-sunshine.glitch.me/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        area: data.area,
        amount: totalTickets,
      }),
    })
      .then((response) => response.json())
      .then((submitData) => {
        // console.log("her får vi data", submitData);
        // (submitData);
        startReservation(submitData.id, submitData.timeout / 1000);

        onNext({
          ...data,
        });
      })
      .catch((err) => console.error("her kommer fejl ", err));

    console.log("Form submitted:", data);
  };

  return (
    <div className="bg-white">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 ">
        <div className=" ">
          <h1 className="text-4xl  p-2 font-semibold">Camping</h1>
          <div className="border-b-2 border-black p-2">
            <h2 className="text-2xl font-medium">camping område</h2>
            <p className="font-Inter text-lg pb-2">vælg camping område</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 px-4  ">
            {availableSpots.map((spot, index) => {
              const totalTickets =
                (formData.vipCount || 0) + (formData.regularCount || 0); //udskriv totalen af billetter, de har begge en fallback værdi på 0, så vi ikke kan få undefinde
              const isDisabled = totalTickets > spot.available; // Check for for mange billetter

              return (
                <div key={index} className=" py-2 ">
                  <input
                    className="hidden peer"
                    type="radio"
                    id={spot.area}
                    value={spot.area}
                    {...register("area")} // Binding til formular
                    onChange={() => handleAreaSelection(spot.area)} // Validering
                    disabled={isDisabled} // Deaktiver området hvis der er for mange billetter
                  />
                  <label
                    htmlFor={spot.area}
                    className={`border-2 border-black cursor-pointer  p-2 text-center  uppercase text-lg
            peer-checked:bg-customPink peer-checked:text-black
            hover:bg-gray-200 transition-all duration-200
            ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {spot.area} {spot.available}/{spot.spots}
                  </label>
                </div>
              );
            })}
          </div>
          {formError && (
            <p className="text-red-500 text-sm mt-2">{formError}</p>
          )}
        </div>
        {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}
        {selectedArea && <p>Du har valgt campingområde: {selectedArea}</p>}

        {/* Telte */}
        <h3 className="text-2xl font-medium pt-4">Telt opsætning</h3>
        <div className="border-b-2 border-black flex justify-between p-2">
          <label className="text-lg" htmlFor="addTentSetup">
            Få telte at op af et crew
          </label>

          <input
            type="checkbox"
            id="addTentSetup"
            {...register("addTentSetup")}
          />
          {errors.addTentSetup && (
            <p className="text-red-500 text-sm">
              {errors.addTentSetup.message}
            </p>
          )}
        </div>
        {watch("addTentSetup") && (
          <div>
            <p>
              Obs! Antal pladser i teltene skal matche antal billetter (
              {(formData.vipCount || 0) + (formData.regularCount || 0)})
            </p>

            {errors.tent2p && (
              <p className="text-red-500 text-sm">{errors.tent2p.message}</p>
            )}
            <div className="grid grid-cols-2 ">
              <label htmlFor="tent2p" name="tent2p">
                2-personers telt <span className="font-medium">+299,-</span>
              </label>
              <div className="flex flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => handleTentChange("tent2p", "decrement")}
                >
                  <HiOutlineMinus className="w-6 h-6 " />
                </button>
                <input
                  className="w-10 text-center"
                  type="number"
                  id="tent2p"
                  name="tent2p"
                  min="0"
                  readOnly
                  {...register("tent2p", { valueAsNumber: true })}
                />

                <button
                  type="button"
                  onClick={() => handleTentChange("tent2p", "increment")}
                >
                  <HiOutlinePlus className="w-6 h-6 " />
                </button>
              </div>
            </div>
            {errors.tent2p && (
              <p className="text-red-500 text-sm">{errors.tent2p.message}</p>
            )}

            <div className="grid grid-cols-2">
              <label htmlFor="tent3p">3-personers telt +399,-</label>
              <div className="flex flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => handleTentChange("tent3p", "decrement")}
                >
                  <HiOutlineMinus className="w-6 h-6 " />
                </button>
                <input
                  className="w-10 text-center"
                  type="number"
                  id="tent3p"
                  min="0"
                  readOnly
                  {...register("tent3p", { valueAsNumber: true })}
                />
                <button
                  type="button"
                  onClick={() => handleTentChange("tent3p", "increment")}
                  className="  active:text-customPink transition duration-75"
                >
                  <HiOutlinePlus className="w-6 h-6 " />
                </button>
              </div>
              {errors.tent3p && (
                <span className="text-red-500 text-xl z-50">
                  {errors.tent3p.message}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Grøn camping */}
        <div className="py-4">
          <div className="flex justify-between items-center">
            <input
              className="hidden peer" // Skjul standard checkboks
              type="checkbox"
              id="greenCamping"
              {...register("greenCamping")}
              //   {...register("greenCamping")}
            />
            <span className="">Grøn camping +249,- </span>
            <label
              htmlFor="greenCamping"
              className="w-6 h-6 border-2 border-black   place-items-center place-content-center  cursor-pointer  peer-checked:border-pink-500 peer-checked:bg-green  transition-all duration-200"
            >
              {/* <IoCheckmark className="self-center w-4 h-4 text-customPink/0 text-center  peer-checked:text-customPink" /> */}
            </label>
          </div>
          {errors.greenCamping && (
            <p className="text-red-500 text-sm">
              {errors.greenCamping.message}
            </p> // Fejlmeddelelse for grøn camping
          )}
        </div>
        <div className="flex justify-between ">
          <button type="button" onClick={onBack}>
            Tilbage
          </button>

          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default CampingOptionsForm;
