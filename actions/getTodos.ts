"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

export async function getTodos({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}) {
  // TODO

  const { userId } = await auth();
  let user;
  if (userId != null) {
    user = await currentUser();

    console.log(user);
  }
  const prisma = new PrismaClient();
  const todos = await prisma.toDo.findMany({
    where: {
      userId: user?.id,
    },
    take: limit,
    skip: skip,
  });

  if (userId == null) return [];
  return todos;
}
