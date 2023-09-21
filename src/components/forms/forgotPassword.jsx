import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = ({ w, label, mt, value, setValue, type }) => {
  return (
    <div
      style={{
        width: w,
        marginTop: mt,
      }}
      className=""
    >
      <p className="text-[#0A0A18] font-medium text-[13px] mb-[4px]">
        {label} <span className="text-[#FF0703]">*</span>
      </p>
      <input
        type={type}
        value={value}
        onChange={(e) => { setValue(e.target.value);}}
        className="border-[#e1e1e1] px-[5px] outline-none text-[12px] font-medium border-[1px] w-[100%] h-[35px] rounded-[3px]"
      />
    </div>
  );
};

const ForgotPasswordForm = () => {

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <div className="w-[100%] mt-[20px] mb-[13px]">
        <Input
          w={"100%"}
          value={email}
          setValue={(e) => {
            setEmail(e);
          }}
          mt={"10px"}
          label={"Email"}
          type="text"
        />
        
      </div>
      <div className="h-[38px] mb-[20px] text-[#000] w-[100%]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm"
      >
        <span className="translate-y-[1.5px] ">Next</span>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
