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
  passport_id: Yup.string().required("Enter your passport ID").min(6, "Passport ID must be 6 characters or more"),
});

export const updateUserProfileSchema = Yup.object({
  first_name: Yup.string().required("Enter name"),
  last_name: Yup.string().required("Enter surname"),
  email: Yup.string().email("Invalid email format").required("Email is required field"),
  mobile: Yup.string().required("Enter your phone number"),
  avatar: Yup.string(),
  employee: Yup.string().required("Select employee"),
  country: Yup.string().required("Select country"),
  currency: Yup.string().required("Select currency"),
  resource: Yup.string().required("Enter resource"),
  retention_status: Yup.string().required("Select retention_status"),
  custumer_status: Yup.string().required("Select custumer status"),
  password: Yup.string().required("Enter your password").min(9, "Password must be 9 characters or more"),
  deposit_notifications: Yup.string(),
  chat_notifications: Yup.string(),
  other_notifications: Yup.string(),
  show_ftd: Yup.string(),
  tp_account_groups: Yup.string().required("Select tp account groups"),
  time_zone: Yup.string().required("Select time zone"),
});

export const paymentMethodSchema = Yup.object({
  card_number: Yup.string().email("Invalid card number").required("Card number is required field"),
  exp_data: Yup.string().required("Enter data"),
  cvv: Yup.string().required("Enter card cvv").min(3, "Cvv must be 3 characters").max(3, "Cvv must be 3 characters"),
});
