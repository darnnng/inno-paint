import { FC, useState } from 'react';
import React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { textField, btn } from '../authstyles';

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
        label='Email'
        placeholder='Enter email'
        variant='outlined'
        style={textField}
        color='primary'
        type='email'
        name='email'
        onChange={handleEmailChange}
      />

      <TextField
        fullWidth
        style={textField}
        label='Password'
        placeholder='Enter password'
        variant='outlined'
        type='password'
        name='password'
        onChange={handlePasswordChange}
      />

      <Button fullWidth type='submit' variant='contained' style={btn}>
        {title}
      </Button>
    </form>
  );
};

export { Form };
