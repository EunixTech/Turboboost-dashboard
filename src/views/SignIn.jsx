import React,{useState, useEffect} from "react";
import SignInForm from "../components/forms/signIn";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";


import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slice/userApiSlice';
import { setCredentials } from '../slice/authSlice';
import toast from 'react-hot-toast';
import GoogleLoginButton from "../components/button/GoogleLogin";
import SideBanner from "../components/SideBanner";

const SignInPage = () => {

  const router = useNavigate();
  const w = useWidth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);


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
          <GoogleLoginButton />
 
          <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
            Don’t have an account? {" "}
            <span
              onClick={() => {router("/auth/signUp");}}
              className="text-[#06F] font-bold cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
      {w > 1000 && (
        <SideBanner />
      )}
    </div>
  );
};

export default SignInPage;
