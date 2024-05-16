"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const LogoutBtn = () => {
  const router = useRouter();
  function handleLogout() {
    Cookies.remove("token");
    router.push("/");
  }

  return (
    <button onClick={handleLogout} className="w-fit">
      Logout
    </button>
  );
};
