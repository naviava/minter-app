import Link from "next/link";
import Image from "next/image";

import { cn } from "~/lib/utils";

export function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2 transition hover:opacity-75">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p className="hidden text-lg text-neutral-700 dark:text-neutral-200 md:block">
          Minter
        </p>
      </div>
    </Link>
  );
}
