import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GalleryPage } from './components/GalleryPage/GalleryPage';
import { SignIn } from './components/Auth/SignIn/SignIn';
import { SignUp } from './components/Auth/SignUp/SignUp';
import { Editor } from './components/Editor/Editor';
import { ThemeProvider } from '@mui/material';
import { useAppSelector } from './hooks/redux-hooks';
import { selectTheme } from './store/slices/themeChangeSlice';
import { dark, light } from './components/general/Switcher/themes';

function App() {
  const { theme } = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <Routes>
        <Route path='/' element={<Navigate to={'/signin'} replace />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/editor' element={<Editor />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
