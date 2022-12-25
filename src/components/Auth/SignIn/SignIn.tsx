import React from 'react';
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
  //const [open, setOpen] = React.useState(false);

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
