import { format } from "date-fns";
import { Separator } from "~/components/ui/separator";
import { UserAvatar } from "~/components/user-avatar";

interface IProps {
  text: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
}

export function Comment({ text, authorName, authorAvatar, createdAt }: IProps) {
  return (
    <>
      <div className="flex items-start gap-x-4">
        <UserAvatar
          imageUrl={authorAvatar}
          userName={authorName}
          className="md:h-20 md:w-20"
        />
        <div>
          <div className="flex flex-col items-start gap-x-3 md:flex-row md:items-center">
            <h4 className="text-lg font-semibold">{authorName}</h4>
            <div className="hidden h-1 w-1 rounded-full bg-muted-foreground md:block" />
            <p className="text-xs text-muted-foreground">
              {format(createdAt, "MMMM d, yyyy 'at' h:mm bb")}
            </p>
          </div>
          <p className="mt-2 whitespace-pre-wrap md:mt-1">{text}</p>
        </div>
      </div>
      <Separator className="my-6" />
    </>
  );
}
