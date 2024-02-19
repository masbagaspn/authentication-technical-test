import * as React from "react";

import { useAppSelector } from "@/lib/hooks";
import { cn } from "@/lib/utils/tw-merge";

type AuthLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  const { scheme } = useAppSelector((state) => state.theme);
  return (
    <div className="grow w-full flex flex-col items-center justify-center py-10">
      <div className="w-1/3 min-w-[240px] flex flex-col text-left">
        <h1
          className={cn(
            "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-1 sm:mb-2 md:mb-3 lg:mb-4",
            { "text-blue-800": scheme === "blue" },
            { "text-orange-500": scheme === "orange" }
          )}
        >
          {title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base">{description}</p>
        {children}
      </div>
    </div>
  );
}
