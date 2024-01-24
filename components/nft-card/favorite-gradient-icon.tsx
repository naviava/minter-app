import { RiHeartFill } from "react-icons/ri";
import { cn } from "~/lib/utils";

interface IProps {
  className?: string;
}

export function FavoriteGradientIcon({ className }: IProps) {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#dc2626", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#4f46e5", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <RiHeartFill
        fill="url(#gradient)"
        className={cn("h-[22px] w-[22px]", className)}
      />
    </>
  );
}
