
import { Route, Routes } from "react-router-dom";

// global
import { Protected } from "./Protected";
// import { Redirect } from "./Redirect";

// login/signup
// import { ConfirmNewPassword } from "pages/auth/forgot-password/confirm-new-password";
// import { ForgotPassword } from "pages/auth/forgot-password/forgot-password";
import { Login } from "pages/auth/login";

import { Signup } from "pages/auth/signup";

// profiles
// import { Profile } from "pages/profile";

// 404
// import NotFoundPage from "pages/NotFoundPage";

// routing
export function RouterConfig() {
  return (
    <Routes>
     
        {/* <Route path="*" element={<NotFoundPage />} /> */}

        {/* USERS: SETTINGS */}
        {/* users: settings - edit profile */}
        {/* <Route path="settings">
          <Route index element={<NotFoundPage />} />
          <Route
            element={
              <Protected
                allowedRoles={["Admin", ""]}
              />
            }>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route> */}

        

        {/* LOGIN/SIGNUP/ECT */}
        {/* <Route element={<Redirect />}> */}
        <Route path="login" element={<Login />} />
        {/* </Route> */}

        {/* <Route element={<Redirect />}>
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route> */}

        {/* <Route element={<Redirect />}>
          <Route path="confirm-new-password" element={<ConfirmNewPassword />} />
        </Route> */}

        <Route element={<Redirect />}>
          <Route path="signup" element={<Signup />} />
        </Route>
    </Routes>
  );
}
