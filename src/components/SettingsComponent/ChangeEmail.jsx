import React, { useState } from "react";
import { Modal, Typography, Button, TextField } from "@mui/material";
import SaveButton from "../button/SaveButton";

const ChangeEmail = ({ isOpen, onClose, wrapperClasses }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      const token = localStorage.getItem('accessToken');
  
      const response = await fetch("http://localhost:8000/v1/user/sending-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email_address: enteredValue,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send OTP");
      }
  
      setOtpSent(true);
      setEnteredValue(""); // Reset the input box
    } catch (error) {
      console.error("Error sending OTP:", error.message);
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("OTP verified successfully");
      onClose();
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: '#fff', border: '2px solid #2fe49c', borderRadius: '5px', boxShadow: 24, p: 4 }} className="modal-style">
        <Typography variant="h6" component="h2" style={{ color: '#fff', margin: '5px' }}>
          {!otpSent ? "Enter your new email address" : "Enter the OTP"}
        </Typography>
        <form>
          <TextField
            type={otpSent ? "text" : "email"}
            value={enteredValue}
            onChange={handleInputChange}
            fullWidth
            required
            InputProps={{
              style: { backgroundColor: '#fff', color: '#2fe49c', border: '2px solid #2fe49c', outline: 'none' },
            }}
          />
          {!otpSent ? (
            <Button className="variant-btn" onClick={handleSendOtp}>Send OTP</Button>
          ) : (
            // <Button btnText="Submit OTP" onClick={handleSubmit} />
            <Button className="variant-btn" onClick={handleSubmit}>Submit OTP</Button>

          )}
        </form>
      </div>
    </Modal>
  );
};

export default ChangeEmail;
