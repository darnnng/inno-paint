import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from './Canvas/Canvas';
import { Toolbar } from './Canvas/Toolbar';
import { link } from './editorstyles';

const Editor = () => {
  return (
    <Box sx={{ backgroundColor: '#c1d5f8' }}>
      <Button
        sx={{ position: 'absolute', top: '20px', right: '30px' }}
        variant='contained'
      >
        <Link style={link} to='/gallery'>
          Back
        </Link>
      </Button>
      <Toolbar />
      <Canvas />
    </Box>
  );
};

export { Editor };
