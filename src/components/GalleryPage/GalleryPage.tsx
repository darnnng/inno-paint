import {
  Button,
  Grid,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
} from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';
import { linkeditor, TitleMain, TitleSmall } from './gallerystyles';

const GalleryPage = () => {
  const dispatch = useAppDispatch();
  const { email } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate('/');
  };

  const [user, setUser] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
  };

  return (
    <div>
      <Grid
        container
        direction='column'
        sx={{ m: 0, justifyContent: 'center', alignItems: 'center' }}
      >
        <TitleMain>Welcome, {email}!</TitleMain>
        <TitleSmall>
          Check out the latest paintings or{' '}
          <Link style={linkeditor} to='/editor'>
            {' '}
            create something new
          </Link>
        </TitleSmall>

        <Button
          sx={{
            position: 'absolute',
            top: '30px',
            right: '30px',
          }}
          variant='contained'
          onClick={handleLogout}
        >
          Log out
        </Button>

        <FormControl sx={{ width: 300, mt: '30px' }}>
          <InputLabel id='select-label'>User</InputLabel>
          <Select
            labelId='select-label'
            id='select'
            value={user}
            label='Choose the user'
            onChange={handleChange}
          >
            <MenuItem value='name'>{email}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </div>
  );
};

export { GalleryPage };
