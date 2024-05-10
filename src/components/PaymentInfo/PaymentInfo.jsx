import { Box, List, ListItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { s } from './PaymentInfo.style';
import { PayPalLogo } from 'components/svgComponents/PayPalLogo';
import { MasterCardLogo } from 'components/svgComponents/MasterCardLogo';
import { AtmLogo } from 'components/svgComponents/AtmLogo';
import { WebMoneyLogo } from 'components/svgComponents/WebMoneyLogo';
import { VisaLogo } from 'components/svgComponents/VisaLogo';
import { PaymentMethod } from 'components/PaymentMethod/PaymentMethod';
export const PaymentInfo = () => {
  const [isActivePayment, setIsActivePayment] = useState(false);

  return (
    <Box sx={s.mainBox}>
      <Box>
        <Typography sx={s.titles}>Спосіб оплати</Typography>
        <List sx={s.paymentsList}>
          <ListItem sx={s.listItem}>
            <PaymentMethod
              icon={
                <Box sx={s.visaMasterBox}>
                  <MasterCardLogo />
                  <VisaLogo />
                </Box>
              }
              title="Карта Visa/MasterCard"
            />
          </ListItem>
          <ListItem
            sx={isActivePayment ? s.activeListItem : s.listItem}
            onClick={() => setIsActivePayment(prev => !prev)}
          >
            <PaymentMethod
              icon={<Typography sx={s.privatLogo}>Приват24</Typography>}
              title="Приват24"
            />
          </ListItem>
          <ListItem sx={s.listItem}>
            <PaymentMethod icon={<AtmLogo />} title="Термінали України" />
          </ListItem>
          <ListItem sx={s.listItem}>
            <PaymentMethod icon={<WebMoneyLogo />} title="WebMoney" />
          </ListItem>
          <ListItem sx={s.listItem}>
            <PaymentMethod icon={<PayPalLogo />} title="PayPal" />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography sx={s.titles}>Введіть наступні данні</Typography>
        <Box sx={s.cardBox}>
          <Box sx={s.cardNumberBox}>
            <Typography sx={s.cardNumberBoxTitle}>Номер карти</Typography>
            <Box sx={s.cardNumberInputBox}>
              <TextField
                size="small"
                required
                sx={s.cardNumberOtherInfoInput}
                type="number"
              />
              <TextField
                size="small"
                required
                sx={s.cardNumberOtherInfoInput}
                type="number"
              />
              <TextField
                size="small"
                required
                sx={s.cardNumberOtherInfoInput}
                type="number"
              />
              <TextField
                size="small"
                required
                sx={s.cardNumberOtherInfoInput}
                type="number"
              />
            </Box>
          </Box>
          <Box sx={s.cardNumberOtherInfoBox}>
            <Box sx={s.timeBox}>
              <Typography sx={s.cardNumberBoxTitle}>Термін дії</Typography>
              <TextField
                size="small"
                required
                sx={s.cardNumberOtherInfoInput}
              />
            </Box>
            <Box sx={s.cvvBox}>
              <Typography sx={s.cardNumberBoxTitle}>CVC/CVV</Typography>
              <TextField
                size="small"
                required
                sx={s.cardNumberOtherInfoInput}
                type="number"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
