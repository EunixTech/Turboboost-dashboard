import React, { useState, useEffect } from "react";
import { isTruthyString, isValidEmailAddress, isValidPassword } from "../../utils/verification";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

const SignUpForm = () => {

  const navigate = useNavigate();

  const [formData, updateFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    bussiness_name: "",
    password: "",
  });


  const { first_name, last_name, email_address, bussiness_name, password } = formData;

  const onChangeHandler = (e) => {
    const inputName = e.target.name,
      inputValue = e.target.value;

    updateFormData((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const missingData = [],
        invalidData = [];

        if(!isTruthyString(first_name)) missingData.push(`first name`);
        if(!isTruthyString(last_name)) missingData.push(`last name`);
        if(!isTruthyString(bussiness_name)) missingData.push(`bussiness name`);

      if (!email_address) missingData.push(`email address`);
      else if (email_address && !isValidEmailAddress(email_address))invalidData.push(`email_address`);

      if (!password) missingData.push(`password`);
      // else if (password && !isValidPassword(password)) invalidData.push(`password should include at least one upper case, one lower case,one digit & special character`);

      const data = {
        first_name,
        last_name,
        email_address,
        bussiness_name,
        password,
      };
      // Show errors if needed
      if (missingData.length || invalidData.length) {
        if (missingData.length)
          toast.error(`Missing:- ${missingData.join(`, `)}`);
        if (invalidData.length)
          toast.error(`Invalid:- ${invalidData.join(`, `)}`);

        return;
      }

      // const res = await login(data).unwrap();
      // dispatch(setCredentials({ ...res }));

      formData?.remember_me &&
        localStorage.setItem("rememberMe", JSON.stringify(data));

      navigate("/");
    } catch (err) {
      console.log(err);
      return toast.error(err?.data?.message || err.error);
    }
  };

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
