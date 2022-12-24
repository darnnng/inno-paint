import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GalleryPage } from './components/GalleryPage/GalleryPage';
import { SignIn } from './components/Auth/SignIn/SignIn';
import { SignUp } from './components/Auth/SignUp/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/gallery' element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
