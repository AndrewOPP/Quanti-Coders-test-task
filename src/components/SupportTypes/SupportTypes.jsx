import { Box, List, ListItem, Typography } from '@mui/material';
import { ReusableTitle } from 'components/ReusableTitle/ReusableTitle';
import React, { useState } from 'react';
import { s } from './SupportTypes.style';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { PaymentInfo } from 'components/PaymentInfo/PaymentInfo';
import ManIcon from '@mui/icons-material/Man';
import { SupportType } from 'components/SupportType/SupportType';
import { SubmitButton } from 'components/SubmitButton/SubmitButton';
export const SupportTypes = () => {
  const [isPaymentChosen, setIsPaymentChosen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Box sx={{ marginBottom: '100px', maxWidth: '1440px' }}>
        <ReusableTitle title={'Види допомоги'} />
        <Typography>Ви можете змінити вид допомоги</Typography>
        <List sx={s.list}>
          <ListItem sx={s.listItem}>
            <SupportType
              setIsActive={setIsActive}
              isActive={isActive}
              title="Зробити"
              icon={
                <BackHandOutlinedIcon className="iconSupportType" sx={s.icon} />
              }
              setIsPaymentChosen={setIsPaymentChosen}
            />
          </ListItem>

          <SupportType
            setIsActive={setIsActive}
            isActive={isActive}
            title="Фінансова допомога"
            icon={
              <AccountBalanceWalletOutlinedIcon
                className="iconSupportType"
                sx={isActive ? s.activeIcon : s.icon}
              />
            }
            setIsPaymentChosen={setIsPaymentChosen}
          />

          <ListItem sx={s.listItem}>
            <SupportType
              isActive={isActive}
              setIsActive={setIsActive}
              title="Матеріальна допомога"
              icon={<ManIcon className="iconSupportType" sx={s.icon} />}
            />
          </ListItem>
          <ListItem sx={s.listItem}>
            <SupportType
              setIsActive={setIsActive}
              isActive={isActive}
              title="Волонтерство"
              icon={
                <FavoriteBorderOutlinedIcon
                  className="iconSupportType"
                  sx={s.icon}
                />
              }
            />
          </ListItem>
        </List>
        {isPaymentChosen ? <PaymentInfo /> : null}
      </Box>
      {isPaymentChosen ? <SubmitButton /> : null}
    </>
  );
};
