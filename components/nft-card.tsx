"use client";

import Image from "next/image";

import { RiHeartFill } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { useQuery } from "@tanstack/react-query";

import { Card } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import { Switch } from "./ui/switch";
import { ExternalLink } from "lucide-react";

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
        {isOwner && (
          <div>
            <Separator />
            <div className="my-4 flex items-center justify-between">
              <Label>Visible to public?</Label>
              <Switch defaultChecked={isPublished} onCheckedChange={() => {}} />
            </div>
          </div>
        )}
        <Separator className="my-6" />
        <div className="flex items-center">
          <div
            role="button"
            className="flex flex-1 items-center justify-center"
          >
            <RiHeartLine className="h-6 w-6" />
          </div>
          <Separator orientation="vertical" className="h-6" />
          <div
            role="button"
            className="flex flex-1 items-center justify-center transition hover:opacity-70"
          >
            <ExternalLink />
          </div>
        </div>
      </div>
    </Card>
  );
}
