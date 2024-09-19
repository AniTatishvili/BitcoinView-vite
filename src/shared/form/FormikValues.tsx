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
    name: "",
    surname: "",
    email: "",
    phone_number: "",
    country: "",
    employee: "",
    resource: "",
    retention_status: "",
    currency: "",
    custumer_status: "",
    password: "",
    time_zone: "",
    tp_account_groups: "",
    passport_id: "",
  },

  paymentMethodValues: {
    card_number: "",
    exp_date: "",
    cvv: "",
  },
};
export const { initialValues, authorizationValues, otpValues, forgotPasswordValues, updateUserProfile, paymentMethodValues } = formik_values;
