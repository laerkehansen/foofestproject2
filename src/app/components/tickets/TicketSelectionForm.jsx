"use client";
import { useForm } from "react-hook-form";
import { validering } from "@/app/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Kvitering from "./Kvitering";
import StepBar from "./StepBar";
import { useEffect } from "react";
import { HiOutlineMinus } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";

const TicketSelectionForm = ({ onNext, onWatchChange }) => {
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

  // Definer priserne for billetterne
  const vipPrice = 1299;
  const regularPrice = 799;
  const fee = 99;

  // Få værdien af vipCount og regularCount fra formularen

  const vipCount = watch("vipCount", 0); // Standardværdi 0
  const regularCount = watch("regularCount", 0); // Standardværdi 0

  useEffect(() => {
    const subscribetion = watch((value) => {
      console.log("se valu", value);
    });
    return () => subscribetion.unsubscribe();
  }, [watch]);

  // Beregn den samlede pris
  const totalPrice = vipCount * vipPrice + regularCount * regularPrice + fee;

  const totalTick = vipCount + regularCount;

  // Håndterer plus og minus for telte
  const handleTentChange = (type, operation) => {
    const currentValue = watch(type);
    let newValue =
      operation === "increment" ? currentValue + 1 : currentValue - 1;
    if (newValue < 0) newValue = 0; // Undgå negative værdier
    setValue(type, newValue);
  };

  const onSubmit = (data) => {
    // Send både de eksisterende data og den samlede pris
    console.log("Form submitted:", data);
    onNext({
      ...data,
      totalPrice,
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
          <div className="mt-4">
            <h3>Samlet pris: {totalPrice} kr.</h3>
          </div>
        </div>
        <button type="submit" className="bg-lime-500 self-end place-self-end">
          Gå videre
        </button>
      </form>

      <div>
        {totalTick > 0 ? (
          <div className="bg-[#E7E7E7] w-72 lg:col-start-2 md:col-start-1 sm:col-start-1 place-self-center pt-2 my-10  lg:row-span-2 lg:row-start-1">
            <p className="uppercase leading-[0.7] font-bold text-2xl text-center italic pt-4 pb-2">
              foo <br />
              fest
            </p>
            <div className="max-w-72 flex flex-col gap-1 px-4 font-normal text-base">
              <p className="font-bold text-mid py-2">Billetter</p>
              {vipCount > 0 && (
                <div className="flex justify-between">
                  <p>VIP({vipCount})</p>
                  <p className="font-semibold">1299,-</p>
                </div>
              )}
              {regularCount > 0 && (
                <div className="flex justify-between">
                  <p>Regular({regularCount})</p>
                  <p className="font-semibold">799,-</p>
                </div>
              )}
              <div className="flex justify-between py-4">
                <p>Booking fee</p>
                <p className="font-semibold">99,-</p>
              </div>
            </div>
            <div className="bg-gray-400 px-4 py-5 flex justify-between">
              <p className="font-bold">Total pris</p>
              <p className="font-medium">{totalPrice},-</p>
            </div>
          </div>
        ) : (
          <div className="bg-[#E7E7E7] w-72 text-center p-4 my-10">
            <p className="uppercase leading-[0.7] font-bold text-2xl text-center italic pt-4 pb-2">
              foo <br />
              fest
            </p>
            <p className="font-bold text-lg">Din kurv er tom</p>
            <p>Tilføj billetter for at se kvitteringen.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketSelectionForm;
