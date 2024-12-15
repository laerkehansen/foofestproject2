import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//jeg definerer mine værdier til mit skema
const formular = z.object({
  name: z.string().min(1, "navn skal mindst være på 1 bogstav"),
  lastname: z.string().min(1, "efternavn skal mindst være på 1 bogstav"),
  email: z.string().includes("@", { message: "must include @" }),
  phonenumber: z.number().min(8, "skal være 8 cifre"),
  cardNumber: z
    .string()
    .regex(/^\d{13,19}$/, "Kortnummeret skal være mellem 13 og 19 cifre") // Regex for at sikre, at det kun er cifre og har den rigtige længde
    .min(13, "Kortnummeret skal have mindst 13 cifre")
    .max(19, "Kortnummeret kan have maks 19 cifre"),
  cvv: z
    .string()
    .regex(/^\d{3,4}$/, "CVV skal være 3 eller 4 cifre") // Regex for CVV
    .length(3, "CVV skal være 3 cifre lang")
    .or(z.string().length(4, "CVV skal være 4 cifre lang")), // Eller 4 cifre, f.eks. for American Express
});
const PersonalInfoForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formstate: { errors },
  } = useForm({
    resolver: zodResolver(formular),
  });

  const name = watch("name");
  const lastname = watch("lastname");
  const cardNumber = watch("cardNumber");
  const phonenumber = watch("phonenumber");
  const cvv = watch("cvv");
  const email = watch("email");

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Navn:</label>
      <Controller
        control={control}
        name="name"
        render={({ field }) => <input {...field} />}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="lastname">Efternavn:</label>
      <Controller
        control={control}
        lastname="lastname"
        render={({ field }) => <input {...field} />}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
};

export default PersonalInfoForm;
