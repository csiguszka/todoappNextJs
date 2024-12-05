"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function deleteTodo(id: string) {
  //TODO
  console.log("Id to delete: ", id);

  const prisma = new PrismaClient();

  const deleteTodo = await prisma.toDo.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/"); // Torli a cachet es ez kell majd az osszes torles eseten a legvegen, ha a torles sikeres volt
}
