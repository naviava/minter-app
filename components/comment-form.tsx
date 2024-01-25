"use client";

import { z } from "zod";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

import { trpc } from "~/app/_trpc/client";
import { useCommentModal } from "~/store/use-comment-modal";

const formSchema = z.object({
  text: z.string().min(1, "Comment cannot be empty."),
});

export function CommentForm() {
  const { id, onClose } = useCommentModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { text: "" },
  });

  const utils = trpc.useUtils();
  const { mutate: addComment, isLoading } = trpc.comment.addComment.useMutation(
    {
      onError: ({ message }) => toast.error(message),
      onSuccess: () => {
        utils.comment.invalidate();
        onClose();
        toast.success("Your comment has been added.");
      },
    },
  );

  function onSubmit(values: z.infer<typeof formSchema>) {
    addComment({ id, ...values });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Let everyone know what you're thinking about this NFT..."
                  rows={10}
                  className="w-full resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-x-2">
          <Button
            type="button"
            variant="ghost"
            disabled={isLoading}
            onClick={onClose}
            className="w-full"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="theme"
            disabled={isLoading}
            className="w-full"
          >
            Submit
            {isLoading && <Loader className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
        </div>
      </form>
    </Form>
  );
}
