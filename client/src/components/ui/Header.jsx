import React from "react";
import { useAuthStore } from "../../store/authStore";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, loading } = useAuthStore();
  return (
    <header className="border-b border-neutral-300 shadow">
      <div className="container mx-auto py-4 px-2">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-indigo-500 p-2 rounded-md">
                <Briefcase className="size-6 text-white" />
              </div>
              <span className="text-xl hidden sm:block">Hirebase</span>
            </Link>
          </div>

          <nav className="flex items-center gap-2">
            <Link
              to="/signin"
              className="py-2 px-4 rounded-lg border border-neutral-300 hover:bg-neutral-200  transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
