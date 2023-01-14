import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice';
import { Form } from '../Form/Form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { Grid, Avatar, Box, Switch } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { BoxSign, link, PaperStyled } from '../authstyles';
import Typography from '@mui/material/Typography';
import { Error } from '../../general/ErrorToast/Error';
import { addDoc, collection } from 'firebase/firestore';
import { selectTheme, setTheme } from '../../../store/slices/themeChangeSlice';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { theme } = useAppSelector(selectTheme);

  const handleSignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        addDoc(collection(db, `users`), {
          email: user.email,
        });

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
    <BoxSign>
      <Switch
        sx={{
          width: '62px',
          height: '34px',
          padding: '7px',
          top: '8px',
          left: '5px',
        }}
        checked={theme}
        onChange={handleThemeChange}
      />
      <Error
        errorMessage={errorMessage.slice(9)}
        open={open}
        handleClose={handleClose}
      />
      <Grid sx={{ m: 0, justifyContent: 'center', alignItems: 'center' }}>
        <PaperStyled>
          <Grid
            container
            direction='column'
            sx={{ p: 3, alignItems: 'center', justifyContent: 'center' }}
          >
            <Avatar sx={{ backgroundColor: '#6666ff', mb: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography sx={{ mb: 1 }} variant='h4'>
              Sign up
            </Typography>
            <Typography>
              Already have an account?
              <span>
                <Link style={link} to='/'>
                  Sign In
                </Link>
              </span>
            </Typography>
            <Form title='Sign up' handleClick={handleSignUp} />
          </Grid>
        </PaperStyled>
      </Grid>
    </BoxSign>
  );
};

export { SignUp };
