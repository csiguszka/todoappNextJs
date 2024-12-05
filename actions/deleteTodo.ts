"use server";

import { revalidatePath } from "next/cache";

export async function deleteTodo(id: string) {
  //TODO
  revalidatePath("/"); // Torli a cachet es ez kell majd az osszes torles eseten a legvegen, ha a torles sikeres volt
}
