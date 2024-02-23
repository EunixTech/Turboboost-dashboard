
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import { styled, ThemeProvider } from '@mui/system';
import theme from "../components/Theme"; // Adjust the path accordingly
import { useSelector } from 'react-redux';
import OnboardingBillings from "../views/OnboardingBillings";

const NewOnboardModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(5px)',
  '& .MuiBox-root': {
    position: 'absolute',
    outline: 'none',
    borderRadius: '10px',
  },
}));


const NewOnboard = () => {

  return (
    <ThemeProvider theme={theme}>
      <NewOnboardModal
        open
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box>
          <OnboardingBillings />
        </Box>

      </NewOnboardModal>
    </ThemeProvider>
  );
};

export default NewOnboard;
