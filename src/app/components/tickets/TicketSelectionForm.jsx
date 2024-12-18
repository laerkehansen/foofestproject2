"use client";
import { useForm } from "react-hook-form";
import { validering } from "@/app/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Kvitering from "./Kvitering";
import StepBar from "./StepBar";
import { useContext } from "react";
import { useEffect } from "react";
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { KviteringContext } from "@/app/lib/KvitteringContext";
import { z } from "zod";

// Zod schema med total validering
export const validerAntal = z
  .object({
    vipCount: z.number().min(0).max(8),
    regularCount: z.number().min(0).max(8),
  })
  .refine((data) => data.vipCount + data.regularCount <= 8, {
    message: "Du kan ikke vælge flere end 8 billetter i alt",
    path: ["vipCount"],
  });

const TicketSelectionForm = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    setValue, // bruges til knapper
    formState: { errors },
    watch, // Brug watch til at få værdierne af formularfelterne
  } = useForm({
    resolver: zodResolver(validering), // Brug Zod-validering
    defaultValues: {
      vipCount: 0, // Standardværdi for vipCount
      regularCount: 0, // Standardværdi for regularCount
    },
  });
  const { updateCartData } = useContext(KviteringContext);

  // bruges til at opdater total ticket
  const vipCount = watch("vipCount", 0); // Standardværdi 0
  const regularCount = watch("regularCount", 0); // Standardværdi 0

  const totalTick = vipCount + regularCount;

  const handleTentChange = (type, operation) => {
    const currentValue = watch(type);
    let newValue =
      operation === "increment" ? currentValue + 1 : currentValue - 1;
    if (newValue < 0) newValue = 0; // Undgå negative værdier

    // Beregn den samlede mængde billetter (VIP + Regular)
    const totalTickets = vipCount + regularCount;

    // Kun tillad ændringen, hvis den samlede mængde ikke overstiger 8
    if (totalTickets < 8 || (operation === "decrement" && newValue >= 0)) {
      setValue(type, newValue);
      updateCartData({ [type]: newValue });
    }
  };

  const handleNext = (data) => {
    console.log("Går videre med data:", data);
    // Naviger til næste trin eller opdater applikationens tilstand
  };

  const onSubmit = (data) => {
    // Send både de eksisterende data og den samlede pris
    console.log("Form submitted:", data);
    onNext({
      ...data,
      // totalPrice,
    });
    // Du kan sende data videre til backend her
  };

  return (
    <div className=" grid grid-cols-[1fr_auto] gap-4  w-full h-full bg-white px-20 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" col-start-1 grid gird-cols-1 row-auto "
      >
        <div className=" w-[400px]  ">
          <h1 className="text-stor font-medium">Biletter</h1>
          <div className="flex justify-between py-2 border-b-2 border-black">
            <h2>Vælg billetter type og antal</h2>
            <p className="font-medium italic"> ticket ({totalTick})</p>
          </div>

          <div className="grid grid-cols-2 py-2 ">
            <label>Antal VIP 1299,-</label>
            <div className="grid grid-cols-3  gap-2 place-items-center">
              <button
                type="button"
                onClick={() => handleTentChange("vipCount", "decrement")}
              >
                <HiOutlineMinus className="w-6 h-6 " />
              </button>

              <input
                {...register("vipCount", { valueAsNumber: true })}
                type="number"
                placeholder="0"
                min="0"
                max="8"
                className=" w-7 text-center  text-lg"
                readOnly
              />
              <button
                type="button"
                onClick={() => handleTentChange("vipCount", "increment")}
                // onClick={() => plusKnap("vipCount")}
                // className="bg-slate-300"
              >
                <HiOutlinePlus className="w-6 h-6 " />
              </button>
            </div>
            {errors.vipCount && (
              <span className="text-red-500">{errors.vipCount.message}</span>
            )}
          </div>

          <div className="grid grid-cols-2">
            <label>Antal normal 799,-</label>
            <div className="grid grid-cols-3 gap-2 justify-center place-items-center">
              <button
                type="button"
                onClick={() => handleTentChange("regularCount", "decrement")}
              >
                <HiOutlineMinus className="w-6 h-6 " />
              </button>
              <input
                {...register("regularCount", { valueAsNumber: true })}
                type="number"
                placeholder="0"
                min="0"
                max="8"
                readOnly
                className=" w-7 text-center  text-lg"
                // value={regularCount} // Bruger den værdi, der er gemt i state
              />
              <button
                type="button"
                onClick={() => handleTentChange("regularCount", "increment")}
              >
                <HiOutlinePlus className="w-6 h-6 " />
              </button>
            </div>
            {errors.regularCount && (
              <span className="text-red-500">
                {errors.regularCount.message}
              </span>
            )}
          </div>

          {/* Vis den samlede pris */}
          {/* <div className="mt-4">
            <h3>Samlet pris: {totalPrice} kr.</h3>
          </div> */}
        </div>
        <button type="submit" className="bg-lime-500 self-end place-self-end">
          Gå videre
        </button>
      </form>
    </div>
  );
};

export default TicketSelectionForm;
