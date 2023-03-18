import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Buttons = ({varient, name}) => {
  return (
         <Button variant={varient}>{name}</Button>
  )
}
