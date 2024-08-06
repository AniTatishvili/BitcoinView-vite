import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().required("Enter username"),
  email: Yup.string().email("Invalid email format").required("Email is required field"),
  tel: Yup.string().required("Enter your phone number"),
  password: Yup.string().required("Enter your password").min(9, "Password must be 9 characters or more"),
});

export const authorizationValidationSchema = Yup.object({
  username: Yup.string().required("Enter username"),
  password: Yup.string().required("Enter your password").min(9, "Password must be 9 characters or more"),
});

export const authorizationOtpVerifySchema = Yup.object({
  otp: Yup.string().required("Enter OPT-code").min(6, "Your OTP-code must be at least 6 characters").max(6, "Your OTP-code must be at most 6 characters"),
});

export const forgotPasswordValidate = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required field"),
  passport_id: Yup.string().required("Enter your passport ID").min(6, "Passport ID must be 6 characters or more"),
});

export const confirmNewPasswordSchema = Yup.object({
  password: Yup.string().required("Enter your password").min(9, "Password must be 9 characters or more"),
  password_confirmation: Yup.string()
    .required("Enter password")
    .min(9, "Password must be 9 characters or more")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const confirmValidationTokenSchema = Yup.object({
  token: Yup.string()
    .required("Enter verifide code")
    .min(6, "Your validation code must be at least 6 characters")
    .max(6, "Your validation must be at most 6 characters"),
});
