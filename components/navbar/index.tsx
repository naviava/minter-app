import { Logo } from "~/components/logo";
import { Button } from "~/components/ui/button";
import { ThemeSwitch } from "~/components/navbar/theme-switch";
import { AuthTrigger } from "~/components/navbar/auth-trigger";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="mx-auto flex h-16 w-full max-w-7xl shrink-0 items-center justify-between px-4">
      <div className="flex items-center gap-x-1 md:gap-x-8">
        <Logo />
        <div className="flex items-center md:gap-x-2">
          <Button asChild variant="link" size="sm" className="text-base">
            <Link href="/explore">Explore</Link>
          </Button>
          <Button asChild variant="link" size="sm" className="text-base">
            <Link href="/my-space">My Space</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <ThemeSwitch />
        <AuthTrigger />
      </div>
    </nav>
  );
}
