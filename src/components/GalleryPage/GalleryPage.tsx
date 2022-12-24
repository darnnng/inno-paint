import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';

const GalleryPage = () => {
  const dispatch = useAppDispatch();
  const { email } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome {email}</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export { GalleryPage };
