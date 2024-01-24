import { toast } from "sonner";
import { RiHeartFill } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { ExternalLink, Eye } from "lucide-react";

import { Separator } from "~/components/ui/separator";

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
      <div
        role="button"
        className="flex flex-1 items-center justify-center transition hover:opacity-70"
      >
        <RiHeartLine className="h-[22px] w-[22px]" />
      </div>
      <Separator orientation="vertical" className="h-6" />
      <a
        href={`/nft/${id}`}
        target="_blank"
        className="flex flex-1 items-center justify-center transition hover:opacity-70"
      >
        <Eye className="h-[22px] w-[22px]" />
      </a>
      <Separator orientation="vertical" className="h-6" />
      <div
        role="button"
        // TODO: Create share modal.
        onClick={handleCopyLink}
        className="flex flex-1 items-center justify-center transition hover:opacity-70"
      >
        <ExternalLink className="h-[22px] w-[22px]" />
      </div>
    </div>
  );
}
