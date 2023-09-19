import React from "react";
import SignInForm from "../components/forms/signUp";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";

const SignInPage = () => {
  const router = useNavigate();

  const w = useWidth();
  const dark = useSelector(state=>state.home.dark);

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className=" laptop:w-[50%] mobile:w-[100%] mobile:overflow-y-auto px-[100px] h-[100vh] px-[7%] flex items-center laptop:justify-center">
        <div className="w-[100%] ">
          <img src="/logo-b.png" className="w-[150px]" alt="" />
          <h1 className="text-[34px] mt-[10px] font-bold">Create an account</h1>
          <p className="text-[#969AA5] inter text-[14px] mb-[10px]">
            Start your 7-day free trial, no credit card required.
          </p>
          <SignInForm />
          <div className="flex ">
            <input type="checkbox" className="mr-[5px]" name="" id="" />
            <p className="text-[13px] font-medium translate-y-[1px] text-[#969AA5]">
              I agree to the TurboBoost{" "}
              <span className="text-[#18113C] cursor-pointer">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="text-[#18113C] cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
          <div className="h-[38px] text-[#000] w-[100%]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#38F8AC] rounded-sm">
            <span className="translate-y-[1.5px]"> Create Account</span>
          </div>
          <div className=" flex items-center justify-center h-[38px] text-[#000] w-[100%] border-[1px] border-[#e1e1e1]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#fff] rounded-sm">
            <img
              src="/graphic/login/google.svg"
              className="w-[14px] translate-y-[1px] mr-[5px]"
              alt=""
            />{" "}
            <span className="translate-y-[1.5px]">Continue with Google</span>
          </div>
          <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
            Already have an account?{" "}
            <span
              onClick={() => {
                router("/auth/signIn");
              }}
              className="text-[#06F] font-bold cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
      {w > 1000 && (
        <div className=" w-[50%] h-[100vh] relative">
          <img
            src="/graphic/login/bg.png"
            className="w-[100%] h-[100vh] object-cover absolute z-0"
            alt=""
          />
          <div className="w-[100%] h-[100vh] flex items-center justify-center absolute z-10">
            <img
              src="/graphic/login/ellipse.png"
              className="w-[100%] h-[100vh] object-cover"
              alt=""
            />
          </div>
          <div className="w-[100%] h-[100vh]  flex items-end   justify-end opacity-20 absolute z-20">
            <img src="/graphic/login/Vector.png" className="w-[95%] " alt="" />
          </div>
          <div className="overflow-hidden w-[100%] h-[100vh]  flex items-center flex-col  justify-center  absolute z-30">
            <h1 className="inter text-white text-[30px] text-center px-[100px] leading-[38px] font-medium ">
              Increasing your website speed has never been easier.
            </h1>
            <div className="w-[600px] mt-[10px] flex items-center justify-center">
              <div className="mr-[17px] h-[30px] flex items-center">
                <img
                  src="/graphic/login/tick.png"
                  className="w-[10px]  h-[10px] object-contain   mr-[8px]"
                  alt=""
                />
                <p className="text-[13px] inter font-medium text-white">
                  7-day free trial
                </p>
              </div>
              <div className="mr-[17px] h-[30px] flex items-center">
                <img
                  src="/graphic/login/tick.png"
                  className="w-[10px] h-[10px] object-contain  mr-[8px]"
                  alt=""
                />
                <p className="text-[13px] font-medium text-white">
                  One-click setup
                </p>
              </div>
              <div className="mr-[17px] h-[30px] flex items-center">
                <img
                  src="/graphic/login/tick.png"
                  className="w-[10px] h-[10px] object-contain mr-[8px]"
                  alt=""
                />
                <p className="text-[13px] font-medium text-white">
                  No fixed contracts
                </p>
              </div>
            </div>
     
            <div className=" relative laptop:w-[370px] scale-110 desktop:w-[65%] mt-[40px] h-[300px]">
              <img className="" src="/graphic/login/g1.png" alt="" />
              <img
                src="/graphic/login/g2.png"
                className="w-[350px] translate-x-[-70px] translate-y-[120px] absolute bottom-0 left-0"
                alt=""
              />
              <img
                src="/graphic/login/g3.png"
                className="w-[250px]  absolute top-[100px] right-0 translate-x-[50px] "
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInPage;

// style={{
//   color: dark ? "#fff" : "#000",
//   borderColor: dark ? "#fff" : "#000",
//   backgroundColor: dark ? "#111317" : "#fff",
//   borderColor: dark ? "#1F2329" : "#ebebeb",
//   color: dark ? "#ffffff74" : "#0a0a187e",
// }}