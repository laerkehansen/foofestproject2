"use client";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { KviteringContext } from "@/app/lib/KvitteringContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { validering } from "@/app/lib/validation";
import { z } from "zod";

// Preprocess og validering af kortnummer
const cardNumberSchema = z
  .string()
  .regex(
    /^\d{4} \d{4} \d{4} \d{4}$/,
    "Kortnummeret skal have formatet XXXX XXXX XXXX XXXX"
  )
  .max(19, "Kortnummeret må maks være 19 tegn, inklusive mellemrum");

const PaymentStep = ({ onNext, onBack, formData }) => {
  const { reservationId, timeRemaining } = useContext(KviteringContext);

  const formular = z.object({
    cardNumber: z.preprocess(
      (value) => String(value).replace(/\s/g, ""), // Fjern mellemrum
      z.string().regex(/^\d{16}$/, "Kortnummeret skal være præcis 16 cifre")
    ),
    cardHolder: z.string().min(1, "Kortindehaverens navn skal udfyldes"),
    // expireDate: z
    //   .string()
    //   .regex(
    //     /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
    //     "Udløbsdato skal være i format MM/YY"
    //   ),
    expireDate: z.string().min(1, "efternavn skal mindst være på 1 bogstav"),
    cvv: z.string().regex(/^\d{3}$/, "CVV skal være præcis 3 cifre"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    clearErrors,
    setValue, // bruges til at sætte værdier dynamisk, f.eks. når vi ændrer område på vores knapper
    watch,
  } = useForm({
    resolver: zodResolver(formular),

    defaultValues: {
      cardNumber: "",
      cardHolder: "",
      expireDate: "",
      cvv: "",
    },
  });

  // Watch for the phonenumber input
  const cardInfo = watch("cardNumber");
  // const regularCount = watch("regularCount", 0); // Standardværdi 0
  // const formatCardNumber = (value) => {
  //   const cleanedValue = value.replace(/\D/g, "");
  //   const formatted = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 "); // Tilføj mellemrum efter hver 4. cifre
  //   return formatted;
  // };

  const formatCardNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, ""); // Remove non-digits
    const formatted = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 "); // Add spaces after every 4 digits
    return formatted;
  };

  const handleBlur = (fieldName) => {
    trigger(fieldName); // Udfør validering ved tab af fokus
  };

  const onSubmit = (data) => {
    if (!timeRemaining || timeRemaining <= 0) return false;

    fetch("https://cerulean-abrupt-sunshine.glitch.me/fullfill-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id: reservationId,
      }),
    })
      .then((response) => response.json())
      .then((submitData) => {
        console.log("her får vi data", submitData);
        // (submitData);

        // startReservation(submitData.id, submitData.timeout / 1000);

        onNext({
          ...data,
        });
      })
      .catch((err) => console.error("her kommer fejl ", err));

    console.log("Form submitted:", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label
            className="text-lg font-regular mb-1 pt-3"
            htmlFor="cardHolder"
          >
            Navn på kortholder
          </label>
          <input
            type="text"
            id="cardHolder"
            {...register("cardHolder")}
            className="border-2 border-black p-2  text-base focus:outline-none focus:ring-2 focus:ring-customPink"
            name="cardHolder"
            placeholder="Indtast dit navn"
            required
          />

          {errors.cardHolder && (
            <span className="text-red-500">{errors.cardHolder.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className="text-lg font-regular mb-1 pt-3"
            htmlFor="cardnumber"
          >
            Kortnummer
          </label>
          <input
            // type="number"
            {...register("cardNumber")}
            // tror fjel er her på hvordan jeg bruger den
            // value={formatCardNumber(cardInfo)}
            value={formatCardNumber(cardInfo || "")} // This dynamically updates the value
            onChange={(e) => setValue("cardNumber", e.target.value)}
            onBlur={() => handleBlur("cardNumber")}
            className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
            id="cardnumber"
            type="text"
            name="cardnumber"
            // value={formatCardNumber(cardInfo || "")}
            // value={formatCardNumber(cardNumber || "")}
            placeholder="1234 5678 9012 3456"

            // maxlength="19"
            // pattern="\d{4} \d{4} \d{4} \d{4}"
          />
        </div>
        {errors.cardNumber && (
          <span className="text-red-500">{errors.cardNumber.message}</span>
        )}
        <div className="flex flex-col">
          <label
            className="text-lg font-regular mb-1 pt-3"
            htmlFor="expireDate"
          >
            Udløbsdato
          </label>
          <input
            type="text"
            onChange={setValue("")}
            {...register("expireDate")}
            id="expireDate"
            max="5"
            className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
            name="expireDate"
            required
          />
        </div>

        {errors.expireDate && (
          <span className="text-red-500">{errors.expireDate.message}</span>
        )}
        <div className="flex flex-col">
          <label className="text-lg font-regular mb-1 pt-3" htmlFor="cvv">
            CVV
          </label>
          <input
            className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
            // type="password"
            {...register("cvv")}
            id="cvv"
            name="cvv"
            placeholder="123"
            required
            pattern="\d{3}"
            max={3}
          />
          {errors.cvv && (
            <span className="text-red-500">{errors.cvv.message}</span>
          )}
        </div>

        <button type="submit" className="bg-slate-800 p-2">
          Betal
        </button>
      </form>
    </div>
  );
};

export default PaymentStep;
