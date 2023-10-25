import React, { useEffect, useState } from "react";
import axios from "axios";

const Input = ({ w, label, mt, value, onChange, type }) => {
  return (
    <div style={{ width: w, marginTop: mt }}>
      <p className="text-[#0A0A18] font-medium text-[13px] mb-[4px]">
        {label} <span className="text-[#FF0703]">*</span>
      </p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border-[#e1e1e1] px-[5px] outline-none text-[12px] font-medium border-[1px] w-[100%] h-[35px] rounded-[3px]"
      />
    </div>
  );
};

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true); // Start as true to not show error initially
  const [isEmpty, setIsEmpty] = useState(false); // Track if email is empty
  const [emailExists, setEmailExists] = useState(null);
  const mailSlurpApiKey =
    "f1db0b18c4fd96699646645244588e5fb55508d1f29c18edcf073e746dac5f5e";
  let mailSlurpId = "7055f40e-feec-4181-8086-c6f6e8ff7940";

  async function createInbox() {
    // call MailSlurp createInbox endpoint
    return await axios
      .post(`https://api.mailslurp.com/createInbox?apiKey=${mailSlurpApiKey}`)
      .then((res) => {
        mailSlurpId = res.data.id; // get mailSlurp Id needed for sending mail
      });
  }

  useEffect(() => {
    if (!mailSlurpId) {
      createInbox(); // Run on initialization
    }
  }, []);

  const sendEmail = async () => {
    try {
      const response = await axios.post(
        `https://api.mailslurp.com/sendEmail?apiKey=${mailSlurpApiKey}`,
        {
          senderId: mailSlurpId,
          to: email,
          subject: "Hello from MailSlurp",
          body: "This is a test email sent from MailSlurp.",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Email sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
    setIsEmpty(inputEmail.trim() === ""); // Check if email is empty
  };

  const handleNextClick = async () => {
    if (isValid && !isEmpty) {
      try {
        const response = await axios.post(
          "http://localhost:8000/v1/user/forget-password",
          { email }
        );

        // Check if the email exists and handle accordingly
        if (response.data.exists) {
          // Email exists, send the email
          sendEmail();
          setEmailExists(true);
        } else {
          // Email doesn't exist, show an error message
          setEmailExists(false);
        }
      } catch (error) {
        console.error("Error checking email:", error);
      }
    }
  };





  const validateEmail = (input) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(input);
  };

  return (
    <>
      <div>
        <div className="w-[100%] mt-[20px] mb-[13px]">
          <Input
            w={"100%"}
            value={email}
            onChange={handleEmailChange}
            mt={"10px"}
            label={"Email"}
            type="text"
          />
          {isEmpty && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
              Email is required.
            </p>
          )}
          {!isValid && !isEmpty && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
              Invalid email format. Please enter a valid email address.
            </p>
          )}
        </div>
        <div
          className={`h-[38px] mb-[20px] text-[#000] w-[100%] font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] ${
            isValid && !isEmpty
              ? "bg-[#38F8AC]"
              : "bg-gray-400 cursor-not-allowed"
          } rounded-sm`}
          onClick={handleNextClick}
        >
          <span className="translate-y-[1.5px] ">Submit</span>
        </div>
        <div className="w-full">
          {isEmpty && (
            <p className="text-red-600 text-lg font-semibold">
              Email is required.
            </p>
          )}
          {emailExists === false && (
            <p className="text-red-600 text-lg font-semibold">
              We couldn't find an account associated with this email address.
            </p>
          )}
          {emailExists === true && (
            <p className="text-green-600 text-lg font-semibold">
              An email has been successfully sent to your provided email
              address.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
