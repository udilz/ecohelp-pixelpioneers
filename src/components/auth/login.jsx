"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const Login = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  async function handleLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    setMessage(data.message);

    router.push("/dashboard");
  }

  return (
    <main className="space-y-6">
      <section className="flex justify-center items-center w-full">
        <h1 className="text-2xl">Welcome back</h1>
      </section>
      <form action={handleLogin} className="space-y-2">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered input-success w-full"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered input-success w-full"
        />
        <button className="btn btn-success w-full my-3">Login</button>
      </form>
      {message !== "" ? (
        <div role="alert" className="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{message}</span>
        </div>
      ) : null}
    </main>
  );
};
