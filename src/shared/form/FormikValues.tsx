const formik_values = {
  initialValues: {
    username: "",
    email: "",
    password: "",
    password_confirm: "",
    phone_number: "",
  },

  authorizationValues: {
    username: "",
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
};
export const { initialValues, authorizationValues, otpValues, forgotPasswordValues, updateUserProfile } = formik_values;
