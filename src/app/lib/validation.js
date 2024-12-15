import * as z from "zod";

export const validering = z
  .object({
    vipCount: z
      .number()
      .min(0, "Antal VIP billetter skal være et positivt tal")
      .optional(),
    regularCount: z
      .number()
      .min(0, "Antal Regular billetter skal være et positivt tal")
      .optional(),
    campingSelected: z.boolean().default(false), // Tilføj campingvalg
    addTentSetup: z.boolean().default(false), // Tilkøb af teltopsætning
  })

  //   tjekker om at enten vip eller reg er støre end 0 eller så send besked
  .refine((data) => data.vipCount > 0 || data.regularCount > 0, {
    message: "Du skal vælge mindst én billet",
    path: ["vipCount"], // eller "regularCount" hvis du vil vise fejlen på det ene felt
  });
