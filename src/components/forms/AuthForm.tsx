import { cn } from "@/lib/utils/tw-merge";
import * as React from "react";

type AuthFormProps = {
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"form">;

export default function AuthForm({
  className,
  children,
  ...props
}: AuthFormProps) {
  return (
    <form
      className={cn("w-full flex flex-col gap-4 my-8", className)}
      {...props}
    >
      {children}
    </form>
  );
}
