const formik_values = {
  initialValues: {
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    mobile: "",
  },

  authorizationValues: {
    login: "",
    password: "",
  },

  otpValues: {
    otp: "",
  },

  forgotPasswordValues: {
    email: "",
  },

  confirmNewPasswordValues: {
    password: "",
    password_confirmation: "",
  },

  updateUserProfile: {
    account_status: "",
    country: "",
    created_at: "",
    currency: "",
    customer_status: "",
    email: "",
    first_name: "",
    id: "",
    last_name: "",
    mobile: "",
    retention_status: "",
    role_id: "",
    role_name: "",
    time_zone: "",
    user_id: "",
    avatar: "",
  },

  paymentMethodValues: {
    card_number: "",
    exp_date: "",
    cvv: "",
  },
};
export const { initialValues, authorizationValues, otpValues, forgotPasswordValues, confirmNewPasswordValues, updateUserProfile, paymentMethodValues } =
  formik_values;
