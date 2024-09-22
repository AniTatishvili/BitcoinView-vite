import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useUserSignupStore } from "../store/dashboard/user-auth";
// import { Loader } from "shared/ui/loader";

export const Redirect = () => {
  const location = useLocation();
  const { username } = useUserSignupStore((state) => ({
    username: state.username,
  }));

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // let uid = JSON.parse(window.localStorage.getItem("UID")) || "";
    const logged_in = JSON.parse(window.localStorage.getItem("LOGGED_IN") || '""');
    const token = JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}");

    if (token && logged_in) {
      try {
        const tokenExpiration = jwtDecode<{ exp: number }>(token).exp;
        const dateNow = Math.floor(new Date().getTime() / 1000);

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

  if (isAuthenticated && username) {
    return <Navigate to={"/settings/profile"} state={{ from: location }} />;
  } else if (!isAuthenticated) {
    return <Outlet />;
  }

  //   return <Loader />;
};
