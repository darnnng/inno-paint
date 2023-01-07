import { Button, styled } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import { CSSProperties } from 'react';

export const PaperStyled = styled(Paper)({
  padding: '20px',
  height: 450,
  width: 550,
  margin: '100px auto',
  borderRadius: 25,
  fontFamily: 'Raleway',
});

export const FormButton = styled(Button)({
  backgroundColor: '#6666ff',
  height: 50,
  marginTop: 40,
  fontFamily: 'Raleway',
});

export const BoxSign = styled(Box)({
  backgroundColor: '#c1d5f8',
  position: 'fixed',
  top: '0',
  width: '100%',
  height: '100vh',
  m: 0,
});

export const link: CSSProperties = {
  textDecoration: 'underline',
  color: '#6666ff',
  paddingLeft: 5,
};
