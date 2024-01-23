import { useMemo } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUploadModal } from "~/store/use-upload-modal";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

import { cn } from "~/lib/utils";
import { toast } from "sonner";

const MAX_TITLE_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 5000;
const ERROR_CLASSES = "text-red-600 dark:text-red-400";

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title cannot be empty" })
    .max(MAX_TITLE_LENGTH, {
      message: "Title cannot be longer than 100 characters",
    }),
  description: z
    .string()
    .min(100, { message: "Description must be at least 100 characters" })
    .max(MAX_DESCRIPTION_LENGTH, {
      message: "Description cannot be longer than 5000 characters",
    }),
});

export function AssetForm() {
  const { media, onOpen } = useUploadModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const title = form.watch("title");
  const description = form.watch("description");
  const titleChars = useMemo(() => title.length, [title.length]);
  const descriptionChars = useMemo(
    () => description.length,
    [description.length],
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!media) {
      toast.error("Please select an image file to upload");
      return;
    }
    onOpen({ ...values, media });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">Title</p>
                  <p
                    className={cn(
                      titleChars > MAX_TITLE_LENGTH && ERROR_CLASSES,
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
            <FormItem>
              <FormLabel>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">Description of event</p>
                  <p
                    className={cn(
                      descriptionChars > MAX_DESCRIPTION_LENGTH &&
                        ERROR_CLASSES,
                    )}
                  >{`${descriptionChars} / ${MAX_DESCRIPTION_LENGTH}`}</p>
                </div>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={20}
                  placeholder="Describe this historical event..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mx-auto max-w-xl">
          <Button type="submit" variant="theme" className="w-full">
            Add to Blockchain
          </Button>
        </div>
      </form>
    </Form>
  );
}
