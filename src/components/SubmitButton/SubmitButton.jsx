import { Box, Button } from '@mui/material';
import React from 'react';
import { s } from './SubmitButton.style';

export const SubmitButton = () => {
  return (
    <Box sx={s.buttonWrapper}>
      <Button type="submit" sx={s.buttonText}>
        Допомогти
      </Button>
    </Box>
  );
};
