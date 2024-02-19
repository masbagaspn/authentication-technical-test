"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeScheme } from "@/lib/redux/features/theme/themeSlice";
import { cn } from "@/lib/utils/tw-merge";

export default function ThemeSwitcher() {
  const { scheme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-xs font-semibold transition",
        {
          "text-blue-800": scheme === "blue",
          "text-orange-500": scheme === "orange",
        }
      )}
    >
      <ThemeLabel scheme={scheme} target="blue">
        Blue
      </ThemeLabel>
      <label className="relative w-8 h-5 cursor-pointer">
        <input
          id="theme-switcher"
          type="checkbox"
          checked={scheme === "blue" ? false : true}
          onChange={() => dispatch(changeScheme())}
          className="sr-only peer"
        />
        <div className="absolute left-0 top-0 w-8 h-5 bg-blue-800 rounded-full peer-checked:bg-orange-500 transition" />
        <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full peer-checked:translate-x-3 transition" />
      </label>
      <ThemeLabel scheme={scheme} target="orange">
        Orange
      </ThemeLabel>
    </div>
  );
}

type ThemeLabel = {
  scheme: string;
  target: string;
  className?: string;
  children: React.ReactNode;
};

const ThemeLabel = ({ children, scheme, className, target }: ThemeLabel) => {
  return (
    <span
      className={cn(
        "font-semibold sr-only md:not-sr-only",
        {
          "text-neutral-200": scheme !== target,
        },
        className
      )}
    >
      {children}
    </span>
  );
};
