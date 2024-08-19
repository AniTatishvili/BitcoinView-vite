import { Routes, Route } from "react-router-dom";

// global
import { Protected } from "./Protected";
// import { Redirect } from "./Redirect";

// login/signup
// import { ConfirmNewPassword } from "pages/auth/forgot-password/confirm-new-password";
// import { ForgotPassword } from "pages/auth/forgot-password/forgot-password";
import { Login, SignUp } from "../pages/auth";

// import { Signup } from "../../pages/auth/signup";

import { AdviserDashboard } from "../pages/dashboards/adviser-dashboard";
import { UserDashboard } from "../pages/dashboards/user-dashboard";
import { AdminDashboard } from "../pages/dashboards/admin-dashboard";

//user dashboard pages

import { Messages } from "../pages/dashboards/user-dashboard/messages";
import { Profile } from "../pages/dashboards/user-dashboard/profile";
import { Wallet } from "../pages/dashboards/user-dashboard/wallet";
import { Overview } from "../pages/dashboards/user-dashboard/overview";
import { Home } from "../pages/home";

export function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user-login" element={<Login />} />

      <Route path="user-signup" element={<SignUp />} />

      <Route element={<Protected allowedRoles={["Admin"]} />}>
        <Route path="admin-dashboard" element={<AdminDashboard />} />
      </Route>

      <Route element={<Protected allowedRoles={["Adviser"]} />}>
        <Route path="adviser-dashboard" element={<AdviserDashboard />} />{" "}
      </Route>

      <Route element={<Protected allowedRoles={["User"]} />}>
        <Route path="user-dashboard" element={<UserDashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
      </Route>
    </Routes>
  );
}
