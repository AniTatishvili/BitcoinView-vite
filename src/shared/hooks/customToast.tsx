import React from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Box from "@mui/material/Box";

interface State extends SnackbarOrigin {
  open: boolean;
}

interface customToastProps {
  message: string;
}

export const CustomToast = ({ message }: customToastProps) => {
  const [state, setState] = React.useState<State>({
    open: true,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={5000}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </Box>
  );
};
