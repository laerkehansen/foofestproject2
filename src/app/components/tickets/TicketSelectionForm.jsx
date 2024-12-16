"use client";
import { useForm } from "react-hook-form";
import { validering } from "@/app/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";

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
      area: "",
    },
  });

  // Definer priserne for billetterne
  const vipPrice = 1299;
  const regularPrice = 799;

  // Få værdien af vipCount og regularCount fra formularen

  const vipCount = watch("vipCount", 0); // Standardværdi 0
  const regularCount = watch("regularCount", 0); // Standardværdi 0

  // Beregn den samlede pris
  const totalPrice = vipCount * vipPrice + regularCount * regularPrice;

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
    onNext({ ...data, totalPrice });
    // Du kan sende data videre til backend her
  };

  return (
    <div className="grid grid-cols-2 justify-items-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10  bg-white border-2 border-black"
      >
        <h2>Vælg billetter type og antal</h2>

        <div className="grid grid-cols-2">
          <label>Antal VIP 1299,-</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleTentChange("vipCount", "increment")}
              // onClick={() => plusKnap("vipCount")}
              className="bg-slate-300"
            >
              +
            </button>
            <input
              {...register("vipCount", { valueAsNumber: true })}
              type="number"
              className="w-14"
              min="0"
              value={regularCount} // Bruger den værdi, der er gemt i state
              disabled={false} // Deaktiverer standardpilene for input
            />
            <button
              type="button"
              onClick={() => handleTentChange("vipCount", "decrement")}
              className="bg-slate-300"
            >
              -
            </button>
          </div>
          {errors.vipCount && (
            <span className="text-red-500">{errors.vipCount.message}</span>
          )}
        </div>

        <div className="grid grid-cols-2">
          <label>Antal normal 799,-</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleTentChange("regularCount", "increment")}
              className="bg-slate-300"
            >
              +
            </button>
            <input
              {...register("regularCount", { valueAsNumber: true })}
              type="number"
              placeholder="0"
              className="w-14"
              min="0"
            />
            <button
              type="button"
              onClick={() => handleTentChange("regularCount", "decrement")}
              className="bg-slate-300"
            >
              -
            </button>
          </div>
          {errors.regularCount && (
            <span className="text-red-500">{errors.regularCount.message}</span>
          )}
        </div>

        {/* Vis den samlede pris */}
        <div className="mt-4">
          <h3>Samlet pris: {totalPrice} kr.</h3>
        </div>

        <button type="submit" className="bg-lime-500">
          Gå videre
        </button>
      </form>
    </div>
  );
};

export default TicketSelectionForm;
