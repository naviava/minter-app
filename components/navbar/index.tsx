import { Logo } from "~/components/logo";
import { ThemeSwitch } from "~/components/navbar/theme-switch";
import { AuthActions } from "~/components/navbar/auth-actions";

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
