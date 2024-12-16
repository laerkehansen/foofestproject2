import { useForm, Controller, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//jeg definerer mine værdier til mit skema
const formular = z.object({
  name: z.string().min(1, "navn skal mindst være på 1 bogstav"),
  lastname: z.string().min(1, "efternavn skal mindst være på 1 bogstav"),
  email: z.string().email("Email skal være gyldig"),
  phonenumber: z.string().regex(/^\d{8}$/, "Telefonnummer skal være 8 cifre"),
  cardNumber: z
    .string()
    .regex(/^\d{13,19}$/, "Kortnummeret skal være mellem 13 og 19 cifre"),
  cardName: z.string().min(1, "udfyld venligst navn"),
  expireYear: z.date("skal udfyldes"),
});
const PersonalInfoForm = ({ onNext, onBack, formData }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formular),
    defaultValues: {
      tickets: Array.from(
        { length: formData.vipCount + formData.regularCount },
        () => ({
          name: "",
          lastname: "",
          email: "",
        })
      ),
    },
  });

  //opretter et array af billetter. Fields er vores array, som indeni har vores billetter.
  const { fields } = useFieldArray({
    control,
    name: "tickets",
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
    onNext(data); // Kalder onNext med udfyldt data
  };

  return (
    <>
      <div>
        <p>Valgte billetter:</p>
        <ul>
          <li>VIP Billetter: {formData.vipCount}</li>
          <li>Regular Billetter: {formData.regularCount}</li>
        </ul>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-6 p-4 bg-background grid grid-cols-1 md:grid-cols-2"
      >
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="border bg-gray-50 border-gray-300 p-4 mb-4"
          >
            <h3 className="text-lg font-medium mb-2">Billet {index + 1}</h3>
            <span className="text-blue-500">
              {index < formData.vipCount ? "VIP" : "Regular"}
            </span>
            {/* Navn */}
            <div className="flex flex-col">
              <label
                htmlFor={`tickets.${index}.name`}
                className="text-lg font-medium mb-1"
              >
                Navn:
              </label>
              <Controller
                control={control}
                name={`tickets.${index}.name`}
                render={({ field }) => (
                  <input
                    {...field}
                    id={`tickets.${index}.name`}
                    type="text"
                    className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
              {errors.tickets?.[index]?.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tickets[index].name.message}
                </p>
              )}
            </div>

            {/* Efternavn */}
            <div className="flex flex-col">
              <label
                htmlFor={`tickets.${index}.lastname`}
                className="text-lg font-medium mb-1"
              >
                Efternavn:
              </label>
              <Controller
                control={control}
                name={`tickets.${index}.lastname`}
                render={({ field }) => (
                  <input
                    {...field}
                    id={`tickets.${index}.lastname`}
                    type="text"
                    className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
              {errors.tickets?.[index]?.lastname && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tickets[index].lastname.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor={`tickets.${index}.email`}
                className="text-lg font-medium mb-1"
              >
                Email:
              </label>
              <Controller
                control={control}
                name={`tickets.${index}.email`}
                render={({ field }) => (
                  <input
                    {...field}
                    id={`tickets.${index}.email`}
                    type="email"
                    className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              />
              {errors.tickets?.[index]?.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.tickets[index].email.message}
                </p>
              )}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-green text-white text-lg font-semibold py-2 px-4  hover:bg-customPink w-fit"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default PersonalInfoForm;
{
  /* Udløbsdato */
}
{
  /* <div className="flex flex-col">
        <label htmlFor="expireYear" className="text-lg font-medium mb-1">
          Udløbsdato:
        </label>
        <Controller
          control={control}
          name="expireYear"
          render={({ field }) => (
            <input
              {...field}
              id="expireYear"
              placeholder="MM/ÅÅ"
              className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />
        {errors.expireYear && (
          <p className="text-red-500 text-sm mt-1">
            {errors.expireYear.message}
          </p>
        )}
      </div> */
}

{
  /* CVV */
}
{
  /* <div className="flex flex-col">
        <label htmlFor="cvv" className="text-lg font-medium mb-1">
          CVV:
        </label>
        <Controller
          control={control}
          name="cvv"
          render={({ field }) => (
            <input
              {...field}
              id="cvv"
              className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />
        {errors.cvv && (
          <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
        )}
      </div> */
}

{
  /* Kortnummer */
}
{
  /* <div className="flex flex-col">
<label htmlFor="cardnumber" className="text-lg font-medium mb-1">
  Kortnummer:
</label>
<Controller
  control={control}
  name="cardnumber"
  render={({ field }) => (
    <input
      {...field}
      id="cardnumber"
      className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )}
/>
{errors.cardnumber && (
  <p className="text-red-500 text-sm mt-1">
    {errors.cardnumber.message}
  </p>
)}
</div> */
}
