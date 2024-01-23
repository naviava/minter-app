"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface IProps {
  label: string;
  href: string;
}

export function NavRoute({ label, href }: IProps) {
  const pathname = usePathname();

  return (
    <Button
      asChild
      variant="link"
      size="sm"
      className={cn("md:text-base", pathname === href && "font-bold underline")}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
