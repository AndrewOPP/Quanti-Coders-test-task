import { Typography } from '@mui/material';
import { s } from 'components/PaymentInfo/PaymentInfo.style';
import React from 'react';

export const PaymentMethod = ({ icon, title }) => {
  return (
    <>
      {icon}
      <Typography sx={s.listItemText}>{title}</Typography>
    </>
  );
};
