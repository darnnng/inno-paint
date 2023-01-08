import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GalleryPage } from './components/GalleryPage/GalleryPage';
import { SignIn } from './components/Auth/SignIn/SignIn';
import { SignUp } from './components/Auth/SignUp/SignUp';
import { Editor } from './components/Editor/Editor';
import { ThemeProvider } from '@mui/material';
import { useAppSelector } from './hooks/redux-hooks';
import { selectTheme } from './store/slices/themeChangeSlice';
import { dark, light } from './components/general/Switcher/themes';

function App() {
  const { darkTheme } = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/editor' element={<Editor />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
