import { toast } from "sonner";
import { RiHeartFill } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { ExternalLink, Eye } from "lucide-react";

import { Separator } from "~/components/ui/separator";
import { HoverTip } from "../hover-tip";

interface IProps {
  id: string;
}

export function NftCardActions({ id }: IProps) {
  function handleCopyLink() {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_SITE_URL}/nft/${id}`,
    );
    toast.success("Link copied to clipboard");
  }

  return (
    <div className="flex items-center gap-x-2">
      <HoverTip message="Add to favorites" className="flex-1">
        <div
          role="button"
          className="flex items-center justify-center transition hover:opacity-70"
        >
          <RiHeartLine className="h-[22px] w-[22px]" />
        </div>
      </HoverTip>
      <Separator orientation="vertical" className="h-6" />
      <HoverTip message="View this token" className="flex-1">
        <a
          href={`/nft/${id}`}
          target="_blank"
          className="flex items-center justify-center transition hover:opacity-70"
        >
          <Eye className="h-[22px] w-[22px]" />
        </a>
      </HoverTip>
      <Separator orientation="vertical" className="h-6" />
      <HoverTip message="Share" className="flex-1">
        <div
          role="button"
          // TODO: Create share modal.
          onClick={handleCopyLink}
          className="flex items-center justify-center transition hover:opacity-70"
        >
          <ExternalLink className="h-[22px] w-[22px]" />
        </div>
      </HoverTip>
    </div>
  );
}
