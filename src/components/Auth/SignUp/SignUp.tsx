import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice';
import { Form } from '../Form/Form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { Grid, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { link, PaperStyled } from '../authstyles';
import Typography from '@mui/material/Typography';
import { Error } from '../../general/ErrorToast/Error';
import { addDoc, collection } from 'firebase/firestore';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  return (
    <div>
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
            <Typography sx={{ fontFamily: 'Raleway', mb: 1 }} variant='h4'>
              Sign up
            </Typography>
            <Typography sx={{ fontFamily: 'Raleway' }}>
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
    </div>
  );
};

export { SignUp };
