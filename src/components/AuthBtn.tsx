"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "../lib/auth";
import Link from "next/link";

const AuthButton = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isAuthenticated());
  }, []);

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    router.push("/login");
  };

  if (loggedIn) {
    return (
      <button onClick={handleLogout} className="btn btn-error">
        Sign Out
      </button>
    );
  }

  return (
    <Link href="/login" className="btn btn-primary">
      Login
    </Link>
  );
};

export default AuthButton;