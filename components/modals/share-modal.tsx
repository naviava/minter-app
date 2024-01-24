"use client";

import { useCallback } from "react";

import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
} from "react-share";

import { toast } from "sonner";
import { LinkIcon } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { LiaReddit } from "react-icons/lia";
import { FaFacebookSquare } from "react-icons/fa";

import { useIsMounted } from "~/hooks/use-is-mounted";
import { useShareModal } from "~/store/use-share-modal";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { HoverTip } from "~/components/hover-tip";

import { cn } from "~/lib/utils";

export function ShareModal() {
  const isMounted = useIsMounted();
  const { href, isOpen, onClose } = useShareModal();

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(href);
    toast.success("Link copied to clipboard.");
  }, [href]);

  if (!isMounted) return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Share NFT</DialogTitle>
          <DialogDescription className="text-balance text-center">
            Share this NFT with your friends using one of the options below.
          </DialogDescription>
        </DialogHeader>
        <div className="mx-auto grid grid-cols-3 gap-x-8 gap-y-4">
          <ShareButton
            tooltip="Copy link"
            variant="theme"
            onClick={handleCopyLink}
          >
            <LinkIcon />
          </ShareButton>
          <WhatsappShareButton url={href}>
            <ShareButton
              tooltip="Share on WhatsApp"
              className="bg-[#25D366] text-white hover:bg-[#25D366]/80 hover:text-white"
            >
              <BsWhatsapp size={28} />
            </ShareButton>
          </WhatsappShareButton>
          <FacebookShareButton url={href}>
            <ShareButton
              tooltip="Share on Facebook"
              className="bg-[#1877F2] text-white hover:bg-[#1877F2]/80 hover:text-white"
            >
              <FaFacebookSquare size={28} />
            </ShareButton>
          </FacebookShareButton>
          <TwitterShareButton url={href}>
            <ShareButton tooltip="Share on X (Twitter)" variant="default">
              <BsTwitterX size={28} />
            </ShareButton>
          </TwitterShareButton>
          <LinkedinShareButton url={href}>
            <ShareButton
              tooltip="Share on LinkedIn"
              className="bg-[#0077b5] text-white hover:bg-[#0077b5]/80 hover:text-white"
            >
              <BsLinkedin size={28} />
            </ShareButton>
          </LinkedinShareButton>
          <RedditShareButton url={href}>
            <ShareButton
              tooltip="Share on Reddit"
              className="bg-[#FF5700] text-white hover:bg-[#FF5700]/80 hover:text-white"
            >
              <LiaReddit size={28} />
            </ShareButton>
          </RedditShareButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface IShareButtonProps {
  children: React.ReactNode;
  tooltip: string;
  className?: string;
  onClick?: () => void;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "theme";
}

function ShareButton({
  children,
  tooltip,
  className,
  variant = "ghost",
  onClick,
}: IShareButtonProps) {
  return (
    <HoverTip
      message={tooltip}
      side="top"
      sideOffset={0}
      contentClassName="dark:bg-neutral-600"
    >
      <Button
        variant={variant}
        size="lg"
        onClick={onClick}
        className={cn(className)}
      >
        {children}
      </Button>
    </HoverTip>
  );
}
