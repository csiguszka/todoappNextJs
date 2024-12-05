"use server";

import { PrismaClient } from "@prisma/client";

export async function getTodos({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}) {
  // TODO
  const prisma = new PrismaClient();
  const todos = await prisma.toDo.findMany({
    take: limit,
    skip: skip,
  });

  return todos;
}
