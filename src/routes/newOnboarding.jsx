
import React, { Suspense, useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import { styled, ThemeProvider } from '@mui/system';
import theme from "../components/Theme"; // Adjust the path accordingly
import { useSelector } from 'react-redux';
const OnboardingBillings = React.lazy(() => import("../views/OnboardingBillings.jsx"));

const NewOnboardModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiBox-root': {
    position: 'absolute',
    width: "1162px",
    height: '100%',
    backgroundColor: 'black',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    backgroundColor: 'black'
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
            backgroundColor: 'black',            // You can add more specific margin values if needed
          }}>
        <>
      {!vidLoad ? (
        <div
          style={{
            backgroundColor: dark ? "#090917" : "#fff",
          }}
          className="w-[100%] h-[100vh] bg-transparent flex items-center justify-center"
        >
          <video
            autoPlay
            className={"w-[300px]"}
            muted
            onEnded={() => {
              setVidLoad(true);
            }}
            src={dark ? "/load-b.mp4" : "/load-w.mp4"}
          ></video>
        </div>
      ) : (
        <Suspense
          fallback={
            <div
              style={{
                backgroundColor: dark ? "#090917" : "#fff",
              }}
              className="w-[100%] h-[100vh] bg-transparent flex items-center justify-center"
            >
              <video
                autoPlay
                className={"w-[300px]"}
                muted
                onEnded={() => {
                  setVidLoad(true);
                }}
                src={dark ? "/load-b.mp4" : "/load-w.mp4"}
              ></video>
            </div>
          }
        >
          <OnboardingBillings />
        </Suspense>
      )}
    </>
        </Box>
      </NewOnboardModal>
    </ThemeProvider>
  );
};

export default NewOnboard;
