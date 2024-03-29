"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

import { Button } from "~/components/ui/button";
import { PageHeading } from "~/components/page-heading";
import { PageWrapper } from "~/components/page-wrapper";
import { CreateAsset } from "./_components/create-asset";

export default function CreatePage() {
  const router = useRouter();

  return (
    <PageWrapper className="mx-auto max-w-xl">
      <div className="flex items-start justify-between">
        <PageHeading label="Create" tagline="Teach some history" />
        <Button variant="link" size="sm" onClick={() => router.back()}>
          <X className="mr-2 h-4 w-4" />
          Cancel
        </Button>
      </div>
      <CreateAsset />
    </PageWrapper>
  );
}
