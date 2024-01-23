import { useMemo } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import { cn } from "~/lib/utils";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 5000;

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title cannot be empty" })
    .max(100, { message: "Title cannot be longer than 100 characters" }),
  description: z
    .string()
    .min(100, { message: "Description must be at least 100 characters" })
    .max(5000, {
      message: "Description cannot be longer than 5000 characters",
    }),
});

interface IProps {
  file: File | null;
}

export function AssetForm({ file }: IProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const title = useMemo(() => form.watch("title"), [form]);
  const titleChars = useMemo(() => title.length, [title]);
  const description = useMemo(() => form.watch("description"), [form]);
  const descriptionChars = useMemo(() => description.length, [description]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="mx-auto max-w-xl">
              <FormLabel>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">Title</p>
                  <p
                    className={cn(
                      titleChars > MAX_TITLE_LENGTH &&
                        "text-red-600 dark:text-red-400",
                    )}
                  >{`${titleChars} / ${MAX_TITLE_LENGTH}`}</p>
                </div>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="mx-auto max-w-xl">
              <FormLabel>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">Description of event</p>
                  <p
                    className={cn(
                      descriptionChars > MAX_DESCRIPTION_LENGTH &&
                        "text-red-600 dark:text-red-400",
                    )}
                  >{`${descriptionChars} / ${MAX_DESCRIPTION_LENGTH}`}</p>
                </div>
              </FormLabel>
              <FormControl>
                <Textarea {...field} rows={20} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mx-auto max-w-xl">
          <Button type="submit" variant="theme" className="w-full">
            Add to Blockchain (irreversible)
          </Button>
        </div>
      </form>
    </Form>
  );
}
