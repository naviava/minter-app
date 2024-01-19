import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

interface IProps {
  userName?: string | null;
  imageUrl?: string | null;
}

export function UserAvatar({ imageUrl, userName }: IProps) {
  return (
    <Avatar>
      <AvatarImage src={imageUrl || ""} alt={userName || "Image"} />
      <AvatarFallback className="uppercase">{userName?.[0]}</AvatarFallback>
    </Avatar>
  );
}
