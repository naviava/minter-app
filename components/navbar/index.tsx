import { Logo } from "~/components/logo";
import { ThemeSwitch } from "~/components/navbar/theme-switch";
import { AuthTrigger } from "~/components/navbar/auth-trigger";

export function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">
      <Logo />
      <div className="flex items-center gap-x-6">
        <ThemeSwitch />
        <AuthTrigger />
      </div>
    </nav>
  );
}
