import { revalidatePath } from "next/cache";

export async function applyFilter(filters) {
  // Valider, hvilke filtre der er valgt (eksempel)
  console.log("Filters applied:", filters);

  // Genvalider stien (hvis det er roden af siden)
  revalidatePath("/programlist");
}
