import { Box } from '@mui/material';
import { IndividualForm } from './IndividualForm/IndividualForm';
import { SupportTypes } from './SupportTypes/SupportTypes';

export const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: '50px',
        marginRight: '50px',
      }}
    >
      <form>
        <IndividualForm />
        <SupportTypes />
      </form>
    </Box>
  );
};
