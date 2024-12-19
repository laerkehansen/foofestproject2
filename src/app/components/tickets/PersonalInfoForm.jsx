"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { postTicket } from "@/app/lib/supabase";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//jeg definerer mine værdier til mit skema
// const formular = z.object({
//   tickets: z.array(
//     z.object({
//       name: z.string().min(1, "navn skal mindst være på 1 bogstav"),
//       lastname: z.string().min(1, "efternavn skal mindst være på 1 bogstav"),
//       email: z.string().email("Email skal være gyldig"),
//       phonenumber: z
//         .string()
//         .regex(/^\d{8}$/, "Telefonnummer skal være 8 cifre"), // Dette sikrer præcis 8 cifre
//     })
//   ),
//   // cardNumber: z
//   //   .string()
//   //   .regex(/^\d{13,19}$/, "Kortnummeret skal være mellem 13 og 19 cifre"),
//   // cardName: z.string().min(1, "udfyld venligst navn"),
//   // expireYear: z.date("skal udfyldes"),
// });

const formular = z.object({
  tickets: z.array(
    z.object({
      name: z.string().min(1, "navn skal mindst være på 1 bogstav"),
      lastname: z.string().min(1, "efternavn skal mindst være på 1 bogstav"),
      email: z.string().regex(/@/, "Email skal indeholde et '@' tegn"),
      phonenumber: z.preprocess(
        // preprocess meget smart gør at mellem fjerens før validerieng helt genialt
        (value) => String(value).replace(/\s/g, ""), // Fjern mellemrum
        z.string().regex(/^\d{8}$/, "Telefonnummer skal være 8 cifre")
      ),
    })
  ),
});

