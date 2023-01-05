import { Grid, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from './Canvas/Canvas';
import { Toolbar } from './Canvas/Toolbar';
import { link } from './editorstyles';

const Editor = () => {
  return (
    <div>
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
    </div>
  );
};

export { Editor };
