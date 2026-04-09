import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const PrivateRoute = () => {
  const { user, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
