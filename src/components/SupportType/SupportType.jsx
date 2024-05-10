import { Box, ListItem, Typography } from '@mui/material';
import React from 'react';
import { s } from '../SupportTypes/SupportTypes.style';
export const SupportType = ({
  icon,
  title,
  setIsPaymentChosen,
  isActive,
  setIsActive,
}) => {
  const handleClick = () => {
    setIsActive(!isActive);
    setIsPaymentChosen(prev => !prev);
  };

  if (title === 'Фінансова допомога') {
    return (
      <ListItem sx={s.listItem} onClick={handleClick}>
        <Box
          className="iconWrapper"
          sx={isActive ? s.activeIconWrapper : s.iconWrapper}
        >
          {icon}
        </Box>
        <Typography
          className="iconSupportTypeText"
          sx={isActive ? s.activeSupportType : s.supportType}
        >
          {title}
        </Typography>
      </ListItem>
    );
  }
  return (
    <>
      <Box className="iconWrapper" sx={s.iconWrapper}>
        {icon}
      </Box>
      <Typography className="iconSupportTypeText" sx={s.supportType}>
        {title}
      </Typography>
    </>
  );
};
