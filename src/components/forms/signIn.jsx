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
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="border-[#e1e1e1] px-[5px] outline-none text-[12px] font-medium border-[1px] w-[100%] h-[35px] rounded-[3px]"
      />
    </div>
  );
};

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [passwprd, setPassword] = useState("");

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
        <Input
          w={"100%"}
          mt={"10px"}
          value={passwprd}
          setValue={(e) => {
            setPassword(e);
          }}
          type="password"
          label={"Password"}
        />
      </div>
      <div className="w-[100%] flex justify-between">
        <div className="flex ">
          <input type="checkbox" className="mr-[5px]" name="" id="" />
          <p className="text-[13px] font-medium text-[#000] translate-y-[1px] ">
            Remember me
          </p>
        </div>
        <p className="text-[13px] font-medium text-[#06F] text-[#06F] cursor-pointer translate-y-[1px] ">
          Forgot password
        </p>
      </div>
      <div
        onClick={() => {
          if (email === "turbo123@gmail.com" || passwprd === "allpha123") {
            localStorage.setItem("loggedIn", "true");
            navigate("/dashboard");
          }
        }}
        className="h-[38px] text-[#000] w-[100%]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm"
      >
        <span className="translate-y-[1.5px] ">Sign in</span>
      </div>
    </>
  );
};

export default SignInForm;
