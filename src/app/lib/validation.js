import * as z from "zod";

export const validering = z
  .object({
    vipCount: z
      .number()
      .min(0, "Antal VIP billetter skal være et positivt tal")
      .default(0),
    regularCount: z
      .number()
      .min(0, "Antal Regular billetter skal være et positivt tal")
      .default(0),
    addTentSetup: z.boolean().default(false), // Tilkøb af teltopsætning
    greenCamping: z.boolean().default(false), // Grøn camping
    tent2p: z
      .number()
      .min(0, "Antallet af 2-personers telte skal være et positivt tal")
      .default(0),
    tent3p: z
      .number()
      .min(0, "Antallet af 3-personers telte skal være et positivt tal")
      .default(0),
    area: z.string().optional("Du skal vælge et campingområde"), // Campingområdet skal vælges
  })
  .superRefine((data, ctx) => {
    // console.log("Valgt campingområde:", data.area);

    // Hvis teltopsætning er valgt, skal campingområdet være udfyldt
    if (data.addTentSetup && !data.area) {
      ctx.addIssue({
        message: "Campingområde skal vælges, når teltopsætning er tilføjet.",
        path: ["area"], // Placering af fejlen på området
      });
    }

    // Beregn samlet antal billetter
    const totalTickets = (data.vipCount || 0) + (data.regularCount || 0);

    // Beregn samlet antal pladser i teltene
    const totalPeopleInTents = (data.tent2p || 0) * 2 + (data.tent3p || 0) * 3;

    console.log("Samlet antal billetter:", totalTickets);
    console.log("Samlet antal personer i telte:", totalPeopleInTents);

    // Hvis teltopsætning er valgt:
    if (data.addTentSetup) {
      // 1. Teltpladser skal være mindst lig med billetter
      if (totalPeopleInTents < totalTickets) {
        ctx.addIssue({
          message:
            "Du har ikke nok teltpladser til det samlede antal billetter. Tilføj flere telte.",
          path: ["tent2p"], // Fokusér fejlen på teltfelterne
        });
      }

      // 2. Teltpladser må højst være én mere end antallet af billetter
      if (totalPeopleInTents > totalTickets + 1) {
        ctx.addIssue({
          message:
            "Pladserne i teltene må højst være én mere end det samlede antal billetter.",
          path: ["tent2p"], // Fokusér fejlen på teltfelterne
        });
      }
    }
  })

  // Tjekker om enten vip eller regular billetter er valgt
  .refine((data) => data.vipCount > 0 || data.regularCount > 0, {
    message: "Du skal vælge mindst én billet",
    path: ["vipCount"], // Eller "regularCount" hvis du vil vise fejlen på det ene felt
  });
