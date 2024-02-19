"use client";

import * as React from "react";

import ThemeSwitcher from "../ThemeSwitcher";

export default function Header() {
  return (
    <header className="w-full flex justify-end px-2 sm:px-4 md:px-6 lg:px-8 bg-neutral-50 border-b sticky top-0 h-[5vh] z-50">
      <ThemeSwitcher />
    </header>
  );
}
