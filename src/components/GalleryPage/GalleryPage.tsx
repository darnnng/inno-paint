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
import {
  galleryGrid,
  linkeditor,
  logout,
  selectForm,
  titleMain,
  titleSmall,
} from './gallerystyles';

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
      <Grid container direction='column' style={galleryGrid}>
        <Typography variant='h4' style={titleMain}>
          Welcome, {email}!
        </Typography>
        <Typography variant='h5' style={titleSmall}>
          Check out the latest paintings or{' '}
          <Link style={linkeditor} to='/editor'>
            {' '}
            create something new
          </Link>
        </Typography>

        <Button style={logout} variant='contained' onClick={handleLogout}>
          Log out
        </Button>

        <FormControl style={selectForm}>
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
