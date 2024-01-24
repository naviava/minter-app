import { Logo } from "~/components/logo";
import { ThemeSwitch } from "~/components/navbar/theme-switch";
import { AuthTrigger } from "~/components/navbar/auth-trigger";
import { NavRoute } from "./nav-route";

const ROUTES = [
  {
    label: "Explore",
    href: "/explore",
  },
  {
    label: "My Space",
    href: "/my-space",
    requireAuth: true,
  },
];

export function Navbar() {
  return (
    <nav className="mx-auto flex h-16 w-full max-w-7xl shrink-0 items-center justify-between px-4">
      <div className="flex items-center gap-x-1 md:gap-x-8">
        <Logo />
        <div className="flex items-center md:gap-x-2">
          {ROUTES.map((route) => (
            <NavRoute key={route.href} {...route} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <ThemeSwitch />
        <AuthTrigger />
      </div>
    </nav>
  );
}
