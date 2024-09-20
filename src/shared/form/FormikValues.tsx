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
    passport_id: "",
  },

  updateUserProfile: {
    first_name: "",
    last_name: "",
    surname: "",
    email: "",
    mobile: "",
    avatar: "",
    employee: "",
    country: "",
    currency: "",
    resources: "",
    retention_status: "",
    customer_status: "",
    password: "",
    deposit_notifications: "",
    chat_notifications: "",
    other_notifications: "",
    show_ftd: "",
    tp_account_groups: "",
    time_zone: "",
  },

  paymentMethodValues: {
    card_number: "",
    exp_date: "",
    cvv: "",
  },
};
export const { initialValues, authorizationValues, otpValues, forgotPasswordValues, updateUserProfile, paymentMethodValues } = formik_values;
