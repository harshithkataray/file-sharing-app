import React from "react";
import { use } from "react";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import Home from "./Home";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async () => {
    try {
      const res = await api.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
      navigate("/Home");
      console.log(res.data);
    } catch (e) {
      alert("Invalid username or password");
      console.log(e);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3"
        />

        <button
          onClick={login}
          className="bg-blue-500 text-white w-full p-2 rounded"
        >
          Login
        </button>

        <p className="text-center mt-4">Don't have an account?</p>

        <Link to="/register" className="block text-center text-blue-600 mt-2">
          Register Here
        </Link>
      </div>
    </div>
  );
}

export default Login;
