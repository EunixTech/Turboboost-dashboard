import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth, setDark } from "../services/home";
import HomeLayout from "../layouts/index";

const DashboardPage = React.lazy(() => import("../views/integrations.jsx"));

const Loader = () => {
  return (
    <div className="w-[100%] h-[100vh]  flex items-center justify-center top-0 left-0">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#ccc"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill={"#04c09c"}
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const Connect = ({ cancel }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100vw] left-0 h-[100vh] fixed z-50 bg-[#00000074] flex items-center justify-center mobile:px-[10px] py-[50px]">
      <div
        style={{
          backgroundColor: dark ? "#111317" : "#fff",
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="mobile:w-[100%] laptop:w-[400px] flex flex-col pt-[18px] rounded-[13px] bg-[#fff] relative border-[1px] border-[#ebebeb] "
      >
        <div className="flex px-[15px] items-center shrink-0 justify-between ">
          <h1
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[20px] font-bold "
          >
            Connect with Klaviyo
          </h1>
          <img
            onClick={() => {
              cancel();
            }}
            src="/graphic/connect-website/cross.svg"
            className="cursor-pointer w-[15px]"
            alt=""
          />
        </div>
        <h1
          style={{
            color: dark ? "#fff" : "#000",
          }}
          className="text-[16px] px-[15px] mt-[10px] font-bold tracking-wide "
        >
          Step 1
        </h1>
        <p
          style={{
            color: dark ? "#fff" : "#000",
          }}
          className="text-[14px] px-[15px] mt-[0px] "
        >
          Go to{" "}
          <span className="text-[#06F] hover:underline cursor-pointer">
            API keys settings page
          </span>{" "}
          {">"} Generate a new API key
        </p>
        <h1
          style={{
            color: dark ? "#fff" : "#000",
          }}
          className="text-[16px] px-[15px] mt-[10px] font-bold tracking-wide "
        >
          Step 2
        </h1>
        <p
          style={{
            color: dark ? "#fff" : "#000",
          }}
          className="text-[14px] px-[15px] mt-[0px] "
        >
          Enter API Key
        </p>
        <div className="w-[100%] px-[15px]">
          <input
            style={{
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            type="text"
            className="w-[100%]  h-[32px] bg-transparent mt-[4px] border-[1px] border-[#ebebeb] outline-none px-[10px] text-[13px] font-medium"
            name=""
            id=""
          />
        </div>
        <p className="text-[14px] px-[15px] text-[#969AA5] tracking-wide  mt-[5px] ">
          Need help?
          <span className="text-[#06F] ml-[2px] hover:underline cursor-pointer">
            Watch our Klaviyo Walkthrough!
          </span>
        </p>
        <div
          style={{
            borderColor: dark ? "#1F2329" : "#ebebeb",
          }}
          className="w-[100%] border-t-[1px] mt-[10px] items-center border-[#ebebeb] flex items-center justify-end px-[15px] h-[70px] "
        >
          <div
            style={{
              color: "#696E7E",
            }}
            className="px-[20px] rounded-[3px] mr-[10px] text-[14px] cursor-pointer font-medium h-[38px] hover:bg-[#e8e8ecbc] bg-[#E8E8EC] flex items-center justify-center"
          >
            Cancel
          </div>
          <div
            style={{
              color: "#fff",
            }}
            className="px-[20px] rounded-[3px] text-[14px] cursor-pointer font-medium h-[38px] hover:bg-[#333345] bg-[#000] flex items-center justify-center"
          >
            Connect
          </div>
        </div>
      </div>
    </div>
  );
};

const Integrations = () => {
  const auth = useSelector((state) => state.home.auth);
  const [loading, setLoading] = useState(!auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [vidLoad, setVidLoad] = useState(auth);
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const dark = localStorage.getItem("dark");
    if (dark) {
      dispatch(setDark(true));
    } else {
      dispatch(setDark(false));
    }
    if (loggedIn === "true") {
      setTimeout(() => {
        setLoading(false);
        dispatch(setAuth(true));
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/auth/signIn");
        dispatch(setAuth(false));
      }, 1000);
    }
  });

  const [show, setShow] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <>
      {show && (
        <Connect
          cancel={() => {
            setShow(false);
          }}
        />
      )}
      {!vidLoad ? (
        <div
          style={{
            backgroundColor: dark ? "#090917" : "#fff",
          }}
          className="w-[100%] h-[100vh] bg-transparent flex items-center justify-center"
        >
          <video
            autoPlay
            className={"w-[300px]"}
            muted
             
            onEnded={() => {
              setVidLoad(true);
            }}
            src={dark ? "/load-b.mp4" : "/load-w.mp4"}
          ></video>
        </div>
      ) : (
        <Suspense
          fallback={
            <div
              style={{
                backgroundColor: dark ? "#090917" : "#fff",
              }}
              className="w-[100%] h-[100vh] bg-transparent flex items-center justify-center"
            >
              <video
                autoPlay
                className={"w-[300px]"}
                muted
                 
                onEnded={() => {
                  setVidLoad(true);
                }}
                src={dark ? "/load-b.mp4" : "/load-w.mp4"}
              ></video>
            </div>
          }
        >
          <DashboardPage setShow={setShow} />
        </Suspense>
      )}
    </>
  );
};

export default Integrations;
