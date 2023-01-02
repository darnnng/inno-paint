import { Grid } from '@mui/material';
import React from 'react';
import { Canvas } from './Canvas/Canvas';
import { Settings } from './Canvas/Settings';
import { Toolbar } from './Canvas/Toolbar';

const gridstyle: any = {
  justifyContent: 'center',
  margin: 'auto',
  marginTop: '60px',
  alignItems: 'center',
  height: '600px',
  width: '800px',
  backgroundColor: 'white',
};

const Editor = () => {
  return (
    <div>
      <Toolbar />
      <Settings />
      <Canvas />
    </div>
  );
};

export { Editor };
