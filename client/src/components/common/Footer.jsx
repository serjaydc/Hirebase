import { Briefcase } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-300 bg-neutral-100 py-4 px-2">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-indigo-500 p-1 rounded-md">
                <Briefcase className="size-6 text-white" />
              </div>
              <span className="text-lg">Hirebase</span>
            </Link>
          </div>
          <p>&copy; 2026 Hirebase. Track your path to success.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
