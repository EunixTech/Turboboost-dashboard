import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { isValidEmailAddress, isValidPassword } from "../../utils/verification";
import { setCredentials } from "../../slice/authSlice";

const Input = ({ w, label, mt, value, onChangeHandler, type, name }) => {
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
        name={name}
        value={value}
        onChange={onChangeHandler}
        className="border-[#e1e1e1] px-[5px] outline-none text-[12px] font-medium border-[1px] w-[100%] h-[35px] rounded-[3px]"
      />
    </div>
  );
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, updateFormData] = useState({
    email_address: "",
    password: "",
    remember_me: false,
  });

  const { email_address, password } = formData;

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
      const missingData = [];
      const invalidData = [];

      if (!email_address) missingData.push("email address");
      else if (email_address && !isValidEmailAddress(email_address))
        invalidData.push("email_address");

      if (!password) missingData.push("password");

      const data = {
        email_address,
        password,
      };

      if (missingData.length || invalidData.length) {
        if (missingData.length)
          toast.error(`Missing: ${missingData.join(", ")}`);
        if (invalidData.length)
          toast.error(`Invalid: ${invalidData.join(", ")}`);
        return;
      }

      const response = await fetch( "http://localhost:8000/v1/user/login-with-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.status === 200) {
        const responseData = await response.json();
        dispatch(setCredentials(responseData));
        formData?.remember_me &&
          localStorage.setItem("rememberMe", JSON.stringify(data));
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.log(err);
      toast.error(
        err?.data?.message || err.message || "An error occurred during login."
      );
    }
  };

  useEffect(() => {
    const rememberMe = JSON.parse(localStorage.getItem("rememberMe"));

    updateFormData({
      email_address: rememberMe?.email_address || "",
      password: rememberMe?.password || "",
    });
  }, []);

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="w-[100%] mt-[20px] mb-[13px]">
          <Input
            w={"100%"}
            value={email_address}
            onChangeHandler={onChangeHandler}
            mt={"10px"}
            label={"Email"}
            name="email_address"
            type="text"
          />
          <Input
            w={"100%"}
            mt={"10px"}
            name="password"
            value={password}
            onChangeHandler={onChangeHandler}
            type="password"
            label={"Password"}
          />
        </div>
        <div className="w-[100%] flex justify-between">
          <div className="flex">
            <input
              type="checkbox"
              className="mr-[5px]"
              name="remember_me"
              onChange={onChangeHandler}
            />
            <p className="text-[13px] font-medium text-[#000] translate-y-[1px]">
              Remember me
            </p>
          </div>
          <a href="/auth/forgot-password">
            <p className="text-[13px] font-medium text-[#06F] text-[#06F] cursor-pointer translate-y-[1px]">
              Forgot password
            </p>
          </a>
        </div>
        <button className="h-[38px] mb-[20px] text-[#000] w-[100%]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm">
          <span className="translate-y-[1.5px]">Sign in</span>
        </button>
      </form>
    </>
  );
};

export default SignInForm;
