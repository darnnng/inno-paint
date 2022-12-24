import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice';
import { Form } from '../Form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { Grid, Paper, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

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
      <Grid direction='column' justifyContent='center' alignItems='center'>
        <Paper style={paperStyle} elevation={10}>
          <Grid style={gridStyle} justifyContent='center' alignItems='center'>
            <Avatar style={avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign up</h2>
            <p>
              Already have an account?
              <span>
                <Link to='/'>Sign In</Link>
              </span>
            </p>
            <Form title='Sign up' handleClick={handleSignUp} />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export { SignUp };
