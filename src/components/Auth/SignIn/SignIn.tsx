import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../Form/Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../store/slices/userSlice';
import { Grid, Paper, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const paperStyle: any = {
    padding: 20,
    height: 450,
    width: 350,
    margin: '100px auto',
  };

  const gridStyle: any = {
    padding: 30,
    align: 'center',
  };

  const avatar: any = {
    backgroundColor: '#211090',
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
      .catch(console.error);
  };

  return (
    <div>
      <Grid direction='column' justifyContent='center' alignItems='center'>
        <Paper style={paperStyle} elevation={10}>
          <Grid style={gridStyle} justifyContent='center' alignItems='center'>
            <Avatar style={avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
            <p>
              Don't have an account yet?
              <span>
                <Link to='/signup'>Sign up</Link>
              </span>
            </p>
            <Form title='Sign in' handleClick={handleLogin} />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export { SignIn };
