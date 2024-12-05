"use client";

import { Pencil, Trash } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useMutation } from "@tanstack/react-query";
import { deleteTodo } from "../../actions/deleteTodo";
import Link from "next/link";

interface ITodo {
  id: string;
  title: string;
  description: string;
  class: string;
  isDone: boolean;
} //TODO ha kell csak importald be a prismabol

function TodoCard({ todo }: { todo: ITodo }) {
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      console.log("sikeres torles");
    },
    onError: () => {
      console.log("sikertelen, valami hiba lepett fel a torleskor");
    },
  });

  return (
    <Card>
      <CardHeader>{todo.title}</CardHeader>
      <CardContent>
        <h3>{todo.class}</h3>
        <p>{todo.description}</p>
        <div className="flex flex-row space-x-2">
          <Trash
            className="text-destructive cursor-pointer hover:text-destructive/90"
            size={40}
            onClick={() => {
              deleteMutation.mutate(todo.id);
            }}
          />
          <Link href={`/update/${todo.id}`}>
            <Pencil size={40} />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
export default TodoCard;
