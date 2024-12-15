import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//jeg definerer mine værdier til mit skema
const formular = z.object({
  name: z.string().min(1, "navn skal mindst være på 1 bogstav"),
  lastname: z.string().min(1, "efternavn skal mindst være på 1 bogstav"),
  email: z.string().email("Email skal være gyldig"),
  phonenumber: z.number().min(8, "skal være 8 cifre"),
  cardNumber: z
    .string()
    .regex(/^\d{13,19}$/, "Kortnummeret skal være mellem 13 og 19 cifre"),
  cardName: z.string().min(1, "udfyld venligst navn"),
  expireYear: z.date("skal udfyldes"),
});
const PersonalInfoForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
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
        name="lastname"
        render={({ field }) => <input {...field} />}
      />
      {errors.lastname && <p>{errors.lastname.message}</p>}

      <label htmlFor="email">Email:</label>
      <Controller
        control={control}
        name="email"
        render={({ field }) => <input {...field} />}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="cardnumber">Kortnummer:</label>
      <Controller
        control={control}
        name="cardnumber"
        render={({ field }) => <input {...field} />}
      />
      {errors.cardnumber && <p>{errors.cardnumber.message}</p>}

      <label htmlFor="phonenumber">Telefonnummer:</label>
      <Controller
        control={control}
        name="phonenumber"
        render={({ field }) => <input {...field} />}
      />
      {errors.phonenumber && <p>{errors.phonenumber.message}</p>}

      <label htmlFor="expireYear">Udløbsdato:</label>
      <Controller
        control={control}
        name="expireYear"
        placeholder="MM/ÅÅ"
        render={({ field }) => <input {...field} />}
      />
      {errors.expireYear && <p>{errors.expireYear.message}</p>}

      <label htmlFor="cvv">CVV:</label>
      <Controller
        control={control}
        name="cvv"
        render={({ field }) => <input {...field} />}
      />
      {errors.cvv && <p>{errors.cvv.message}</p>}

      <button type="submit">Send</button>
    </form>
  );
};

export default PersonalInfoForm;
