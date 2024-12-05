import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { getTodos } from "../../../../actions/getTodos";
import Link from "next/link";
import { InboxIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import TodoCard from "@/components/TodoCard";

function page() {
  return (
    <div>
      <Suspense fallback={<UserTodosSkeleton />}>
        <UserTodos />
      </Suspense>
    </div>
  );
}

function UserTodosSkeleton() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 4 }, (_, index) => (
        <Skeleton key={index} className="h-32 w-full" />
      ))}
    </div>
  );
}

async function UserTodos() {
  try {
    const todos = await getTodos({ limit: 10, skip: 0 });
    if (todos.length === 0) {
      return (
        <div className="flex flex-col gap-4 h-full items-center justify-center">
          <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
            <InboxIcon size={40} className="stroke-primary" />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="font-bold">You don&aps;t have any todo!</p>
            <p className="text-sm text-muted-foreground">
              Click the button below to create your first todo
            </p>
          </div>
          <Link href={"/addtodo"} />
        </div>
      );
    }
    return (
      <div className="grid grid-cols-1 gap-4">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    );
  } catch (error) {
    return (
      <Alert variant={"destructive"}>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again later
        </AlertDescription>
      </Alert>
    );
  }
}

export default page;
