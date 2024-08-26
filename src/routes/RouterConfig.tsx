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

import { Messages } from "../pages/dashboards/messages";
import { Profile } from "../pages/dashboards/profile";
import { Wallet } from "../pages/dashboards/user-dashboard/wallet";
import { Overview } from "../pages/dashboards/user-dashboard/overview";
import { Home } from "../pages/home";
import { Deposit } from "../pages/dashboards/user-dashboard/deposit";
import { Withdraw } from "../pages/dashboards/user-dashboard/withdraw";
import { TransactionHistory } from "../pages/dashboards/user-dashboard/transaction-history";
import { AddPaymentMethod } from "../pages/dashboards/user-dashboard/add-payment-method";
import { UserList } from "../pages/dashboards/adviser-dashboard/user-list";

export function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user-login" element={<Login />} />

      <Route path="user-signup" element={<SignUp />} />

      <Route element={<Protected allowedRoles={["Admin"]} />}>
        <Route path="admin-dashboard" element={<AdminDashboard />}>
          <Route path="admin-dashboard-overview" element={<Overview />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user-list" element={<UserList />} />
        </Route>
      </Route>

      <Route element={<Protected allowedRoles={["Adviser"]} />}>
        <Route path="adviser-dashboard" element={<AdviserDashboard />}>
          <Route path="adviser-dashboard-overview" element={<Overview />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="user-list" element={<UserList />} />
        </Route>
      </Route>

      <Route element={<Protected allowedRoles={["Subscriber"]} />}>
        <Route path="user-dashboard" element={<UserDashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transaction-history" element={<TransactionHistory />} />
          <Route path="add-payment-method" element={<AddPaymentMethod />} />
        </Route>
      </Route>
    </Routes>
  );
}
