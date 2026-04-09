import {
  Briefcase,
  LayoutDashboard,
  LogOut,
  Menu,
  Plus,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { user, signout } = useAuthStore();
  const userLogo = user.username.charAt(0).toUpperCase();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="flex flex-col justify-between h-full">
      <div>
        {isOpen ? (
          <button
            onClick={() => setIsOpen(false)}
            className="border-b border-neutral-300 p-4 w-full text-start cursor-pointer"
          >
            <h3 className="text-lg">Hirebase</h3>
            <p className="text-neutral-500 text-sm">Manage your applications</p>
          </button>
        ) : (
          <button
            className="border-b border-neutral-300 p-4 w-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </button>
        )}
        <div className="flex flex-col gap-2 p-4">
          <Link
            to="/dashboard"
            className={`p-3 rounded-lg ${
              isActive("/dashboard") ? "bg-indigo-100 text-indigo-600" : ""
            }`}
          >
            {!isOpen ? (
              <LayoutDashboard />
            ) : (
              <div className="flex items-center gap-2">
                <LayoutDashboard />
                <span>Dashboard</span>
              </div>
            )}
          </Link>
          <Link
            to="/dashboard/jobs"
            className={`p-3 rounded-lg ${
              isActive("/dashboard/jobs") ? "bg-indigo-100 text-indigo-600" : ""
            }`}
          >
            {!isOpen ? (
              <Briefcase />
            ) : (
              <div className="flex items-center gap-2">
                <Briefcase />
                <span>Jobs</span>
              </div>
            )}
          </Link>
          <Link
            to="/dashboard/add"
            className={`p-3 rounded-lg ${
              isActive("/dashboard/add") ? "bg-indigo-100 text-indigo-600" : ""
            }`}
          >
            {!isOpen ? (
              <Plus />
            ) : (
              <div className="flex items-center gap-2">
                <Plus />
                <span>Add Job</span>
              </div>
            )}
          </Link>
          <Link
            to="/profile"
            className={`p-3 rounded-lg ${
              isActive("/profile") ? "bg-indigo-100 text-indigo-600" : ""
            }`}
          >
            {!isOpen ? (
              <User />
            ) : (
              <div className="flex items-center gap-2">
                <User />
                <span>Profile</span>
              </div>
            )}
          </Link>
        </div>
      </div>
      <div className="p-4 border-t border-neutral-300">
        <div className={`flex items-center gap-2 mb-4 p-0`}>
          <div className="bg-linear-120 from-indigo-600 via-indigo-500 to-indigo-400 px-4 py-2 rounded-full">
            <p className="text-xl text-white font-semibold">{userLogo}</p>
          </div>
          {isOpen ? (
            <div>
              <p className="font-medium text-sm">@{user.username}</p>
              <p className="text-neutral-500 text-sm">{user.email}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          onClick={signout}
          className={`flex items-center justify-center gap-2 p-2 rounded-lg cursor-pointer text-red-500 border border-red-100 hover:bg-red-100 hover:border-red-300 transition-colors w-full`}
        >
          <LogOut className="size-6" />
          {isOpen ? <span>Logout</span> : ""}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
