import { Box, InputLabel, TextField } from '@mui/material';
import React from 'react';
import { s } from './FormInput.style';

export const FormInput = ({ labelTitle, inputType, isItSmallInput }) => {
  return (
    <Box sx={s.inputWrapper}>
      <InputLabel sx={s.inputLabel}>{labelTitle}</InputLabel>
      <TextField
        required
        sx={isItSmallInput ? s.halfInput : s.input}
        type={inputType}
      />
    </Box>
  );
};
