import { FC, useState } from 'react';
import React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleClick(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        id='outlined-textarea'
        label='Email'
        placeholder='Enter email'
        variant='outlined'
        color='primary'
        margin='normal'
        type='email'
        name='email'
        onChange={handleEmailChange}
      />

      <TextField
        fullWidth
        id='outlined-textarea'
        label='Password'
        placeholder='Enter password'
        variant='outlined'
        type='password'
        name='password'
        margin='normal'
        onChange={handlePasswordChange}
      />

      <Button
        sx={{ m: 2 }}
        fullWidth
        type='submit'
        variant='contained'
        color='primary'
      >
        {title}
      </Button>
    </form>
  );
};

export { Form };
