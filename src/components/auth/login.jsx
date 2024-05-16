"use client";

import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();

  async function handleLogin(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    router.push("/dashboard");
  }

  return (
    <main>
      <form action={handleLogin}>
        <input name="email" type="email" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </main>
  );
};
