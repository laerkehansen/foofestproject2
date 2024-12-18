"use client";
import { IoCheckmark } from "react-icons/io5";
import { CiSquareMinus } from "react-icons/ci";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { getAvailableSpots } from "@/app/lib/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validering } from "@/app/lib/validation";
import { CiSquarePlus } from "react-icons/ci";
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { KviteringContext } from "@/app/lib/KvitteringContext";

const CampingOptionsForm = ({ onNext, onBack, formData, onWatchChange }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // bruges til knapper
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
  const [loading, setLoading] = useState(true); //slet
  const [formError, setFormError] = useState("");

  const { updateCartData } = useContext(KviteringContext); // Få adgang til updateCartData

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

  const fetchData = async () => {
    const data = await getAvailableSpots();
    setAvailableSpots(data);
    setLoading(false);
  };

  //   skal slettes

  // skla gøre så en anden måde //meget vigitgt
  useEffect(() => {
    fetchData();
    // const interval = setInterval(fetchData, 2000); // Tjek hver 2. sekund
    // return () => clearInterval(interval);
  }, []);

  const handleAreaSelection = (area) => {
    setSelectedArea(area);
    setValue("area", area);
    // console.log(setSelectedArea);

    updateCartData({ area });
  };

  // Håndterer plus og minus for telte
  const handleTentChange = (type, operation) => {
    const currentValue = watch(type);
    let newValue =
      operation === "increment" ? currentValue + 1 : currentValue - 1;
    if (newValue < 0) newValue = 0; // Undgå negative værdier
    setValue(type, newValue);

    updateCartData({ [type]: newValue });
  };

  // Definér værdier fra formularen

  // Send data til forælderen, hver gang en af værdierne ændres

  const onSubmit = (data) => {
    if (!data.area) {
      setFormError("Du skal vælge et campingområde!"); // Sæt fejlmeddelelse
      return;
    }

    // Hvis ingen fejl
    setFormError(""); // Ryd fejl
    onNext({
      ...data,
    });
  };

  return (
    <div className="h-svh">
      <div className="">
        <p>Valgte billetter:</p>
        <ul>
          <li>VIP Billetter: {formData.vipCount}</li>
          <li>Regular Billetter: {formData.regularCount}</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 ">
        <div className="border-b-2 border-black py-2">
          <h1 className="text-4xl font-semibold  pb-2">Camping</h1>
          <h2 className="text-2xl font-medium pb-1 ">Område</h2>
          <p>vælg et camping område </p>
          {/* <hr className="bg-black h-1 decoration-black border-0" /> */}
        </div>
        <div className="flex flex-wrap gap-2 py-7 ">
          {availableSpots.map((spot, index) => (
            <div key={index} className="">
              <input
                className="hidden peer"
                type="radio"
                id={spot.area}
                value={spot.area}
                {...register("area")} // Korrekt binding
                onChange={() => handleAreaSelection(spot.area)}
              />
              {errors.area && <p>{errors.area.message}</p>}
              <label
                htmlFor={spot.area}
                className="  cursor-pointer p-2   text-center  text-lg font-medium  border-2 border-black
                  peer-checked:bg-gray-400 
                  hover:bg-gray-200 transition-all duration-200 "
              >
                {spot.area}{" "}
                <span className="text-base font-normal italic">
                  ({spot.available})
                </span>
              </label>
              {/* <div className="flex">
                  <p>Tilgængelige pladser:</p>{" "}
                  <p>
                    {spot.available}/{spot.area}
                    {spot.spots}
                  </p>
                </div> */}
            </div>
          ))}
        </div>
        {errors.area && (
          <p className="text-red-500 text-sm">{errors.area.message}</p>
        )}

        {formError && <p className="text-red-500 text-sm mb-4">{formError}</p>}
        {selectedArea && <p>Du har valgt campingområde: {selectedArea}</p>}

        {/* Telte */}
        <h3 className="text-2xl font-medium">Telt opsætning</h3>
        <div className="flex justify-between">
          <label className="" htmlFor="addTentSetup">
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
          <div className="flex justify-between items-center ">
            <input
              className="hidden peer"
              type="checkbox"
              id="greenCamping"
              {...register("greenCamping")}
              //   {...register("greenCamping")}
            />
            <span className="">Grøn camping (+249,-) </span>
            {/* <label
              htmlFor="greenCamping"
              className="w-6 h-6 border-2 border-black   place-items-center place-content-center  cursor-pointer   peer-checked:bg-green "
            >
              <IoCheckmark className="w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity duration-200" />
            </label> */}

            <label
              htmlFor="greenCamping"
              className="w-6 h-6 border-2 border-black grid place-items-center cursor-pointer
                peer-checked:bg-green peer-checked:border-pink-500 transition-all duration-200  "
            >
              {/* Check-ikonet bliver usynligt/ synligt */}
              <IoCheckmark className="w-4 h-4 opacity-0 group-checked:opacity-100 transition-opacity duration-200" />
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
