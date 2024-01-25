import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";

interface IProps {
  userName?: string | null;
  imageUrl?: string | null;
  className?: string;
}

export function UserAvatar({ imageUrl, userName, className }: IProps) {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={imageUrl || ""} alt={userName || "Image"} />
      <AvatarFallback className="uppercase">
        {userName?.[0] || "A"}
      </AvatarFallback>
    </Avatar>
  );
}
