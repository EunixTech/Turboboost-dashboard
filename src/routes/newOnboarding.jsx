
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
  '& .MuiBox-root': {
    position: 'absolute',
    width: "70%",
    height: '90%',
    backgroundColor: 'black',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    backgroundColor: 'black',
    borderRadius: '10px'
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
            backgroundColor: 'black', 
            marginTop: '70px', 
            marginLeft: '70px'
                      // You can add more specific margin values if needed
          }}>


          <OnboardingBillings />

        </Box>

      </NewOnboardModal>
    </ThemeProvider>
  );
};

export default NewOnboard;
