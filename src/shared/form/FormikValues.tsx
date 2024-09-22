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
    account_status: "",
    chat_notifications: "",
    country: "",
    created_at: "",
    currency: "",
    customer_status: "",
    deposit_notifications: "",
    email: "",
    employee: "",
    first_name: "",
    id: "",
    last_name: "",
    mobile: "",
    other_notifications: "",
    resources: "",
    retention_status: "",
    role_id: "",
    role_name: "",
    show_ftd: "",
    time_zone: "",
    tp_account_groups: "",
    updated_at: "",
    user_id: "",
    avatar: "",
  },

  paymentMethodValues: {
    card_number: "",
    exp_date: "",
    cvv: "",
  },
};
export const { initialValues, authorizationValues, otpValues, forgotPasswordValues, updateUserProfile, paymentMethodValues } = formik_values;
