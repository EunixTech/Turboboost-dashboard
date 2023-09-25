// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Input = ({ w, label, mt, value, setValue, type }) => {
//   return (
//     <div
//       style={{
//         width: w,
//         marginTop: mt,
//       }}
//       className=""
//     >
//       <p className="text-[#0A0A18] font-medium text-[13px] mb-[4px]">
//         {label} <span className="text-[#FF0703]">*</span>
//       </p>
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => { setValue(e.target.value);}}
//         className="border-[#e1e1e1] px-[5px] outline-none text-[12px] font-medium border-[1px] w-[100%] h-[35px] rounded-[3px]"
//       />
//     </div>
//   );
// };

// const ForgotPasswordForm = () => {

//   const [email, setEmail] = useState("");
//   const [isValid, setIsValid] = useState(true);
//   const validateEmail = (input) => {
//     // Regular expression for basic email validation
//     const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//     return emailPattern.test(input);
//   };
//   const handleEmailChange = (event) => {
//     const inputEmail = event.target.value;
//     setEmail(inputEmail);
//     setIsValid(validateEmail(inputEmail));
//   };

//   return (
//     <>
//       <div className="w-[100%] mt-[20px] mb-[13px]">
//         <Input
//           w={"100%"}
//           value={email}
//           setValue={(e) => {
//             setEmail(e);
//           }}
//           mt={"10px"}
//           label={"Email"}
//           type="text"
//           onChange={(e) =>  }
//         />
//          {isValid ? (
//         ''
//       ) : (
//         <p style={{ color: 'red' }}>Invalid email. Please enter a valid email address.</p>
//       )}
//       </div>
//       <div className="h-[38px] mb-[20px] text-[#000] w-[100%]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm"
//       >
//         <span className="translate-y-[1.5px] ">Next</span>
//       </div>
//     </>
//   );
// };

// export default ForgotPasswordForm;
import React, { useState } from "react";

const Input = ({ w, label, mt, value, onChange, type }) => {
  return (
    <div style={{ width: w, marginTop: mt }} className="">
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

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
    setIsEmpty(inputEmail.trim() === ""); // Check if email is empty
  };

  const handleNextClick = () => {
    if (isValid && !isEmpty) {
      // Perform any actions you want here, e.g., display a success message
      alert("Email is valid and not empty. Proceed with your logic.");
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
            <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              Email is required.
            </p>
          )}
          {!isValid && !isEmpty && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              Invalid email format. Please enter a valid email address.
            </p>
          )}
        </div>
        <div
          className={`h-[38px] mb-[20px] text-[#000] w-[100%] font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] ${
            isValid && !isEmpty ? 'bg-[#38F8AC]' : 'bg-gray-400 cursor-not-allowed'
          } rounded-sm`}
          onClick={handleNextClick}
        >
          <span className="translate-y-[1.5px] ">Submit</span>
        </div>
        <div className="w-full">
          <p className="text-red-600 text-lg font-semibold">
            We couldn't find an account associated with this email address.
          </p>
        </div>
        <div className="w-full">
          <p className="text-green-600 text-lg font-semibold">
            An email has been successfully sent to your provided email address.
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
