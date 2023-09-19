import React from "react";
import SignInForm from "../components/forms/signIn";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";

const SignInPage = () => {
  const router = useNavigate();

  const w = useWidth();

  const dark = useSelector(state=>state.home.dark);

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div
      
      className=" laptop:w-[50%] mobile:w-[100%]  px-[100px] h-[100vh] px-[7%] flex items-center justify-center">
        <div className="w-[100%] ">
          <img src="/logo-b.png" className="w-[150px]" alt="" />
          <h1 className="text-[34px] mt-[10px] font-bold">Sign In</h1>
          <p className="text-[#969AA5] inter text-[14px] mb-[10px]">
            Please enter your credentials below.
          </p>
          <SignInForm />

          <div className=" flex items-center justify-center h-[38px] text-[#000] w-[100%] border-[1px] border-[#e1e1e1]  font-medium cursor-pointer font-medium flex items-center justify-center px-[20px] mt-[15px] inter text-[12px] bg-[#fff] rounded-sm">
            <img
              src="/graphic/login/google.svg"
              className="w-[14px] translate-y-[1px] mr-[5px]"
              alt=""
            />{" "}
            <span className="translate-y-[1.5px]"> Sign in with Google</span>
          </div>
          <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
            Don’t have an account?{" "}
            <span
              onClick={() => {
                router("/auth/signUp");
              }}
              className="text-[#06F] font-bold cursor-pointer"
            >
              Sign up
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
            <h1 className="inter text-white text-[26px] text-center px-[100px] leading-[30px] font-medium ">
              Welcome back, here’s what’s new
            </h1>
            <div className=" relative laptop:w-[450px] desktop:w-[480px] flex flex-col mt-[40px]">
              <div className="w-[100%] mb-[15px] h-[100px] flex  bg-[#fff] rounded-[8px] px-[20px] items-center">
                <div className="bg-[#38f8ab44] w-[60px] h-[60px] shrink-0 flex rounded-[8px] items-center justify-center">
                  <img src="/graphic/login/Icon.svg" alt="" />
                </div>
                <div className="ml-[15px] flex flex-col justify-center">
                  <h1 className="text-[#000] desktop:text-[17px] laptop:text-[15px] font-bold ">
                    Preloaded data or upload your own
                  </h1>
                  <p className="text-[#969AA5] desktop:text-[12.5px] laptop:text-[11px] font-medium ">
                    Lorem ipsum dolor sit amet consectetur. Interdum ut potenti
                    odio sagittis. Rhoncus cursus nibh vitae amet placerat amet
                    .
                  </p>
                </div>
              </div>
              <div className="w-[100%] mb-[15px] h-[100px] flex  bg-[#fff] rounded-[8px] px-[20px] items-center">
                <div className="bg-[#38f8ab44] w-[60px] h-[60px] shrink-0 flex rounded-[8px] items-center justify-center">
                  <img src="/graphic/login/Icon.svg" alt="" />
                </div>
                <div className="ml-[15px] flex flex-col justify-center">
                  <h1 className="text-[#000] desktop:text-[17px] laptop:text-[15px] font-bold ">
                    Preloaded data or upload your own
                  </h1>
                  <p className="text-[#969AA5] desktop:text-[12.5px] laptop:text-[11px] font-medium ">
                    Lorem ipsum dolor sit amet consectetur. Interdum ut potenti
                    odio sagittis. Rhoncus cursus nibh vitae amet placerat amet
                    .
                  </p>
                </div>
              </div>
              <div className="w-[100%] mb-[15px] h-[100px] flex  bg-[#fff] rounded-[8px] px-[20px] items-center">
                <div className="bg-[#38f8ab44] w-[60px] h-[60px] shrink-0 flex rounded-[8px] items-center justify-center">
                  <img src="/graphic/login/Icon.svg" alt="" />
                </div>
                <div className="ml-[15px] flex flex-col justify-center">
                  <h1 className="text-[#000] desktop:text-[17px] laptop:text-[15px] font-bold ">
                    Preloaded data or upload your own
                  </h1>
                  <p className="text-[#969AA5] desktop:text-[12.5px] laptop:text-[11px] font-medium ">
                    Lorem ipsum dolor sit amet consectetur. Interdum ut potenti
                    odio sagittis. Rhoncus cursus nibh vitae amet placerat amet
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
