import { Button, Grid, styled } from '@mui/material';
import { CSSProperties } from 'react';

export const ToolbarDiv = styled('div')({
  height: '45px',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',

  width: '800px',
  margin: 'auto',
  marginBottom: '0',
  boxShadow: '0 4px 5px gray',
  justifyContent: 'space-between',
  paddingLeft: '10px',
  paddingRight: '10px',
  color: 'black',
  borderRadius: '10px',
});

export const StyledButton = styled(Button)({
  width: '15px',
  height: '25px',
  backgroundColor: 'white',
  color: 'black',
  variant: 'contained',
  '&:hover': {
    background: 'aliceblue',
  },
});

export const BackButton = styled(Button)({
  position: 'absolute',
  top: '20px',
  right: '30px',

  color: 'text.main',
});

export const CanvasGrid = styled(Grid)({
  height: '650px',
  display: 'flex',
  marginTop: '0',
  justifyContent: 'center',
  alignItems: 'center',
});

export const canvasBoard: CSSProperties = {
  backgroundColor: 'white',
};

export const link: CSSProperties = {
  color: 'white',
  textDecoration: 'none',
};
