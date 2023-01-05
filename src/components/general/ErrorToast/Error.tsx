import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const Error = ({
  errorMessage,
  open,
  handleClose,
}: {
  errorMessage: string;
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert variant='filled' severity='error'>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export { Error };
