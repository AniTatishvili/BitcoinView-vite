import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Outlet, useLocation, Navigate } from "react-router-dom";

// import { Loader } from "shared/ui/loader";
import { useUserSignupStore } from "../store/dashboard/user-auth";

// Define types for props and user data
interface ProtectedProps {
  allowedRoles: string[];
}

export const Protected: React.FC<ProtectedProps> = ({ allowedRoles }) => {
  const location = useLocation();
  const { username, role } = useUserSignupStore((state) => ({
    username: state.username,
    role: state.role,
  }));

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  console.log("isAuthenticated", isAuthenticated, username);
  useEffect(() => {
    // const uid = JSON.parse(window.localStorage.getItem("UID") || '""');
    const logged_in = JSON.parse(window.localStorage.getItem("LOGGED_IN") || '""');
    const token = JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}");
    console.log(token, logged_in, 8765);
    if (token && logged_in) {
      try {
        const tokenExpiration = jwtDecode<{ exp: number }>(token).exp;
        const dateNow = Math.floor(new Date().getTime() / 1000);

        console.log("logged_in", dateNow);
        if (tokenExpiration < dateNow) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (e) {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [username]);

  //   if (isAuthenticated === null) return <Loader />;

  if (isAuthenticated && username) {
    console.log(666);
    if (role?.some((role) => allowedRoles.includes(role))) {
      console.log(77);
      return <Outlet />;
    } else {
      return <Navigate to={"/404"} state={{ from: location }} />;
    }
  } else if (!isAuthenticated) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return null;
};
