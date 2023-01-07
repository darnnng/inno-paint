import { Button, styled } from '@mui/material';
import { CSSProperties } from 'react';

export const ToolbarDiv = styled('div')({
  height: '45px',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '20px',
  left: '23.7%',
  width: '800px',
  margin: 'auto',
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

export const canvasBoard: CSSProperties = {
  backgroundColor: 'white',
};

export const link: CSSProperties = {
  color: 'white',
  textDecoration: 'none',
};
