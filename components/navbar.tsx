import { Logo } from "~/components/logo";
import { ThemeSwitch } from "~/components/theme-switch";

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
      <Logo />
      <ThemeSwitch />
    </nav>
  );
}
