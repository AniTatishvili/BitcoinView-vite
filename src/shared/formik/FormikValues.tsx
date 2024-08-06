const formik_values = {
  initialValues: {
    username: "",
    email: "",
    // tel: "",
    password: "",
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
  confirmNewPasswordValues: {
    password: "",
    password_confirmation: "",
  },
  confirmValidationTokenValues: {
    token: "",
  },
};
export const { initialValues, authorizationValues, otpValues, forgotPasswordValues, confirmNewPasswordValues, confirmValidationTokenValues } = formik_values;
