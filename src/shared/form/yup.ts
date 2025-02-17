import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().required("Enter username"),
  password: Yup.string().required("Enter your password").min(9, "Password must be 9 characters or more"),
  password_confirmation: Yup.string()
    .required("Enter password")
    .min(9, "Password must be 9 characters or more")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  email: Yup.string().email("Invalid email format").required("Email is required field"),
  mobile: Yup.string().required("Enter your phone number"),
});

export const authorizationValidationSchema = Yup.object({
  login: Yup.string().required("Enter username"),
  password: Yup.string().required("Enter your password").min(9, "Password must be 9 characters or more"),
});

export const authorizationOtpVerifySchema = Yup.object({
  otp: Yup.string().required("Enter OPT-code").min(6, "Your OTP-code must be at least 6 characters").max(6, "Your OTP-code must be at most 6 characters"),
});

export const forgotPasswordValidate = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required field"),
});

export const confirmNewPasswordSchema = Yup.object({
  password: Yup.string().required("Enter your password").min(9, "Password must be 9 characters or more"),
  password_confirmation: Yup.string()
    .required("Enter password")
    .min(9, "Password must be 9 characters or more")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const updateUserProfileSchema = Yup.object({
  first_name: Yup.string().required("Enter name"),
  last_name: Yup.string().required("Enter surname"),
  email: Yup.string().email("Invalid email format").required("Email is required field"),
  mobile: Yup.string().required("Enter your phone number"),
  avatar: Yup.string(),
  role_name: Yup.string(),
  country: Yup.string().required("Select country"),
  currency: Yup.string().required("Select currency"),
  account_status: Yup.string(),
  custumer_status: Yup.string().required("Select custumer status"),
  password: Yup.string().required("Enter your password").min(9, "Password must be 9 characters or more"),
  time_zone: Yup.string().required("Select time zone"),
});

export const paymentMethodSchema = Yup.object({
  card_number: Yup.string().email("Invalid card number").required("Card number is required field"),
  exp_data: Yup.string().required("Enter data"),
  cvv: Yup.string().required("Enter card cvv").min(3, "Cvv must be 3 characters").max(3, "Cvv must be 3 characters"),
});

export const pushNotificationsSchema = Yup.object({
  password: Yup.string().required("Enter your password").min(9, "Password must be 9 characters or more"),
  password_confirmation: Yup.string()
    .required("Enter password")
    .min(9, "Password must be 9 characters or more")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const packageSchema = Yup.object({
  package_name: Yup.string().required("Enter package name"),
  amount: Yup.string().required("Enter package amount"),
  monthly_profit: Yup.string().required("Enter package monthly profit"),
  duration_time: Yup.string().required("Enter package duration time"),
  sort_order_id: Yup.string().required("Enter package sort order id"),
  condition_1: Yup.string().required("Enter condition1"),
  condition_2: Yup.string().required("Enter condition1"),
  condition_3: Yup.string().required("Enter condition1"),
  descriptions: Yup.string().required("Enter descriptions"),
  cancellation_fee: Yup.string().required("Enter cancellation fee"),
  package_status: Yup.string().required("Enter package status"),
});
