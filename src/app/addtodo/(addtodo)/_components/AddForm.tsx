"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { createTodo as createTodoFn } from "../../../../../actions/createTodo";
import { createTodo } from "../../../../../schema/todoForm";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

function AddForm() {
  const { mutate, isPending } = useMutation({
    mutationFn: createTodoFn,
    onSuccess: () => {
      console.log("Sikeres hozzaadas");
    },
    onError: () => {
      console.error("Valami hiba a hozzaadasnal");
    },
  });

  const form = useForm({
    resolver: zodResolver(createTodo),
    defaultValues: {
      title: "",
      description: "",
      class: "",
      isDone: false,
    },
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-8 w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1 items-center">
                Name
                <p className="text-xs text-primary">(required)</p>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Choose a descriptive and unique name
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1 items-center">
                Description
                <p className="text-xs text-muted-foreground">(optional)</p>
              </FormLabel>
              <FormControl>
                <Input className="resize-none" {...field} />
              </FormControl>
              <FormDescription>
                Provide a brief description of what your workflow does. <br />{" "}
                This is optional but can help you remember the workflow&apos;s
                purpose
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="class"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1 items-center">
                Class
                <p className="text-xs text-primary">(required)</p>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Specify the class or category for this task
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isDone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex gap-1 items-center">
                Completed
              </FormLabel>
              <FormControl>
                <Checkbox {...field} />
              </FormControl>
              <FormDescription>
                Mark this task as completed if it is done.
              </FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {!isPending && "Proceed"}
          {isPending && <Loader2 className="animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}

export default AddForm;
