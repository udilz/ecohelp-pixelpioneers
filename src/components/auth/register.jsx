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
    <div className="space-y-6">
      <section className="flex justify-center items-center w-full">
        <h1 className="text-2xl">Create an account</h1>
      </section>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered input-success w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered input-success w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered input-success w-full"
        />
        <div>
          <label>
            <input
              type="radio"
              value="USER"
              name="radio-5"
              className="radio radio-success mx-2"
              checked={role === "USER"}
              onChange={handleRoleChange}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              value="ORGANIZATION"
              name="radio-5"
              className="radio radio-success mx-2"
              checked={role === "ORGANIZATION"}
              onChange={handleRoleChange}
            />
            NGO
          </label>
        </div>
        <button type="submit" className="btn btn-success w-full my-3">
          Sign Up
        </button>
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
    </div>
  );
};
