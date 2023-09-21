import React,{useState, useEffect} from "react";
import SignInForm from "../components/forms/signIn";
import { useNavigate } from "react-router-dom";
import useWidth from "../hooks/useWidth";

import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slice/userApiSlice';
import { setCredentials } from '../slice/authSlice';
import toast from 'react-hot-toast';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

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


  const renderButton = ({ onClick }) => null;


    const loginWithGoogle = useGoogleLogin({
        onSuccess: async respose => {
            // try {
            //     axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            //         headers: {
            //             "Authorization": `Bearer ${respose.access_token}`
            //         }
            //     }).then(async (res) => {
            //         const datas = res?.data;
            //         console.log(datas)

            //         const userDataObj = {
            //             name: datas.given_name,
            //             email_address: datas.email,
            //             google_id: String(datas.sub.toLowerCase()),
            //             google_token: respose.access_token,
            //             device_token: "token",
            //             device_type: 1
            //         };


            //         fetch(`https://menehariya-api.netscapelabs.com/v1/api/login-with-google`, {
            //             ...fetchConfig,
            //             body: JSON.stringify(userDataObj)
            //         })
            //             .then(handleFetchErrors)
            //             .then((res) => {
            //                 console.log(res)
            //                 toast.dismiss();
            //                 updateModalVisibilityForLogin(false)

            //                 if (Number(res?.status) === 201 || Number(res?.status) === 200) {
            //                     const userData = res?.data;
            //                     const Obj = {
            //                         name: userData.name,
            //                         email_address: userData?.email_address || ``,
            //                         phone_number: userData?.phone_number || ``,
            //                         source: userData.source,
            //                         picture: userData.picture || ``
            //                     }
            //                     localStorage.setItem(`user`, JSON.stringify(Obj));
            //                     localStorage.setItem(`token`, res?.token);

            //                 } else if (Number(res?.status) === 400 || Number(res?.status) === 403) {

            //                     toast.error(res?.message);
            //                 }



            //             })
            //             .catch((err) => {
            //                 console.log(err)
            //             });



            //         // Extract the user's email and name from the response data




            //     })





            //     // console.log(res.data)
            // } catch (err) {
            //     console.log(err)

            // }

        }
    });

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

      
          <button style={{display: "none"}} onClick={loginWithGoogle} >
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1148_88683)">
                                <path d="M24.2682 12.2765C24.2682 11.4608 24.2021 10.6406 24.061 9.83813H12.7422V14.4591H19.2239C18.955 15.9495 18.0907 17.2679 16.8252 18.1056V21.104H20.6922C22.963 19.014 24.2682 15.9274 24.2682 12.2765Z" fill="#4285F4" />
                                <path d="M12.7391 24.0008C15.9756 24.0008 18.705 22.9382 20.6936 21.1039L16.8266 18.1055C15.7507 18.8375 14.3618 19.252 12.7435 19.252C9.61291 19.252 6.95849 17.1399 6.00607 14.3003H2.01562V17.3912C4.05274 21.4434 8.20192 24.0008 12.7391 24.0008Z" fill="#34A853" />
                                <path d="M6.00473 14.3002C5.50206 12.8099 5.50206 11.196 6.00473 9.70569V6.61475H2.01869C0.316687 10.0055 0.316687 14.0004 2.01869 17.3912L6.00473 14.3002Z" fill="#FBBC04" />
                                <path d="M12.7391 4.74966C14.4499 4.7232 16.1034 5.36697 17.3425 6.54867L20.7685 3.12262C18.5991 1.0855 15.7198 -0.034466 12.7391 0.000808666C8.20192 0.000808666 4.05274 2.55822 2.01562 6.61481L6.00166 9.70575C6.94967 6.86173 9.6085 4.74966 12.7391 4.74966Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1148_88683">
                                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>

                        Sign in with Google
                    </button>
                    <GoogleLogin
                        onSuccess={credentialResponse => {

                            var decoded = jwt_decode(credentialResponse.credential);

                        }}
                        render={renderButton}

                        onError={() => {
                            console.log('Login Failed');
                        }} />



          <p className="text-center text-[#b2b3b6] text-[13px] font-medium mt-[10px]">
            Don’t have an account? jshdfsgj{" "}
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
