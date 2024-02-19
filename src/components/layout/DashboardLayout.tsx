"use client";

import * as React from "react";
import { redirect } from "next/navigation";

import Sidebar from "./Sidebar";
import { getSessionCookie } from "@/lib/utils/cookies";
import { useAppDispatch } from "@/lib/hooks";
import { setUser } from "@/lib/redux/features/auth/authSlice";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = getSessionCookie();
  const dispatch = useAppDispatch();

  React.useLayoutEffect(() => {
    if (!auth) {
      return redirect("/login");
    } else {
      dispatch(setUser(auth));
    }
  }, [dispatch, auth]);

  if (!auth) return null;

  return (
    <div className="h-[95vh] flex">
      <Sidebar />
      <div className="h-full grow overflow-y-auto p-2 sm:p-4 md:p-6 lg:p-8">
        {children}
      </div>
    </div>
  );
}
