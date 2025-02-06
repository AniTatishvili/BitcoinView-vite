const formik_values = {
  initialValues: {
    username: "",
    password: "",
    password_confirmation: "",
    email: "",
    mobile: "",
    referer_code: "",
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

  sendAmointValues: {
    amount_usd: "",
  },

  sendWithdrawAmointValues: {
    btc_address: "",
  },

  pushNotificationsValues: {
    subject: "",
    date: "",
    send_to: "",
  },

  packageValues: {
    package_name: "",
    amount: "",
    monthly_profit: "",
    duration_time: "",
    sort_order_id: 0,
    condition_1: "",
    condition_2: "",
    condition_3: "",
    descriptions: "",
    cancellation_fee: 0,
    package_status: 0,
  },

  addUserSliderValues: {
    title: "",
    description: "",
    external_link: "",
    video_url: "",
    image_url: "",
  },
};
export const {
  initialValues,
  authorizationValues,
  otpValues,
  forgotPasswordValues,
  confirmNewPasswordValues,
  updateUserProfile,
  paymentMethodValues,
  sendAmointValues,
  sendWithdrawAmointValues,
  pushNotificationsValues,
  packageValues,
  addUserSliderValues,
} = formik_values;
