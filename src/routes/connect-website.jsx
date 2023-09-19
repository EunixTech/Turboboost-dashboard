import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth, setDark } from "../services/home";
import HomeLayout from "../layouts/index";

const ConnectWebsitePage = React.lazy(() =>
  import("../views/ConnectWebsite.jsx")
);

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

const Connector1 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#433E3E] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/1.png"
        className="w-[60px]"
        alt=""
      />
    </div>
  );
};
const Connector2 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#29B6F6] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/2.png"
        className="w-[60px]"
        alt=""
      />
    </div>
  );
};
const Connector3 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#7F54B3] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/3.png"
        className="w-[50px]"
        alt=""
      />
    </div>
  );
};
const Connector4 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#F36221] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/4.png"
        className="w-[35px]"
        alt=""
      />
    </div>
  );
};
const Connector5 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#96BF3D] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/5.png"
        className="w-[32px]"
        alt=""
      />
    </div>
  );
};
const Connector6 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#282431] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/6.png"
        className="w-[55px]"
        alt=""
      />
    </div>
  );
};
const Connector7 = () => {
  return (
    <div className="h-[99px] w-[99px] shrink-0 bg-[#4F5B93] flex items-center justify-center">
      <img
        src="/graphic/connect-website/connector/7.png"
        className="w-[80px]"
        alt=""
      />
    </div>
  );
};

const Button = ({ onClick }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      onClick={() => {}}
      className={`w-[100px] ${!dark ? "bg-[#ebebeb] " : "bg-[#1c1f26]"}
        
        h-[40px]   cursor-pointer rounded-[4px] ${
          dark ? "border-[#1F2329]" : "border-[#ebebeb] "
        } flex items-center justify-center`}
    >
      <p
        className={`text-[${
          false ? "#fff" : "#000"
        }]   f2 text-[14px]  border-[1px]  ${
          dark ? "border-[#38F8AC]" : "border-[#38F8AC]"
        } 
        ${
          dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
        } rounded-[4px] active:translate-y-[0px] hover:bg-[#2fe49c]  active:border-[1px] translate-y-[-1px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Connect
      </p>
    </div>
  );
};

const Connector = ({ title, sub, connect }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] items-center h-[99px] mb-[10px] overflow-hidden rounded-[5px] border-[1px] border-[#ebebeb] flex"
    >
      {connect}
      <div className="w-[100%] h-[100%] flex items-center mobile:px-[10px] laptop:px-[22px] justify-between">
        <div>
          <h1
            style={{ color: dark ? "#fff" : "#000" }}
            className="mobile:text-[11px] laptop:text-[20px] font-bold tracking-wide"
          >
            {title}
          </h1>
          <p
            style={{
              color: dark ? "#ffffff74" : "#0a0a187e",
            }}
            className="text-[14px] text-[#0a0a1878]  font-bold tracking-wide "
          >
            {sub}
          </p>
        </div>
        {/* <div className="w-[80px] h-[32px] hover:bg-[#2FE49C] bg-[#38F8AC] text-[#000] font-bold rounded-[3px] flex items-center justify-center text-[11px] cursor-pointer">
          Connect
        </div> */}
        <Button />
      </div>
    </div>
  );
};

const BrowseConnectors = ({ cancel }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100%] h-[100vh] fixed z-50 left-0 laptop:px-[0] mobile:px-[10px] bg-[#00000074] flex items-center justify-center py-[50px]">
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
          backgroundColor: dark ? "#111317" : "#fff",
        }}
        className="laptop:w-[1095px] max-h-[1000px] mobile:w-[100%] flex flex-col h-[100%] rounded-[13px] bg-[#fff] relative border-[1px] border-[#ebebeb] mobile:px-[10px] laptop:px-[30px]"
      >
        <div className="flex items-center shrink-0 justify-between mt-[25px]">
          <h1
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[24px]  font-bold "
          >
            Website Connectors
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
        <div className="w-[100%] h-[100%] pt-[20px] overflow-y-auto scroll-hidden">
          <p
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[16px] font-bold "
          >
            Install an extension
          </p>
          <div className="flex justify-between items-center mt-[3px] mb-[15px]">
            <p
              style={{
                color: dark ? "#ffffff74" : "#0a0a187e",
              }}
              className="text-[14px] text-[#0a0a1878] font-bold "
            >
              Suitable if you are running any of the following platforms
            </p>
            <div className="flex items-center justify-center">
              <p
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[13px] text-[#000] tracking-wide font-bold "
              >
                Level:
              </p>
              <div className="bg-[#38f8ab3a] text-[#0FE38F] font-bold px-[12.5px] translate-y-[-1px] rounded-[12px] ml-[4px] py-[1px] text-[11px]">
                Easy
              </div>
            </div>
          </div>
          <Connector
            sub="The All-In-One Speed Optimization Plugin"
            title="TurboBoost for WordPress"
            connect={<Connector1 />}
          />
          <Connector
            sub="Official TurboBoost plugin for OpenCart"
            title="TurboBoost for OpenCart"
            connect={<Connector2 />}
          />
          <Connector
            sub="Official TurboBoost plugin for WooCommerce"
            title="TurboBoost for WooCommerce"
            connect={<Connector3 />}
          />
          <Connector
            sub="Official TurboBoost plugin for Magento"
            title="TurboBoost for Magento"
            connect={<Connector4 />}
          />
          <Connector
            sub="Official TurboBoost app for Shopify"
            title="TurboBoost for Shopify"
            connect={<Connector5 />}
          />
          <Connector
            sub="Official TurboBoost plugin for BigCommerce"
            title="TurboBoost for BigCommerce"
            connect={<Connector6 />}
          />
          <div className="w-[100%] mt-[20px]">
            <p
              style={{
                color: dark ? "#fff" : "#000",
              }}
              className="text-[12px] font-bold "
            >
              Integrate an SDK
            </p>
            <div className="flex justify-between items-center mt-[3px] mb-[15px]">
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px] text-[#0a0a1878] font-bold "
              >
                Suitable for custom platforms that run in any of the following
                programming languages
              </p>
              <div className="flex items-center justify-center">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[13px] text-[#000] tracking-wide font-bold "
                >
                  Level:
                </p>
                <div className="bg-[#ffcc6542] text-[#FFCB65] font-bold px-[12.5px] translate-y-[-1px] rounded-[12px] ml-[4px] py-[1px] text-[11px]">
                  Medium
                </div>
              </div>
            </div>
            <Connector
              sub="Integrate TurboBoost into your PHP based website"
              title="TurboBoost PHP SDK (Limited Support)"
              connect={<Connector7 />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ConnectWebsite = () => {
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
        <BrowseConnectors
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
          <ConnectWebsitePage setShow={setShow} />
        </Suspense>
      )}
    </>
  );
};

export default ConnectWebsite;
