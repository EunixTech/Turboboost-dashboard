import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slice/userApiSlice";
import { setCredentials } from "../../slice/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { isValidEmailAddress, isValidPassword } from "../../utils/verification";

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

  const [login, { isLoading }] = useLoginMutation();

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
      const missingData = [],
        invalidData = [];

      if (!email_address) missingData.push(`email address`);
      else if (email_address && !isValidEmailAddress(email_address))
        invalidData.push(`email_address`);

      if (!password) missingData.push(`password`);
      // else if (password && !isValidPassword(password)) invalidData.push(`password should include at least one upper case, one lower case,one digit & special character`);

      const data = {
        email_address,
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

  useEffect(() => {
    const rememberMe = JSON.parse(localStorage.getItem(`rememberMe`));

    updateFormData({
      email_address: rememberMe?.email_address || ``,
      password: rememberMe?.password || ``,
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
          <div className="flex ">
            <input
              type="checkbox"
              className="mr-[5px]"
              name="remember_me"
              onChange={onChangeHandler}
            />
            <p className="text-[13px] font-medium text-[#000] translate-y-[1px] ">
              Remember me
            </p>
          </div>
          <p className="text-[13px] font-medium text-[#06F] text-[#06F] cursor-pointer translate-y-[1px] ">
            Forgot password
          </p>
        </div>
        <button className="h-[38px] mb-[20px] text-[#000] w-[100%]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm">
          <span className="translate-y-[1.5px] ">Sign in</span>
        </button>
      </form>
    </>
  );
};

export default SignInForm;
