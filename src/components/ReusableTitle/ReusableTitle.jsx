import { Typography } from '@mui/material';
import React from 'react';
import { s } from './ReusableTitle.style';

export const ReusableTitle = ({ title }) => {
  return <Typography sx={s.title}>{title}</Typography>;
};
