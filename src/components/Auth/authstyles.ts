import { styled } from '@mui/material';
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

export const link: CSSProperties = {
  textDecoration: 'underline',
  color: '#6666ff',
  paddingLeft: 5,
};

export const btn: CSSProperties = {
  backgroundColor: '#6666ff',
  height: 50,
  marginTop: 40,
  fontFamily: 'Raleway',
};
