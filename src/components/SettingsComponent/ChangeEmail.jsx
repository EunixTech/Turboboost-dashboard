import React, { useState } from "react";
import { Modal, Typography, Button, TextField } from "@mui/material";
import SaveButton from "../button/SaveButton";
import { MuiOtpInput } from "mui-one-time-password-input";
import { toast } from "react-toastify";
import standardFetchHandlers from '../../utils/standardFetchHandlers';
import handleFetchErrors from '../../utils/handleFetchErrors';
import PhoneInput from "react-phone-number-input";
import getFetchConfig from "../../utils/getFetchConfig";
import appURLs from "../../appURL";
import { isValidEmailAddress } from "../../utils/verification";
const ChangeEmail = ({ isOpen, onClose, wrapperClasses }) => {
  const fetchConfig = getFetchConfig(),
    appURL = appURLs();

  const [otpSent, setOtpSent] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const [otp, setOtp] = useState("");

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      toast.dismiss();

      if (!enteredValue) return toast.error("Please provide email address");
      else if (enteredValue && !isValidEmailAddress(enteredValue)) return toast.error("Please provide valid email address");

      fetch(`${appURL}/user/sending-otp`, {
        ...fetchConfig,
        method: "POST",
        body: JSON.stringify({
          email_address: enteredValue
        })
      })
        .then(handleFetchErrors)
        .then((resJson) => {
          if (resJson.status === 200) {
            setOtpSent(true);
            // setEnteredValue(""); // Reset the input box
            return toast.success(resJson?.message);
          }
          else return toast.error(resJson?.message);

        })
        .catch((err) => {
          return toast.error("Something went wrong");
        })

    } catch (error) {
      return toast.error("Something went wrong");
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

      fetch(`${appURL}/user/update-emailaddress`, {
        ...fetchConfig,
        method: "POST",
        body: JSON.stringify({
          email_address: enteredValue,
          OTPCode: otp,
        })
      })
        .then(handleFetchErrors)
        .then((resJson) => {
          if (resJson.status === 200) {
            toast.success(resJson?.message);
            onClose();
            setOtp("")
            setOtpSent(false);
            return
          }
          else return toast.error(resJson?.message);

        })
        .catch((err) => {
          return toast.error("Something went wrong");
        })


      // console.log("Email address to be updated:", enteredValue);
      // const token = localStorage.getItem("accessToken");
      // if (otp.length !== 4) {
      //   toast.error("Please enter a valid 4-digit OTP");
      //   return;
      // }

      // if (!otp) {
      //   toast.error("Please enter the OTP");
      //   return;
      // }
      // const updateResponse = await fetch(
      //   "http://localhost:8000/v1/user/update-emailaddress",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`,
      //     },
      //     body: JSON.stringify({
      //       email_address: enteredValue,
      //       OTPCode: otp,
      //     }),
      //   }
      // );

      // if (!updateResponse.ok) {
      //   const errorData = await updateResponse.json();
      //   throw new Error(errorData.message || "Failed to update email address");
      // }

      // console.log("Email address updated successfully:", enteredValue);

      // onClose();
      // toast.success("Email address updated successfully");
    } catch (error) {
      console.error("Error updating email address:", error.message);
      toast.error("Failed to update email address");
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
          }}
          className="modal-style"
        >
          <div className="modal-close-btn">
            <p onClick={handleClose} variant="outlined" color="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2fe49c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </p>
          </div>
          <Typography
            variant="h6"
            component="h2"
            style={{ color: "#fff", margin: "5px" }}
          >
            {!otpSent ? "Enter your new email address" : "Enter the OTP"}
          </Typography>
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
                    color: "#fff",
                    border: "2px solid #2fe49c",
                    outline: "none",
                  },
                }}
              />
            ) : (
              <MuiOtpInput
                value={otp}
                onChange={(value) => setOtp(value)}
                autoFocus
                numInputs={6} // Specify the number of OTP digits
                inputStyle={{
                  backgroundColor: "#2fe49c",
                  color: "#fff",
                  border: "2px solid #2fe49c",
                  borderRadius: "5px",
                  outline: "none",
                  marginRight: "5px",
                }}
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
