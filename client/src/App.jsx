import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";

import Layout from "./layout/Layout";
import PublicRoute from "./layout/PublicRoute";
import PrivateRoute from "./layout/PrivateRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UpgradePlan from "./pages/UpgradePlan";
import AllJobs from "./pages/AllJobs";
import AddJob from "./pages/AddJob";
import Profile from "./pages/Profile";

const App = () => {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/plan" element={<UpgradePlan />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/jobs" element={<AllJobs />} />
            <Route path="/dashboard/add" element={<AddJob />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
