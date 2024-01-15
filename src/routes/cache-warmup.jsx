import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth, setDark } from "../services/home";
import HomeLayout from "../layouts/index";
import Toggle from "../utils/toggle";

const CacheWarmupagePage = React.lazy(() =>
  import("../views/CacheWarmupage.jsx")
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

const Button = ({ onClick }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={`w-[130px] ${!dark ? "bg-[#ebebeb] " : "bg-[#1c1f26]"}
          mt-[18px]
        h-[40px]   cursor-pointer rounded-[4px] ${
          dark ? "border-[#1F2329]" : "border-[#ebebeb] "
        } flex items-center justify-center relative`}
    >
      <p
        className={`absolute  text-[${
          false ? "#fff" : "#000"
        }]   f2 text-[12px]  border-[1px]  ${
          dark ? "border-[#38F8AC]" : "border-[#38F8AC]"
        } ${
          dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
        } rounded-[4px] hover:bg-[#2fe49c] active:translate-y-[0px] active:border-[1px] translate-y-[-1px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Save and Build
      </p>
    </div>
  );
};

const Button1 = ({ onClick }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={`w-[100px] ${!dark ? "bg-[#ebebeb] " : "bg-[#1c1f26]"}
          mt-[18px] mr-[20px]
        h-[40px]   cursor-pointer rounded-[4px] ${
          dark ? "border-[#000]" : "border-[#000] "
        } flex items-center justify-center hover:bg-[#111317]`}
    >
      <p
        className={`text-[${
          true ? "#fff" : "#000"
        }]   f2 text-[12px]  border-[1px]  ${
          dark ? "border-[#000]" : "border-[#000]"
        } ${
          dark ? "bg-[#000]" : "bg-[#000]"
        } rounded-[4px] hover:bg-[#333345] hover:border-[#333345]  active:translate-y-[0px] active:border-[1px] translate-y-[-1px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Save
      </p>
    </div>
  );
};

const HTMLSiteMap = ({ cancel }) => {
  const dark = useSelector((state) => state.home.dark);

  const [list, setList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState("");
  return (
    <div className="w-[100%] h-[100vh] fixed left-0 z-50 bg-[#00000074] flex items-center justify-center py-[50px]">
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
          backgroundColor: dark ? "#111317" : "#fff",
        }}
        className="w-[700px] max-h-[700px] flex flex-col h-[100%] rounded-[13px] bg-[#fff] relative border-[1px] border-[#ebebeb] "
      >
        <div className="flex px-[30px] items-center shrink-0 justify-between mt-[25px]">
          <div className="flex items-center justify-center">
            <h1
              style={{
                color: dark ? "#fff" : "#000",
              }}
              className="text-[24px] font-bold  mr-[10px]"
            >
              HTML Sitemap Status
            </h1>
            <Toggle />
          </div>

          <img
            onClick={() => {
              cancel();
            }}
            src="/graphic/connect-website/cross.svg"
            className="cursor-pointer w-[15px]"
            alt=""
          />
        </div>
        <div
          style={{
            borderColor: dark ? "#1F2329" : "#ebebeb",
          }}
          className="w-[100%] border-t-[1px] h-[100%] overflow-y-auto scroll-hidden border-[#ebebeb] mt-[20px] px-[30px]"
        >
          <p
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[16px] mt-[15px] font-bold "
          >
            HTML Sitemap by TurboBoost
          </p>
          <p
            onClick={() => {
              window.open(
                "https://robloxbracketracing.com/pages/turboboost-sitemap",
                "_blank"
              );
            }}
            className="text-[14px] cursor-pointer text-[#0a0a1878] font-bold "
          >
            https://robloxbracketracing.com/pages/turboboost-sitemap
          </p>
          <div
            style={{
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="w-[100%] h-[300px]  border-[1px] border-[#ebebeb] rounded-[3px] mt-[10px]"
          >
            <div
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%]  px-[20px] border-b-[1px] border-[#ebebeb] h-[50px] flex justify-between items-center"
            >
              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="flex items-center text-[16px] font-bold tracking-wide"
              >
                <img
                  src="/graphic/warmup/dial.svg"
                  className="mr-[7px]"
                  alt=""
                />
                Scanned URLs
              </div>
              <div className="text-[14px] font-medium tracking-wide translate-y-[1px] text-[#0a0a186e]">
                6 URLs Detected
              </div>
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://robloxbracketracing.com/pages/turboboost-sitemap",
                  "_blank"
                );
              }}
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="px-[20px] cursor-pointer w-[100%] border-b-[1px] border-[#ebebeb] h-[40px] underline text-[#0066FF] tracking-wide font-medium text-[14px] flex items-center"
            >
              https://robloxbracketracing.com/pages/turboboost-sitemap
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://robloxbracketracing.com/pages/turboboost-sitemap",
                  "_blank"
                );
              }}
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="px-[20px]  cursor-pointer w-[100%] border-b-[1px] border-[#ebebeb] h-[40px] underline text-[#0066FF] tracking-wide font-medium text-[14px] flex items-center"
            >
              https://robloxbracketracing.com/pages/turboboost-sitemap
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://robloxbracketracing.com/pages/turboboost-sitemap",
                  "_blank"
                );
              }}
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="px-[20px] cursor-pointer w-[100%] border-b-[1px] border-[#ebebeb] h-[40px] underline text-[#0066FF] tracking-wide font-medium text-[14px] flex items-center"
            >
              https://robloxbracketracing.com/pages/turboboost-sitemap
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://robloxbracketracing.com/pages/turboboost-sitemap",
                  "_blank"
                );
              }}
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="px-[20px] cursor-pointer w-[100%] border-b-[1px] border-[#ebebeb] h-[40px] underline text-[#0066FF] tracking-wide font-medium text-[14px] flex items-center"
            >
              https://robloxbracketracing.com/pages/turboboost-sitemap
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://robloxbracketracing.com/pages/turboboost-sitemap",
                  "_blank"
                );
              }}
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="px-[20px] cursor-pointer w-[100%] border-b-[1px] border-[#ebebeb] h-[40px] underline text-[#0066FF] tracking-wide font-medium text-[14px] flex items-center"
            >
              https://robloxbracketracing.com/pages/turboboost-sitemap
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://robloxbracketracing.com/pages/turboboost-sitemap",
                  "_blank"
                );
              }}
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="px-[20px] cursor-pointer w-[100%] border-b-[1px] border-[#ebebeb] h-[40px] underline text-[#0066FF] tracking-wide font-medium text-[14px] flex items-center"
            >
              https://robloxbracketracing.com/pages/turboboost-sitemap
            </div>
          </div>
          <div
            style={{
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="w-[100%]   border-[1px] border-[#ebebeb] rounded-[3px] mt-[10px]"
          >
            <div
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%]  px-[20px] border-b-[1px] border-[#ebebeb] h-[50px] flex justify-between items-center"
            >
              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="flex items-center text-[14px] font-bold tracking-wide"
              >
                Additional Links
              </div>
            </div>
            <div
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%]  px-[20px] border-b-[1px] border-[#ebebeb] h-[25px] flex justify-between items-center"
            >
              <p className="text-[11px] text-[#0a0a1878] tracking-wide font-medium">
                URL
              </p>
              <p className="text-[11px] text-[#0a0a1878] tracking-wide font-medium">
                Action
              </p>
            </div>
            {list.map((item, i) => {
              return (
                <div
                  key={i}
                  style={{
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="w-[100%]  px-[20px] border-b-[1px] border-[#ebebeb] h-[40px] flex justify-between items-center"
                >
                  <div
                    onClick={() => {
                      window.open(
                        "https://robloxbracketracing.com/pages/turboboost-sitemap",
                        "_blank"
                      );
                    }}
                    style={{
                      borderColor: dark ? "#1F2329" : "#ebebeb",
                    }}
                    className="px-[20px] cursor-pointer w-[100%] border-b-[1px] border-[#ebebeb] h-[40px] underline text-[#0066FF] tracking-wide font-medium text-[14px] flex items-center"
                  >
                    {item}
                  </div>
                  <img
                    src="/graphic/settings/trash.svg"
                    onClick={() => {
                      setClicked(false);
                    }}
                    className="cursor-pointer"
                    alt=""
                  />
                </div>
              );
            })}
            {clicked && (
              <div
                style={{
                  borderColor: dark ? "#1F2329" : "#ebebeb",
                }}
                className="w-[100%]  px-[20px] border-b-[1px] border-[#ebebeb] h-[60px] flex justify-between items-center"
              >
                <input
                  type="text"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  className="w-[400px] h-[40px] rounded-[4px] border-[2px] border-[#ebebeb] outline-none px-[20px] text-[13px]"
                />
                <img
                  src="/graphic/settings/trash.svg"
                  onClick={() => {
                    setClicked(false);
                  }}
                  className="cursor-pointer"
                  alt=""
                />
              </div>
            )}
            <div
              style={{
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%]  px-[20px] border-b-[1px] border-[#ebebeb] h-[50px] flex justify-center items-center"
            >
              <div
                onClick={() => {
                  if (input !== "") {
                    setList([...list, input]);
                  }
                  setClicked(true);
                }}
                className="flex items-center text-[13px] text-[#0066FF]  cursor-pointer  font-bold tracking-wide"
              >
                <img
                  src="/graphic/warmup/plus-b.svg"
                  alt=""
                  className="mr-[4px] w-[13px]"
                />
                Add More
              </div>
            </div>
          </div>
          <div className="w-[100%] flex mb-[20px] justify-end">
            {/* <div className=" px-[20px] h-[38px] hover:bg-[#333345] text-[#fff] cursor-pointer mt-[18px] rounded-[3px] flex items-center justify-center bg-[#000]">
              <h1 className="text-[14px] items-center flex font-medium">
                Save
              </h1>
            </div> */}
            <Button1
              onClick={() => {
                setClicked(false);
              }}
            />
            {/* <div className=" px-[20px] h-[38px]  hover:bg-[#2FE49C] text-[#000] ml-[14px] cursor-pointer mt-[18px] rounded-[3px] flex items-center justify-center bg-[#38F8AC]">
              <h1 className="text-[14px] items-center flex font-medium">
                Save and Build
              </h1>
            </div> */}
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

const CacheWarmupage = () => {
  const auth = useSelector((state) => state.home.auth);
  const [loading, setLoading] = useState(!auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [vidLoad, setVidLoad] = useState(auth);
  const [show, setShow] = useState(false);

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
  const dark = useSelector((state) => state.home.dark);
  return (
    <>
      {show && (
        <HTMLSiteMap
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
          <CacheWarmupagePage setShow={setShow} />
        </Suspense>
      )}
    </>
  );
};

export default CacheWarmupage;
