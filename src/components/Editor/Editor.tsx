import { Grid, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from './Canvas/Canvas';
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

export const btnBack: any = {
  position: 'absolute',
  top: '20px',
  right: '30px',
  fontFamily: 'Raleway',
};

const link: any = {
  color: 'white',
  textDecoration: 'none',
};

const Editor = () => {
  return (
    <div>
      <Button style={btnBack} variant='contained'>
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
