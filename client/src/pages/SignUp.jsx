import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/v1/auth/signup", formData);
      const data = res.data;

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setLoading(false);
      setError(null);

      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="p-6 rounded-lg max-w-lg mx-auto bg-white mt-10 ">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
          required
        />

        <button
          disabled={loading}
          className="bg-[#FE6C4C] rounded-lg text-white p-3 font-semibold hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        <OAuth />
      </form>

      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to={"/sign-in"} className="text-[#FE6C4C] hover:underline">
          Sign in
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
