"use client";

import { useQuery } from "@tanstack/react-query";
import { PageHeading } from "~/components/page-heading";

interface IToken {
  title: string;
  description: string;
  media: string;
}

interface IProps {
  tokenHref: string;
}

export function TokenTitle({ tokenHref }: IProps) {
  const query = useQuery({
    queryKey: ["token", tokenHref],
    queryFn: () => fetch(tokenHref).then(async (res) => await res.json()),
  });

  const data = query.data as IToken;
  if (!data) return null;

  return (
    <div className="flex items-start justify-between">
      <PageHeading label="Explore" tagline="See what others are doing" />
    </div>
  );
}
