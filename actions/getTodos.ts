"use server";

export async function getTodos({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}) {
  // TODO
  return [
    {
      _id: "1",
      title: "Test",
      description: "TestD",
      class: "Important",
      isDone: false,
    },
    {
      _id: "2",
      title: "Test2",
      description: "TestD2",
      class: "Basic",
      isDone: true,
    },
  ];
}
