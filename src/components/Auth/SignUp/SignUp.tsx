import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice';
import { Form } from '../Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { Grid, Paper, Avatar } from '@mui/material';
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
import Typography from '@mui/material/Typography';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate('/gallery');
      })
      .catch(console.error);
  };

  return (
    <div>
      <Grid style={gridMainStyle}>
        <Paper style={paperStyle} elevation={10}>
          <Grid container direction='column' style={gridStyle}>
            <Avatar style={avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography style={title} variant='h4'>
              Sign up
            </Typography>
            <Typography style={linktext}>
              Already have an account?
              <span>
                <Link style={link} to='/'>
                  Sign In
                </Link>
              </span>
            </Typography>
            <Form title='Sign up' handleClick={handleSignUp} />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export { SignUp };
