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
import { UserList } from "../pages/dashboards/user-list";
import NotFoundPage from "../pages/NotFoundPage";
import { AdviserDashboardOverview } from "../pages/dashboards/adviser-dashboard/adviser-dashboard-overview";
import { AdminDashboardOverview } from "../pages/dashboards/admin-dashboard/admin-dashboard-overview";
import { Asset } from "../pages/dashboards/asset";
import { Chart } from "../pages/dashboards/chart";
import { PackageSelection, PackageSelectionSuccess } from "../pages/dashboards/package-selection";
import { UserMonthlyProfile } from "../pages/dashboards/user-monthly-profile";
import { UserRequests } from "../pages/dashboards/user-requests";

export function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<Protected allowedRoles="admin" />}>
        <Route path="admin-dashboard" element={<AdminDashboard />}>
          <Route path="admin-dashboard-overview" element={<AdminDashboardOverview />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="asset" element={<Asset />} />
          <Route path="chart" element={<Chart />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="user-requests" element={<UserRequests />} />
        </Route>
      </Route>
      /
      <Route element={<Protected allowedRoles="advisor" />}>
        <Route path="adviser-dashboard" element={<AdviserDashboard />}>
          <Route path="adviser-dashboard-overview" element={<AdviserDashboardOverview />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="asset" element={<Asset />} />
          <Route path="chart" element={<Chart />} />
          <Route path="user-list" element={<UserList />} />
        </Route>
      </Route>
      <Route element={<Protected allowedRoles="subscriber" />}>
        <Route path="user-dashboard" element={<UserDashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transaction-history" element={<TransactionHistory />} />
          <Route path="add-payment-method" element={<AddPaymentMethod />} />
          <Route path="user-monthly-profile" element={<UserMonthlyProfile />} />
          <Route path="package-selection" element={<PackageSelection />} />
          <Route path="package-selection-success" element={<PackageSelectionSuccess />} />
        </Route>
      </Route>
      {/* <Route element={<Redirect />}>
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<Redirect />}>
          <Route path="confirm-new-password" element={<ConfirmNewPassword />} />
        </Route>

        <Route element={<Redirect />}>
          <Route path="signup" element={<Signup />} />
        </Route> */}
    </Routes>
  );
}
