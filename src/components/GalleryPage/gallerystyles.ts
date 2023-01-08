import { Button, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CSSProperties } from 'react';

export const TitleMain = styled('h4')({
  fontFamily: 'Raleway',
  color: 'white',
  marginTop: '50px',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '32px',
});

export const TitleSmall = styled('h5')({
  fontFamily: 'Raleway',
  fontSize: '26px',
  marginBottom: '10px',
  color: 'white',
  marginTop: '20px',
  fontWeight: 'bold',
});

export const ImagesContainer = styled(Grid)({
  marginTop: '50px',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '30px',
  rowGap: '30px',
  marginBottom: '30px',
  minHeight: '402px',
});

export const LogoutButton = styled(Button)({
  position: 'absolute',
  top: '30px',
  right: '30px',
  color: 'white',
});

export const linkeditor: CSSProperties = {
  color: 'white',
};

export const imgStyle: CSSProperties = {
  backgroundColor: 'white',
  width: '400px',
  height: '320px',
};
