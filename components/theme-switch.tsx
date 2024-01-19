"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "~/components/ui/switch";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [defaultChecked, setDefaultChecked] = useState(false);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  useEffect(() => {
    setDefaultChecked(theme === "dark");
  }, [theme]);

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
