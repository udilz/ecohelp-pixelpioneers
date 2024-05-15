"use client";

import { useRef, useState } from "react";

export const Register = () => {
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/v1/auth/register", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, role }),
    });

    console.log({ name, email, password, role });

    const data = await response.json();
    setMessage(data.message);
    formRef.current.reset();
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <label>
            <input
              type="radio"
              value="USER"
              checked={role === "USER"}
              onChange={handleRoleChange}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              value="ORGANIZATION"
              checked={role === "ORGANIZATION"}
              onChange={handleRoleChange}
            />
            NGO
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message !== "" ? <div>{message}</div> : null}
    </div>
  );
};
