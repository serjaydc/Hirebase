import { useState } from "react";
import { Outlet } from "react-router-dom";

import { useAuthStore } from "../store/authStore";

import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

const Layout = () => {
  const { user, isCheckingAuth } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarWidth = isOpen ? "w-64" : "w-20";
  const marginLeft = isOpen ? "ml-64" : "ml-20";

  if (isCheckingAuth) return <div>Loading...</div>;
  if (!user) {
    return (
      <>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </>
    );
  }

  return (
    <div className="flex h-screen">
      <div
        className={`${sidebarWidth} h-full fixed border-r border-neutral-300 transition-all duration-300`}
      >
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <main
        className={`${marginLeft} flex-1 h-full overflow-y-auto p-4 bg-neutral-200/60 transition-all duration-300`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
