import React from "react";

const Input = ({ onChangeHandler, value, type,name, w, label,mt }) => {
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
        onChange={onChangeHandler}
        value={value}
        name = {name}
        type={type}
        className="border-[#e1e1e1] px-[5px] outline-none text-[12px] font-medium border-[1px] w-[100%] h-[35px] rounded-[3px]"
      />
    </div>
  );
};

const SignUpForm = ({submitHandler = () => {}, formData, onChangeHandler = () => {}}) => {
  return (
    <div className="w-[100%] mt-[20px] mb-[13px]">
        <form onSubmit={submitHandler}>
        <div className="flex items-center justify-between">
        <Input onChangeHandler = {onChangeHandler} value= {formData.first_name} name="first_name"  w={"48%"} label={"First Name"} />
        <Input onChangeHandler = {onChangeHandler} value= {formData.last_name} name="last_name"   w={"48%"} label={"Last Name"} />
      </div>
      <Input onChangeHandler = {onChangeHandler} value= {formData.bussiness_name} name="bussiness_name"  w={"100%"} mt={"10px"} label={"Business Name"} />
      <Input onChangeHandler = {onChangeHandler} value= {formData.email_address} name="email_address"  w={"100%"} mt={"10px"}label={"Email"} />
      <Input onChangeHandler = {onChangeHandler} value= {formData.password} name="password"  w={"100%"} mt={"10px"} label={"Password"} />
        </form>
    </div>
  );
};

export default SignUpForm;
