import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../Form/Form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { setUser } from '../../../store/slices/userSlice';
import { Grid, Avatar, Typography, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { BoxSign, link, PaperStyled } from '../authstyles';
import { Error } from '../../general/ErrorToast/Error';
import { MaterialUISwitch } from '../../general/Switcher/Switch';
import { selectTheme, setTheme } from '../../../store/slices/themeChangeSlice';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { theme } = useAppSelector(selectTheme);

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
      .catch((err) => showError(err.message));
  };

  const showError = (errMessage: string) => {
    setOpen(true);
    setErrorMessage(errMessage);
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

  const handleThemeChange = () => {
    dispatch(setTheme());
  };

  return (
    <BoxSign sx={{ bgcolor: 'primary.main' }}>
      <MaterialUISwitch checked={theme} onChange={handleThemeChange} />
      <Error
        errorMessage={errorMessage.slice(9)}
        open={open}
        handleClose={handleClose}
      />
      <Grid sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <PaperStyled>
          <Grid
            container
            direction='column'
            sx={{ p: 3, alignItems: 'center', justifyContent: 'center' }}
          >
            <Avatar sx={{ backgroundColor: '#6666ff', mb: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography sx={{ fontFamily: 'Raleway', mb: 1 }} variant='h4'>
              Sign in
            </Typography>
            <Typography sx={{ fontFamily: 'Raleway' }}>
              Don't have an account yet?
              <span>
                <Link style={link} to='/signup'>
                  Sign up
                </Link>
              </span>
            </Typography>
            <Form title='Sign in' handleClick={handleLogin} />
          </Grid>
        </PaperStyled>
      </Grid>
    </BoxSign>
  );
};

export { SignIn };
