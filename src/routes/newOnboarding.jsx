
import React, { Suspense, useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
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
  const auth = useSelector((state) => state.home.auth);
  const [vidLoad, setVidLoad] = useState(auth);
  const dark = localStorage.getItem("dark");

  return (
    <ThemeProvider theme={theme}>
      <NewOnboardModal
        open
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          style={{
            // backgroundColor: 'black',            // You can add more specific margin values if needed
          }}>


          <OnboardingBillings />

        </Box>

      </NewOnboardModal>
    </ThemeProvider>
  );
};

export default NewOnboard;
