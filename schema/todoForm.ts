import { z } from "zod";
export const createTodo = z.object({
  title: z.string().min(1).max(50),
  description: z.string().max(80).optional(),
  class: z.string().min(1).max(80),
  isDone: z.boolean(),
});

export type createTodoType = z.infer<typeof createTodo>;
