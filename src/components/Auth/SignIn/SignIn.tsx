import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../Form/Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../store/slices/userSlice';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  avatar,
  gridMainStyle,
  gridStyle,
  link,
  linktext,
  paperStyle,
  title,
} from '../authstyles';
//import MuiAlert, { AlertProps } from '@mui/material/Alert';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (errMessage: string) => {
    setOpen(true);
    setErrorMessage(errMessage);
  };

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate('/gallery');
      })
      .catch((err) => showError(err));
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert variant='filled' severity='error' sx={{ width: '100%' }}>
          Error. Please check your data.
        </Alert>
      </Snackbar>
      <Grid style={gridMainStyle}>
        <Paper style={paperStyle} elevation={10}>
          <Grid container direction='column' style={gridStyle}>
            <Avatar style={avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography style={title} variant='h4'>
              Sign in
            </Typography>
            <Typography style={linktext}>
              Don't have an account yet?
              <span>
                <Link style={link} to='/signup'>
                  Sign up
                </Link>
              </span>
            </Typography>
            <Form title='Sign in' handleClick={handleLogin} />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export { SignIn };
