"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "~/components/ui/switch";
import { Skeleton } from "~/components/ui/skeleton";
import { trpc } from "~/app/_trpc/client";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [defaultChecked, setDefaultChecked] = useState(false);
  const { isLoading } = trpc.user.getAuthProfile.useQuery();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  useEffect(() => {
    setDefaultChecked(theme === "dark");
  }, [theme]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-x-2">
        <Skeleton className="h-5 w-5 rounded-full" />
        <Skeleton className="h-6 w-11 rounded-full" />
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-2">
      <Sun className="h-5 w-5 text-red-600" />
      <Switch
        checked={defaultChecked}
        defaultChecked={defaultChecked}
        onCheckedChange={toggleTheme}
        thumbClasses="bg-white"
        className="data-[state=checked]:bg-indigo-600 data-[state=unchecked]:bg-red-600"
      />
      <Moon className="h-5 w-5 text-indigo-600" />
    </div>
  );
}
