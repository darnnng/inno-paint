import {
  Button,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Paper,
} from '@mui/material';
import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { galleryService } from '../../services/galleryService';
import { removeUser } from '../../store/slices/userSlice';
import {
  ImagesContainer,
  imgStyle,
  linkeditor,
  TitleMain,
  TitleSmall,
} from './gallerystyles';

const GalleryPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [emailList, setEmailList] = useState<any>([]);
  const [imagesList, setImagesList] = useState<any>([]);

  useEffect(() => {
    const emailsCollection = collection(db, 'users');
    const unsubscribe = onSnapshot(query(emailsCollection), (querySnapshot) => {
      const emailsArr: any = [];
      querySnapshot.forEach((doc) => {
        emailsArr.push(doc.data().email);
      });
      setEmailList(emailsArr);

      console.log(emailList);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getPicturesOfAllUsers();
  }, []);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate('/');
  };

  const handleChangeUser = (event: SelectChangeEvent) => {
    setUser(event.target.value as string);
    if (event.target.value === 'All users') {
      getPicturesOfAllUsers();
      return;
    }
    getPicturesOfCertainUser(event.target.value as string);
  };

  const getPicturesOfAllUsers = () => {
    const unsubscribe = onSnapshot(
      galleryService.getAllImages(),
      (querySnapshot) => {
        const imagesArr: any = [];
        querySnapshot.forEach((doc) => {
          imagesArr.push(doc.data().image);
        });
        setImagesList(imagesArr);
      }
    );
    return () => unsubscribe();
  };

  const getPicturesOfCertainUser = (user: string) => {
    const unsubscribe = onSnapshot(
      galleryService.getCertainImages(user),
      (querySnapshot) => {
        const imagesArr: any = [];
        querySnapshot.forEach((doc) => {
          imagesArr.push(doc.data().image);
        });
        setImagesList(imagesArr);
      }
    );
    return () => unsubscribe();
  };

  return (
    <div>
      <Grid
        container
        direction='column'
        sx={{ m: 0, justifyContent: 'center', alignItems: 'center' }}
      >
        <TitleMain>Welcome!</TitleMain>
        <TitleSmall>
          Check out the latest paintings or{' '}
          <Link style={linkeditor} to='/editor'>
            {' '}
            create something new
          </Link>
        </TitleSmall>

        <Button
          sx={{
            position: 'absolute',
            top: '30px',
            right: '30px',
          }}
          variant='contained'
          onClick={handleLogout}
        >
          Log out
        </Button>

        <FormControl sx={{ width: 300, mt: '30px' }}>
          <InputLabel id='select-label'>Choose the user</InputLabel>
          <Select
            labelId='select-label'
            id='select'
            value={user}
            label='Choose the user'
            onChange={handleChangeUser}
          >
            <MenuItem value='All users' key='allusers'>
              All users
            </MenuItem>
            {emailList.map((email: string) => (
              <MenuItem value={email} key={email}>
                {email}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ImagesContainer container>
          {imagesList == false ? (
            <TitleSmall>No images were found</TitleSmall>
          ) : (
            imagesList.map((image: string) => (
              <Paper>
                <img style={imgStyle} src={image} />
              </Paper>
            ))
          )}
        </ImagesContainer>
      </Grid>
    </div>
  );
};

export { GalleryPage };
