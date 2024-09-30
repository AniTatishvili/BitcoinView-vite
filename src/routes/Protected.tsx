import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Outlet, useLocation, Navigate } from "react-router-dom";

// import { Loader } from "shared/ui/loader";
import { useUserSignupStore } from "../store/dashboard/user-auth";

// Define types for props and user data
interface ProtectedProps {
  allowedRoles: string;
}

export const Protected: React.FC<ProtectedProps> = ({ allowedRoles }) => {
  const location = useLocation();

  const { updateUserFields, username, role_name } = useUserSignupStore();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const uid = JSON.parse(window.localStorage.getItem("UID") || '""');
    const logged_in = JSON.parse(window.localStorage.getItem("LOGGED_IN") || '""');
    const token = JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}");

    if (token && uid && logged_in) {
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
    // setIsLoading(false);
  }, [role_name, username, updateUserFields]);

  //   if (isAuthenticated === null) return <Loader />;

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    if (role_name && role_name.includes(allowedRoles)) {
      return <Outlet />;
    } else {
      return <Navigate to={"/404"} state={{ from: location }} />;
    }
  } else if (!isAuthenticated) {
    console.log("redirecting");
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return null;
};
