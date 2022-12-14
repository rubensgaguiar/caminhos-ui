import React from "react";

import { Alert, Snackbar } from "@mui/material";

const MessageSnackBar = ({
  open,
  handleClose,
  error,
}: any) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default MessageSnackBar;
