import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

const Register = () => {
  const { signup, loading, error } = useAuthStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({
      firstName,
      lastName,
      username,
      email,
      password,
    });
  };
  return (
    <div className="min-h-screen container mx-auto px-2 py-4 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full border border-neutral-300 p-6 rounded-lg shadow-xl mb-8">
        <div className="text-center mb-4">
          <h1 className="font-semibold text-2xl lg:text-3xl leading-tight mb-1">
            Create Account
          </h1>
          <p className="text-neutral-500">
            Create your account and start tracking jobs today
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="firstName" className="text-sm text-black/80">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="outline-none border border-neutral-300 py-2 px-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="lastName" className="text-sm text-black/80">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="outline-none border border-neutral-300 py-2 px-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="username" className="text-sm text-black/80">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="johndoe25"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="outline-none border border-neutral-300 py-2 px-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="email" className="text-sm text-black/80">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border border-neutral-300 py-2 px-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="password" className="text-sm text-black/80">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border border-neutral-300 py-2 px-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 mb-4">
            <label htmlFor="confirmPassword" className="text-sm text-black/80">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="••••••••"
              className="outline-none border border-neutral-300 py-2 px-2 rounded-md"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors block w-full cursor-pointer"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <div className="flex items-center gap-1 mt-4 justify-center">
          <p>Already have an account?</p>
          <Link
            to="/signin"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
      <div className="text-neutral-500">
        <Link
          to="/"
          className="flex items-center gap-2 hover:gap-4 transition-all"
        >
          <MoveLeft />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Register;