const PersonalInfoForm = ({ onNext, onBack, formData }) => {
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
    setValue,
    watch,
    trigger,
    clearErrors,
  } = useForm({
    resolver: zodResolver(formular),
    reValidateMode: "onSubmit",
    defaultValues: {
      tickets: Array.from(
        { length: formData.vipCount + formData.regularCount },
        () => ({
          name: "",
          lastname: "",
          email: "",
          phonenumber: "",
        })
      ),
    },
  });

  //før stod det nede hved hver nu er det genanvendelu
  const handleBlur = (fieldName) => {
    const isValid = trigger(fieldName); // Trigger validering
    // Før vi sender data, fjern mellemrum fra telefonnummeret for validering og indsendelse

    if (isValid) {
      clearErrors(fieldName); // Fjern fejlmeddelelsen, hvis validering er korrekt
    }
  };

  // Watch for the phonenumber input
  const phoneNumber = watch("tickets", []);

  const formatPhoneNumber = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const formatted = cleanedValue.replace(/(\d{2})(?=\d)/g, "$1 "); // Tilføj mellemrum efter hver 2. cifre
    return formatted;
  };

  // Funktion til at sende data til Supabase
  // const sendToSupabase = async (data) => {
  //   try {
  //     const response = await postTicket(data); // Dette er vores Supabase post funktion
  //     console.log(response);
  //     if (response?.success) {
  //       console.log("Data sendt til Supabase:", response);
  //     } else {
  //       console.error("Fejl ved afsendelse til Supabase");
  //     }
  //   } catch (error) {
  //     console.error("Fejl ved afsendelse:", error);
  //   }
  // };

  // // Funktion der håndterer send knappen, der kun aktiveres når data er valideret
  // const handleSendToSupabase = (data) => {
  //   const tickets = data.tickets.map((ticket) => ({
  //     ...ticket,
  //     id: crypto.randomUUID(), // Generér et unikt ID for hver billet
  //   }));

  //   // Send billetter til Supabase
  //   tickets.forEach(async (ticket) => {
  //     try {
  //       const response = await postTicket(ticket);
  //       if (response?.success) {
  //         console.log("Billet sendt til Supabase:", response);
  //       } else {
  //         console.error("Fejl ved afsendelse af billet:", response);
  //       }
  //     } catch (error) {
  //       console.error("Fejl ved afsendelse:", error);
  //     }
  //   });
  // };

  // const onSubmit = (data) => {

  //   console.log("Form data:", data);
  //   onNext(data); // Kalder onNext med udfyldt data

  //   // i den hen har funkton ønsker vi at sende vores peroslige infor til suberbase
  //   //obs array
  // };

  const unikId = (data) => {
    const tickets = data.tickets.map((ticket) => ({
      ...ticket,
      id: crypto.randomUUID(), // Generér unikt ID
    }));
    console.log(data.id);
  };
  // Send hver billet individuelt
  //   tickets.forEach((ticket) => {
  //     fetch("https://izlwnrcwutxxrclxaqwi.supabase.co/rest/v1/foofest", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         prefer: "return=representation",
  //         apikey:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdHRia2RoZHhyc3V5amt3a3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODI4NDgsImV4cCI6MjA0OTY1ODg0OH0.e3FebWALlTqZTxB2vSWb0_xqWf-MxdZrVpKhTM-_dnc",

  //         // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdHRia2RoZHhyc3V5amt3a3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODI4NDgsImV4cCI6MjA0OTY1ODg0OH0.e3FebWALlTqZTxB2vSWb0_xqWf-MxdZrVpKhTM-_dnc`,
  //       },
  //       body: JSON.stringify(ticket),
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(
  //             `Fejl ved afsendelse af billet: ${response.statusText}`
  //           );
  //           // throw new Error(`HTTP fejl! Status: ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log("Billet sendt succesfuldt data:", data);
  //       });
  //     // .catch((error) => {
  //     //   console.error("Fejl ved afsendelse af billet:", error);
  //     // });
  //   });
  // };

  //   const onSubmit = (data) => {
  //     console.log("Form submitted:", data);
  //     handleSendToSupabase(data); // Sender data til Supabase
  //     onNext({
  //         ...data,
  //     });
  // };

  // const totalTickets = // Beregn total billetter (VIP + Regular)
  // (formData.vipCount || 0) + (formData.regularCount || 0);

  // const tickets = data.tickets.map((ticket) => ({
  //   ...ticket,
  //   id: crypto.randomUUID(), // Generér et unikt ID for hver billet
  // }));
  // console.log("billetter", ticket);
  // // snedeer resvation starter timer
  // // useEffect(() => {
  // tickets.forEach;

  // fetch("https://izlwnrcwutxxrclxaqwi.supabase.co/rest/v1/foofest", {
  //   method: "POST",

  //   headers: {
  //     "Content-Type": "application/json",
  //     apikey:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdHRia2RoZHhyc3V5amt3a3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODI4NDgsImV4cCI6MjA0OTY1ODg0OH0.e3FebWALlTqZTxB2vSWb0_xqWf-MxdZrVpKhTM-_dnc",
  //   },

  //   // body: JSON.stringify({
  //   //   area: data.area,
  //   //   amount: totalTickets,
  //   // }),
  // })
  //   // .then((data) => response.json())
  //   .then((ticket) => {
  //     console.log("sin bilet er sent", ticket);
  //     // (submitData);
  //     // startReservation(submitData.id, submitData.timeout / 1000);

  //   })
  //   .catch((err) => console.error("her kommer fejl ", err));
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // handleSendToSupabase(data);
    onNext({
      ...data,
    });
  };
  return (
    <>
      <div className=" pl-8 pb-8">
        <p>Valgte billetter:</p>
        <ul>
          <li>VIP Billetter: {formData.vipCount}</li>
          <li>Regular Billetter: {formData.regularCount}</li>
        </ul>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-6 p-2 flex flex-wrap justify-center"
      >
        {/* <div className="flex flex-wrap gap-4 mb-4">
          {Array.from({
            length: formData?.vipCount + formData?.regularCount,
          }).map((ticket, index) => (
            <button
              key={index}
              className="bg-customPink border-black border-2 text-black text-lg py-2 px-4 hover:bg-green w-fit hover:text-black"
              onClick={() => alert(`Billet ${index + 1} klikket!`)} // Skift med passende funktionalitet
            >
              Billet {index + 1} -{" "}
              {index < formData?.vipCount ? "VIP" : "Regular"}
            </button>
          ))}
        </div> */}

        {formData?.vipCount + formData?.regularCount &&
          Array.from({
            length: formData?.vipCount + formData?.regularCount,
          }).map((ticket, index) => (
            <div key={index} className="w-96">
              <h3 className="text-xl  mb-2">Billet {index + 1}</h3>
              <div className="border-2 bg-white border-black py-8 px-6 mb-4">
                <span className="text-black font-bold text-xl italic">
                  {index < formData.vipCount ? "VIP" : "Regular"}
                </span>

                {/* Navn */}
                <div className="flex flex-col">
                  <label
                    htmlFor={`tickets.${index}.name`}
                    className="text-lg font-regular mb-1 pt-3"
                  >
                    Navn:
                  </label>
                  <input
                    {...register(`tickets.${index}.name`, {
                      required: "Navn er påkrævet",
                    })}
                    id={`tickets.${index}.name`}
                    type="text"
                    placeholder="John"
                    onFocus={() => clearErrors(`tickets.${index}.name`)}
                    onBlur={() => handleBlur(`tickets.${index}.name`)}
                    className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
                  />
                  {errors.tickets?.[index]?.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.tickets[index].name?.message}
                    </p>
                  )}
                </div>

                {/* Efternavn */}
                <div className="flex flex-col">
                  <label
                    htmlFor={`tickets.${index}.lastname`}
                    className="text-lg font-regular mb-1 pt-3"
                  >
                    Efternavn:
                  </label>
                  <input
                    {...register(`tickets.${index}.lastname`, {
                      required: "Efternavn er påkrævet",
                    })}
                    id={`tickets.${index}.lastname`}
                    type="text"
                    placeholder="Doe"
                    onFocus={() => clearErrors(`tickets.${index}.lastname`)}
                    onBlur={() => handleBlur(`tickets.${index}.lastname`)}
                    className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
                  />
                  {errors.tickets?.[index]?.lastname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.tickets[index].lastname?.message}
                    </p>
                  )}
                </div>

                {/* Telefonnummer */}
                <div className="flex flex-col">
                  <label
                    htmlFor={`tickets.${index}.phonenumber`}
                    className="text-lg font-regular mb-1 pt-3"
                  >
                    Telefonnummer:
                  </label>
                  <input
                    {...register(`tickets.${index}.phonenumber`, {
                      required: "Telefonnummer er påkrævet",
                    })}
                    id={`tickets.${index}.phonenumber`}
                    type="text"
                    value={formatPhoneNumber(
                      phoneNumber[index]?.phonenumber || ""
                    )} // sørge for det med mellemrum
                    onFocus={() => clearErrors(`tickets.${index}.phonenumber`)}
                    onBlur={() => handleBlur(`tickets.${index}.phonenumber`)}
                    placeholder="12 34 56 78"
                    className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
                  />
                  {errors.tickets?.[index]?.phonenumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.tickets[index].phonenumber?.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor={`tickets.${index}.email`}
                    className="text-lg font-regular mb-1 pt-3"
                  >
                    Email:
                  </label>
                  <input
                    {...register(`tickets.${index}.email`, {
                      required: "Email er påkrævet",
                    })}
                    id={`tickets.${index}.email`}
                    type="email"
                    placeholder="JohnDoe@email.com"
                    onFocus={() => clearErrors(`tickets.${index}.email`)}
                    onBlur={() => handleBlur(`tickets.${index}.email`)}
                    // den her stylign det er det vi ønsker no med andre fraver
                    className={`border-2 p-2 text-base focus:outline-none focus:ring-2 ${
                      errors.tickets?.[index]?.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-lime-400 focus:ring-black"
                    }`}
                    // className="border-2 border-black p-2 text-base focus:outline-none focus:ring-2 focus:ring-customPink"
                  />
                  {errors.tickets?.[index]?.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.tickets[index].email?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        <button
          type="submit"
          className="bg-customPink border-black border-2 text-black text-lg py-2 px-4  hover:bg-green w-fit hover:text-black"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default PersonalInfoForm;
