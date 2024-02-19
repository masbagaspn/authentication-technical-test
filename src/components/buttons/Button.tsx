import { useAppSelector } from "@/lib/hooks";
import { cn } from "@/lib/utils/tw-merge";
import * as React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: string;
} & React.ComponentPropsWithoutRef<"button">;

export default function Button({
  variant = "primary",
  className,
  children,
}: ButtonProps) {
  const { scheme } = useAppSelector((state) => state.theme);
  return (
    <button
      className={cn(
        "rounded-full transition",
        "font-bold text-[10px] sm:text-xs md:text-sm tracking-tight",
        "px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 lg:px-6 lg:py-3",
        {
          "text-blue-800 hover:bg-blue-100": scheme === "blue",
          "bg-blue-300": variant === "primary" && scheme === "blue",
          "bg-blue-50": variant === "secondary" && scheme === "blue",
        },
        {
          "text-orange-500 hover:bg-orange-100": scheme === "orange",
          "bg-orange-300": variant === "primary" && scheme === "orange",
          "bg-orange-50": variant === "secondary" && scheme === "orange",
        },
        className
      )}
    >
      {children}
    </button>
  );
}
