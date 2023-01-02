import React from 'react';
import { Grid } from '@mui/material';

const settings: any = {
  height: '45px',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '70px',
  left: '23.7%',
  margin: 'auto',
  width: '800px',
  boxShadow: '0 4px 5px gray',
  borderRadius: '10px',
};

const Settings = () => {
  return (
    <Grid style={settings} container>
      Settings
    </Grid>
  );
};

export { Settings };
