import { getSessionCookie } from "@/lib/utils/cookies";
import { redirect } from "next/navigation";

export default function Home() {
  const auth = getSessionCookie();

  if (auth) {
    return redirect("/profile");
  }

  return redirect("/register");
}
