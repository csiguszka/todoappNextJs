"use server";

import { redirect } from "next/navigation";
import {
  createTodo as createTodoSchema,
  createTodoType,
} from "../schema/todoForm";
import { revalidatePath } from "next/cache";
import { PrismaClient } from "@prisma/client";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function createTodo(form: createTodoType) {
  const { success, data } = createTodoSchema.safeParse(form); // validalja a formot, mindig kell hasznalni, ha formbol jovo cuccrol van szo
  //TODO

  if (!success) {
    console.error("Invalid form", data);
    return;
  }
  const { userId } = await auth();
  let user;
  if (userId != null) {
    user = await currentUser();

    console.log(user);
  }

  const prisma = new PrismaClient();
  const post = await prisma.toDo.create({
    data: {
      title: data?.title,
      description: data?.description,
      class: data?.class,
      isDone: data?.isDone,
      userId: user?.id,
    },
  });
  console.log(post);

  redirect("/"); // Atiranyitja a client oldalat a home pagere
  revalidatePath("/"); // Most nem tudom, hogy erre szukseg lesz e, hogy itt is kell e cashet torolni, de majd probald ki ,hogy mukodik e nelkule.
}
