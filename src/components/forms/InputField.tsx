import * as React from "react";

import { cn } from "@/lib/utils/tw-merge";
import { useAppSelector } from "@/lib/hooks";

type InputFieldProps = {
  label?: string;
  htmlFor?: string;
  helper?: string;
  icon?: React.ReactNode;
  iconOnClick?: () => void;
} & React.ComponentPropsWithoutRef<"input">;

export default function InputField({
  label,
  htmlFor,
  helper,
  icon,
  iconOnClick,
  ...props
}: InputFieldProps) {
  const { scheme } = useAppSelector((state) => state.theme);
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label
          htmlFor={htmlFor}
          className={cn(
            "font-bold capitalize inline-flex justify-between items-end text-[10px] md:text-xs",
            { "text-blue-800": scheme === "blue" },
            { "text-orange-500": scheme === "orange" }
          )}
        >
          {label}
          <span className="font-light text-xs opacity-70">{helper}</span>
        </label>
      )}
      <div
        className={cn(
          "w-full flex justify-between gap-1 rounded-full border text-xs sm:text-sm",
          "pl-3 pr-1.5 py-1.5  sm:pl-4 sm:py-2 sm:pr-2.5 md:pl-5 md:py-2 md:pr-1.5 lg:pl-6 lg:py-3 lg:pr-3",
          { "border-blue-800": scheme === "blue" },
          { "border-orange-500": scheme === "orange" }
        )}
      >
        <input
          id={htmlFor}
          className="grow bg-transparent outline-none"
          {...props}
        />
        {icon && (
          <span
            onClick={iconOnClick}
            className="bg-neutral-50/80 rounded-full p-1 ml-3 cursor-pointer hover:bg-neutral-50/30 transition text-neutral-950"
          >
            {icon}
          </span>
        )}
      </div>
    </div>
  );
}
