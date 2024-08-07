import { Routes, Route } from "react-router-dom";

// global
// import { Protected } from "./Protected";
// import { Redirect } from "./Redirect";

// login/signup
// import { ConfirmNewPassword } from "pages/auth/forgot-password/confirm-new-password";
// import { ForgotPassword } from "pages/auth/forgot-password/forgot-password";
import { Login, SignUp } from "../../pages/auth";

// import { Signup } from "../../pages/auth/signup";

import { AdviserDashboard } from "../../pages/dashboards/adviser-dashboard";
import { UserDashboard } from "../../pages/dashboards/user-dashboard";
import { AdminDashboard } from "../../pages/dashboards/admin-dashboard";

//user dashboard pages

import { Messages } from "../../pages/dashboards/user-dashboard/messages";
import { Profile } from "../../pages/dashboards/user-dashboard/profile";
import { Wallet } from "../../pages/dashboards/user-dashboard/wallet";
import { UserDashboardHome } from "../../pages/dashboards/user-dashboard/user-dashboard-home";

export function RouterConfig() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="signup" element={<SignUp />} />

      <Route path="admin-dashboard" element={<AdminDashboard />} />
      <Route path="adviser-dashboard" element={<AdviserDashboard />} />

      <Route path="user-dashboard" element={<UserDashboard />}>
        <Route path="user-dashboard-home" element={<UserDashboardHome />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
        <Route path="wallet" element={<Wallet />} />
      </Route>
    </Routes>
  );
}
