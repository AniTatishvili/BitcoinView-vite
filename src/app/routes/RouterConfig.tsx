import { Routes, Route } from "react-router-dom";

// global
// import { Protected } from "./Protected";
// import { Redirect } from "./Redirect";

// login/signup
// import { ConfirmNewPassword } from "pages/auth/forgot-password/confirm-new-password";
// import { ForgotPassword } from "pages/auth/forgot-password/forgot-password";
import { Login, SignUp } from "../../pages/auth";

// import { Signup } from "../../pages/auth/signup";

export function RouterConfig() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}
