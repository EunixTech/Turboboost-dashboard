import React, { useState } from "react";
import { Modal, Typography, Button, TextField } from "@mui/material";
import SaveButton from "../button/SaveButton";
import { MuiOtpInput } from "mui-one-time-password-input";
import { toast } from "react-toastify";

const ChangeEmail = ({ isOpen, onClose, wrapperClasses }) => {
  const [otpSent, setOtpSent] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const [otp, setOtp] = useState("");

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const handleSendOtp = async () => {
    try {
      console.log("Email address to be updated:", enteredValue);

      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        "http://localhost:8000/v1/user/sending-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email_address: enteredValue,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send OTP");
      }

      setOtpSent(true);
      // setEnteredValue(""); // Reset the input box
    } catch (error) {
      console.error("Error sending OTP:", error.message);
      toast.error("Failed to send OTP");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Email address to be updated:", enteredValue);
      const token = localStorage.getItem("accessToken");
      if (otp.length !== 4) {
        toast.error("Please enter a valid 4-digit OTP");
        return;
      }

      if (!otp) {
        toast.error("Please enter the OTP");
        return;
      }
      const updateResponse = await fetch(
        "http://localhost:8000/v1/user/update-emailaddress",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email_address: enteredValue, 
            OTPCode: otp,
          }),
        }
      );

      if (!updateResponse.ok) {
        const errorData = await updateResponse.json();
        throw new Error(errorData.message || "Failed to update email address");
      }

      console.log("Email address updated successfully:", enteredValue);

      onClose();
      toast.success("Email address updated successfully");
    } catch (error) {
      console.error("Error updating email address:", error.message);
      toast.error("Failed to update email address");
    }
  };

  const handleClose = () => {
    onClose();
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
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleClose} variant="outlined" color="secondary">
              X
            </Button>
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
              <button className="variant-btn" onClick={handleSendOtp}>
                Send OTP
              </button>
            ) : (
              <button className="variant-btn" onClick={handleSubmit}>
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
