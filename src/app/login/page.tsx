"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../../lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    const success = login(email, password);

    if (success) {
      router.push("/"); // Redirect after login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6">
        <h1>Login to Clothique</h1>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mt-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mt-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button onClick={handleLogin} className="btn btn-primary w-full mt-5">
          Login
        </button>
      </div>
    </div>
  );
}