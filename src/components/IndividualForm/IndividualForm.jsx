import { Box, Typography } from '@mui/material';
import { FormInput } from 'components/FormInput/FormInput';
import { ReusableTitle } from 'components/ReusableTitle/ReusableTitle';
import React from 'react';
import { s } from './IndividualForm.style';

export const IndividualForm = () => {
  return (
    <Box sx={{ maxWidth: '1440px' }}>
      <ReusableTitle title={'Заповніть форму'} />
      <Box sx={s.buttonsWrapper}>
        <Box sx={s.activeButton}>
          <Typography> Фіз. особа</Typography>
        </Box>
        <Box sx={s.disableButton}>
          <Typography> Юр. особа</Typography>
        </Box>
      </Box>

      <Box sx={s.formBox}>
        <Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <FormInput
              isItSmallInput={true}
              labelTitle={"Ім'я"}
              inputType={'text'}
            />
            <FormInput
              isItSmallInput
              labelTitle={'Фамілія'}
              inputType={'text'}
            />
          </Box>
          <Box sx={s.logoInputBox}>
            <FormInput
              labelTitle={'Назва компанії, організації'}
              inputType={'text'}
            />
            <Typography sx={s.logoButton}>+ Логотип</Typography>
          </Box>

          <FormInput labelTitle={'Email-адрес'} inputType={'email'} />
          <FormInput labelTitle={'Номер телефону'} inputType={'phone'} />
        </Box>
        <Box>
          <FormInput labelTitle={'Країна'} inputType={'text'} />
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <FormInput
              isItSmallInput={true}
              labelTitle={'Місто'}
              inputType={'text'}
            />
            <FormInput
              isItSmallInput={true}
              labelTitle={'Штат, район'}
              inputType={'text'}
            />
          </Box>

          <FormInput labelTitle={'Адреса'} inputType={'text'} />
          <FormInput
            isItSmallInput={true}
            labelTitle={'Поштовий індекс'}
            inputType={'number'}
          />
        </Box>
      </Box>
    </Box>
  );
};
