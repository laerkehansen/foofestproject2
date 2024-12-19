"use client";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { KviteringContext } from "@/app/lib/KvitteringContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { validering } from "@/app/lib/validation";

const PaymentStep = ({ onNext, onBack, formData }) => {
  const { reservationId, timeRemaining } = useContext(KviteringContext);

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

  const onSubmit = (data) => {
    if (!timeRemaining || timeRemaining <= 0) return false;

    // const totalTickets = // Beregn total billetter (VIP + Regular)
    //   (formData.vipCount || 0) + (formData.regularCount || 0);
    // console.log("resevation", data);
    // snedeer resvation starter timer
    // useEffect(() => {
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
        <div className="">
          <label
            className="text-lg font-regular mb-1 pt-3"
            htmlFor="cardholder-name"
          >
            Navn på kortholder
          </label>
          <input
            type="text"
            id="cardholder-name"
            className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
            name="cardholder-name"
            placeholder="Indtast dit navn"
            required
          />
        </div>
        <div className="form-group">
          <label
            className="text-lg font-regular mb-1 pt-3"
            htmlFor="cardnumber"
          >
            Kortnummer
          </label>
          <input
            type="text"
            className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
            id="cardnumber"
            name="cardnumber"
            placeholder="1234 5678 9012 3456"
            required
            // maxlength="19"
            pattern="\d{4} \d{4} \d{4} \d{4}"
          />
        </div>
        <div className="">
          <label
            className="text-lg font-regular mb-1 pt-3"
            htmlFor="expiry-date"
          >
            Udløbsdato
          </label>
          <input
            type="month"
            id="expiry-date"
            className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
            name="expiry-date"
            required
          />
        </div>
        <div className="f">
          <label className="text-lg font-regular mb-1 pt-3" htmlFor="cvv">
            CVV
          </label>
          <input
            className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
            type="password"
            id="cvv"
            name="cvv"
            placeholder="123"
            required
            maxlength="3"
            pattern="\d{3}"
          />
        </div>
        <button type="submit" className="bg-slate-800 p-2">
          Betal
        </button>
      </form>
    </div>
  );
};

export default PaymentStep;
