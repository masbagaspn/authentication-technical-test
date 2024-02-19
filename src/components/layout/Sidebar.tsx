import { useAppSelector } from "@/lib/hooks";
import { removeSessionCookies } from "@/lib/utils/cookies";
import { SignOut, User } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import * as React from "react";

const menu = [
  {
    href: "/profile",
    icon: <User />,
    name: "profile",
  },
];

export default function Sidebar() {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    router.push("/login");
    removeSessionCookies();
  };

  return (
    <nav className="h-full flex flex-col justify-between gap-4 text-neutral-950 border-r p-2 sm:p-3 md:p-4 lg:p-6">
      <h2 className="sr-only lg:not-sr-only">{user?.username}</h2>
      <ul className="grow flex flex-col gap-4 text-sm border-b py-4 text-neutral-950">
        {menu.map((item) => (
          <li
            key={item.name}
            className="w-full flex items-center gap-2 p-2 capitalize"
          >
            {item.icon}
            <span className="sr-only lg:not-sr-only">{item.name}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleLogout()}
        className="flex items-center justify-center gap-2 mb-4 text-sm text-red-600/50 hover:text-red-500 transition"
      >
        <SignOut />
        <span className="sr-only lg:not-sr-only">Logout</span>
      </button>
    </nav>
  );
}
