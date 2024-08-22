import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Datapicker = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />;
};
