"use client";

import Image from "next/image";

import { ExternalLink, Eye } from "lucide-react";
import { RiHeartFill } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";

import { Card } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { Separator } from "~/components/ui/separator";
import { trpc } from "~/app/_trpc/client";
import { toast } from "sonner";

interface IProps {
  id: string;
  tokenHref: string;
  walletId: string;
  isPublished: boolean;
  isOwner?: boolean;
}

interface IToken {
  title: string;
  description: string;
  media: string;
}

export function NftCard({
  id,
  tokenHref,
  walletId,
  isPublished,
  isOwner,
}: IProps) {
  const query = useQuery({
    queryKey: ["userToken", tokenHref],
    queryFn: () => fetch(tokenHref).then(async (res) => await res.json()),
  });
  const data = query.data as IToken;

  const { mutate: toggleTokenVisibility } =
    trpc.nft.toggleVisibility.useMutation({
      onError: ({ message }) => toast.error(message),
      onSuccess: (isPublished) => {
        if (isPublished) {
          return toast.success("Token is now visible to the public");
        }
        return toast.success("Token is now hidden from the public");
      },
    });

  function handleCopyLink() {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_SITE_URL}/nft/${id}`,
    );
    toast.success("Copied to clipboard");
  }

  if (!data) return null;
  return (
    <Card className="rounded-sm p-4">
      <a href={`/nft/${id}`} target="_blank">
        <div className="relative mb-4 aspect-square w-full">
          <Image
            fill
            src={data.media}
            alt={data.title}
            className="rounded-sm object-cover"
          />
        </div>
      </a>
      <div className="space-y-2">
        <div className="text-center text-sm text-muted-foreground">
          <p className="font-light">Wallet</p>
          <p className="font-semibold">{walletId}</p>
        </div>
        <a href={`/nft/${id}`} target="_blank">
          <h3 className="mt-2 line-clamp-2 text-balance text-center font-medium transition hover:underline">
            {data.title}
          </h3>
        </a>
        {!isOwner && (
          <div>
            <Separator />
            <div className="my-4 flex items-center justify-between">
              <Label>Visible to public?</Label>
              <Switch
                defaultChecked={isPublished}
                onCheckedChange={() => toggleTokenVisibility(id)}
              />
            </div>
          </div>
        )}
        <Separator className="my-6" />
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
      </div>
    </Card>
  );
}
