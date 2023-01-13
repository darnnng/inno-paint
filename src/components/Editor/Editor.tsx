import { Box, Switch } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { selectTheme, setTheme } from '../../store/slices/themeChangeSlice';
import { Canvas } from './Canvas/Canvas';
import { Toolbar } from './Canvas/Toolbar';
import { BackButton, link } from './editorstyles';

const Editor = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(selectTheme);
  const handleThemeChange = () => {
    dispatch(setTheme());
  };

  return (
    <Box sx={{ bgcolor: 'primary.main', overflow: 'hidden' }}>
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
      <BackButton sx={{ bgcolor: 'secondary.main' }} variant='contained'>
        <Link style={link} to='/gallery'>
          Back
        </Link>
      </BackButton>
      <Toolbar />
      <Canvas />
    </Box>
  );
};

export { Editor };
