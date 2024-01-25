import { format } from "date-fns";

interface IProps {
  text: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
}

export function Comment({ text, authorName, authorAvatar, createdAt }: IProps) {
  return (
    <div className="flex items-start gap-x-4">
      <div>Avatar</div>
      <div>
        <h4 className="text-lg font-semibold">{authorName}</h4>
        <p className="text-xs text-muted-foreground">
          {format(createdAt, "MMMM d, yyyy 'at' h:mm bb")}
        </p>
      </div>
    </div>
  );
}
