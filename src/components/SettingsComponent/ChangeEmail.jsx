import React, { useState } from "react";
import { Modal, Typography, TextField } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { isValidEmailAddress } from "../../utils/verification";
import { PostAxiosConfig } from "../../utils/axiosConfig.js";
import { style } from "d3";
const ChangeEmail = ({ isOpen, onClose, fetchProfileData }) => {

  const [otpSent, setOtpSent] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const [otp, setOtp] = useState("");
  const dark = useSelector((state) => state.home.dark);

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      toast.dismiss();

      if (!enteredValue) return toast.error("Please provide email address");
      else if (enteredValue && !isValidEmailAddress(enteredValue)) return toast.error("Please provide valid email address");

      const res = await PostAxiosConfig(`user/sending-otp`,{email_address: enteredValue})
         
      const resJSON = await res.data;

      if (resJSON?.status === 200) {
        setOtpSent(true);

        return toast.success(resJSON.message);
        
      }else {
        return toast.success(resJSON.message);
      }
      
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
    }

  };

  const handleSubmit = async (event) => {
  
    try {

      event.preventDefault();
      toast.dismiss();

      if (!otp) return toast.error("Please enter OTP");
      else if (otp && otp.length !== 4) return toast.error("Please enter a valid 4-digit OTP");

      if (!enteredValue) return toast.error("Please provide email address");
      else if (enteredValue && !isValidEmailAddress(enteredValue)) return toast.error("Please provide valid email address");



      const res = await PostAxiosConfig(`user/update-emailaddress`,{
        email_address: enteredValue,
        OTPCode: otp,
      })
         
      const resJSON = await res.data;

      if (resJSON?.status === 200) {
        onClose();
        setOtp("")
        setOtpSent(false);
        fetchProfileData();
        return toast.success(resJSON.message);
        
      }else {
        return toast.success(resJSON.message);
      }
      
    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');
      }
    }

  };

  const handleClose = () => {
    onClose();
    setOtp("")
    setOtpSent(false);
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 380, // Adjusted width to accommodate the margin
            // margin: "0 10px", // 10px margin from left and right
            bgcolor: "#000",
            border: "2px solid #2fe49c",
            borderRadius: "5px",
            boxShadow: 24,
            p: 4,
            backgroundColor: dark ? "#111317" : "#fff",
          }}
       
          className="modal-style"
        >
          <div className="modal-close-btn">
            <p onClick={handleClose} variant="outlined" color="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2fe49c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </p>
          </div>
          {/* <Typography
            variant="h6"
            component="h2"
            className="custom-class"
       
            style={{ margin: "5px", color: dark ? "#fff" : "#000", fontSize: "1rem"}}
          >
            {!otpSent ? "Enter your new email address" : "Enter the OTP"}
          </Typography> */}
            <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[15px] mb-[5px] font-bold tracking-wide "
              >
                            {!otpSent ? "Enter your new email address" : "Enter the OTP"}
              </h1>
          <form>
            {!otpSent ? (
              <TextField
                type="email"
                value={enteredValue}
                onChange={handleInputChange}
                fullWidth
                required
                InputProps={{
                  style: {
                    height:"40px",
                    border: "2px solid #2fe49c",
                    outline: "none",
                    color: dark ? "#fff" : "#000",
                  },
                  className: "custom-textfield" // adding class
                }}
              />
            ) : (
              <MuiOtpInput
                value={otp}
                onChange={(value) => setOtp(value)}
                autoFocus
                numInputs={6} // Specify the number of OTP digits
                inputStyle={{
                  border: dark ? "2px solid #fff" : "2px solid #2fe49c",
                  borderRadius: "5px",
                  outline: dark ? "2px solid #fff" : "2px solid #2fe49c",
                  marginRight: "5px",
                  fontSize:"1.2rem",
                  color: dark ? "red" : "red",
                }}
                
                // className="custom-textfield" // adding class
              />
            )}
            {!otpSent ? (
              <button 
               type="button" 
                className="variant-btn" 
                onClick={handleSendOtp}
                style={{ width: "100%" }}
              >
                Send OTP
              </button>
            ) : (
              <button  type="button"  className="variant-btn"  style={{ width: "100%" }} onClick={handleSubmit}>
                Submit OTP
              </button>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ChangeEmail;
