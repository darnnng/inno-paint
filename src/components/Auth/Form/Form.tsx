import { FC, useState } from 'react';
import React from 'react';
import TextField from '@mui/material/TextField';
import { FormButton } from '../authstyles';

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
        sx={{ mt: 2, mb: 0.5 }}
        color='primary'
        type='email'
        name='email'
        onChange={handleEmailChange}
      />

      <TextField
        fullWidth
        sx={{ mt: 2, mb: 0.5 }}
        label='Password'
        placeholder='Enter password'
        variant='outlined'
        type='password'
        name='password'
        onChange={handlePasswordChange}
      />

      <FormButton fullWidth type='submit' variant='contained'>
        {title}
      </FormButton>
    </form>
  );
};

export { Form };
