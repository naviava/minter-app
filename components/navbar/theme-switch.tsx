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
        <Skeleton className="h-[26px] w-12 rounded-full" />
        <Skeleton className="h-5 w-5 rounded-full" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-2">
      <Sun className="h-5 w-5" />
      <Switch
        checked={defaultChecked}
        defaultChecked={defaultChecked}
        onCheckedChange={toggleTheme}
        className="data-[state=unchecked]:bg-primary"
      />
      <Moon className="h-5 w-5" />
    </div>
  );
}
