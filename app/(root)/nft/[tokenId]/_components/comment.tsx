"use client";

import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { trpc } from "~/app/_trpc/client";
import { HoverTip } from "~/components/hover-tip";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { UserAvatar } from "~/components/user-avatar";

interface IProps {
  text: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
}

export function Comment({
  text,
  authorId,
  authorName,
  authorAvatar,
  createdAt,
}: IProps) {
  const { data: user } = trpc.user.getAuthProfile.useQuery();

  return (
    <>
      <div className="flex items-start gap-x-4">
        <UserAvatar
          imageUrl={authorAvatar}
          userName={authorName}
          className="md:h-20 md:w-20"
        />
        <div className="w-full">
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-start gap-x-3 md:flex-row md:items-center">
              <h4 className="text-lg font-semibold">{authorName}</h4>
              <div className="hidden h-1 w-1 rounded-full bg-muted-foreground md:block" />
              <p className="text-xs text-muted-foreground">
                {format(createdAt, "MMMM d, yyyy 'at' h:mm bb")}
              </p>
            </div>
            {user?.id === authorId && (
              <HoverTip
                message="Delete this comment"
                side="left"
                sideOffset={0}
              >
                <Button
                  variant="link"
                  size="sm"
                  className="text-xs text-muted-foreground"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </HoverTip>
            )}
          </div>
          <p className="mt-2 whitespace-pre-wrap md:mt-1">{text}</p>
        </div>
      </div>
      <Separator className="my-6" />
    </>
  );
}
