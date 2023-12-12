// ChangeEmail.js
import React, { useState } from "react";
import { Modal, Typography, Button, TextField } from "@mui/material";
import SaveButton from "../button/SaveButton";

const ChangeEmail = ({ isOpen, onClose, wrapperClasses }) => {
  const [newEmail, setNewEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setEnteredOtp(event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      // Call the API to send OTP
      const response = await fetch("http://localhost:8000/v1/user/sending-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newEmail,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send OTP");
      }

      // Update state or handle success accordingly
      setOtpSent(true);
    } catch (error) {
      console.error("Error sending OTP:", error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Call the API to verify OTP
      const response = await fetch("http://localhost:8000/v1/user/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newEmail,
          otp: enteredOtp,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to verify OTP");
      }

      // Update state or handle success accordingly
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
          Enter your new email address
        </Typography>
        <form>
          <TextField
            type="email"
            value={newEmail}
            onChange={handleEmailChange}
            fullWidth
            required
            InputProps={{
              style: { backgroundColor: '#fff', color: '#2fe49c', border: '2px solid #2fe49c', outline: 'none' },
            }}
          />
          {!otpSent ? (
            <SaveButton btnText="Send OTP" onClick={handleSendOtp} />
          ) : (
            <>
              <TextField
                type="text"
                value={enteredOtp}
                onChange={handleOtpChange}
                fullWidth
                required
                InputProps={{
                  style: { backgroundColor: '#fff', color: '#2fe49c', border: '2px solid #2fe49c', outline: 'none' },
                }}
              />
              <SaveButton btnText="Submit OTP" onClick={handleSubmit} />
            </>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default ChangeEmail;
