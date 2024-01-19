import { Logo } from "~/components/logo";
import { Button } from "~/components/ui/button";
import { ThemeSwitch } from "~/components/theme-switch";

import { serverClient } from "~/app/_trpc/server-client";
import { AuthActions } from "./auth-actions";

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
      <Logo />
      <div className="flex items-center gap-x-6">
        <ThemeSwitch />
        <AuthActions />
      </div>
    </nav>
  );
}
