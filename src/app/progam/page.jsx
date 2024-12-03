import { getSingleBands } from "@/app/lib/api";
import { revalidatePath } from "next/cache";
import Link from "next/link";

async function page() {
  const band = await getSingleBands();

  console.log(band);
  async function send(FormData) {
    "use server";
    console.log(FormData);
    const data = {
      name: FormData.get("name"),
      email: FormData.get("email"),
    };
    await data;
    revalidatePath("/");
  }

  return (
    <div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 m-5 place-self-center gap-3 ">
        {subscriber.map((sub) => (
          <li
            key={sub.id}
            className="px-4 py-4 bg-white shadow-md rounded-md grid grid-cols-1 gap-3 min-w-32"
          >
            <Link href={`/update/${sub.id}`}>
              <p> {sub.name}</p>
              <p>{sub.email}</p>
            </Link>

            {/* her skal man kunne slwr  */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
