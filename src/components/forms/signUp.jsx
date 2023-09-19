import React from "react";

const Input = ({ w, label,mt }) => {
  return (
    <div
      style={{
        width: w,
        marginTop:mt
      }}
      className=""
    >
      <p className="text-[#0A0A18] font-medium text-[13px] mb-[4px]">
        {label} <span className="text-[#FF0703]">*</span>
      </p>
      <input
        type="text"
        className="border-[#e1e1e1] px-[5px] outline-none text-[12px] font-medium border-[1px] w-[100%] h-[35px] rounded-[3px]"
      />
    </div>
  );
};

const SignInForm = () => {
  return (
    <div className="w-[100%] mt-[20px] mb-[13px]">
      <div className="flex items-center justify-between">
        <Input w={"48%"} label={"First Name"} />
        <Input w={"48%"} label={"Last Name"} />
      </div>
      <Input w={"100%"} mt={"10px"} label={"Business Name"} />
      <Input w={"100%"} mt={"10px"}label={"Email"} />
      <Input w={"100%"} mt={"10px"} label={"Password"} />
    </div>
  );
};

export default SignInForm;
