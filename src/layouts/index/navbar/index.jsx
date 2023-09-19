import React, { useEffect, useState } from "react";
import useWidth from "../../../hooks/useWidth";
import Sidebar from "../sidebar/mobile";
import { useDispatch, useSelector } from "react-redux";
import Toggle from "../../../utils/toggle";
import { setDark } from "../../../services/home";
import { useNavigate } from "react-router-dom";

const Item = ({ src, title, onClick }) => {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className="w-[100%] cursor-pointer text-[15px] tracking-wide items-center text-[#85858C] h-[30px] flex"
    >
      <img src={src} className="w-[20px] mr-[10px]" alt="" />
      <span className="translate-y-[1px]">{title}</span>
    </div>
  );
};

const Prompt = () => {
  const w = useWidth();
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.home.dark);
  const router = useNavigate();
  return (
    <div
      style={{
        backgroundColor: dark ? "#111317" : "#fff",
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="absolute bg-[#fff] w-[250px] min-h-[10px] z-10 rounded-b-[10px]  top-[43px] right-[5px]  border-r-[1px] border-l-[1px] border-b-[1px] border-l-[#ccc] border-b-[#ccc]"
    >
      <div className="w-[100%] px-[20px] py-[10px]">
        <Item
          onClick={() => {
            router("/settings");
          }}
          src={"/graphic/navbar/user.svg"}
          title="Account Settings"
        />
        <Item
          onClick={() => {
            router("/billing");
          }}
          src={"/graphic/navbar/dollar.svg"}
          title="Billing"
        />
        <Item
          onClick={() => {
            window.open("/shopify-admin", "_blank");
          }}
          new={true}
          src={"/graphic/navbar/link.svg"}
          title="Go to Shopify Admin"
        />
        <Item
          onClick={() => {
            window.open("/store", "_blank");
          }}
          new={true}
          src={"/graphic/navbar/google.svg"}
          title="Go to Store"
        />
        <Item
          onClick={() => {
            router("/affiliate");
          }}
          src={"/graphic/navbar/message.svg"}
          title="Affiliates"
        />
      </div>
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="w-[100%] cursor-pointer px-[20px] pt-[7px] border-t-[1px] border-[#ccc] pb-[7px] text-[15px] tracking-wide  text-[#85858C] h-[74px] "
      >
        <div className="flex w-[100%] my-[5px] justify-between items-center">
          <div className="flex items-center">
            <img src={"/moon-01.svg"} className="w-[20px] mr-[10px]" alt="" />
            <span className="translate-y-[1px]">Dark Mode</span>
          </div>
          <Toggle
            value={!dark}
            setValue={(e) => {
              if (e) {
                localStorage.removeItem("dark");
                dispatch(setDark(false));
              } else {
                localStorage.setItem("dark", "true");
                dispatch(setDark(true));
              }
            }}
          />
        </div>
        <div
          onClick={() => {
            localStorage.removeItem("loggedIn");
            router("/auth/signIn");
          }}
          className="flex w-[100%] items-center"
        >
          <img
            src={"/graphic/navbar/logout.svg"}
            className="w-[20px] mr-[10px]"
            alt=""
          />
          <span className="translate-y-[1px]">Logout</span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const w = useWidth();

  useEffect(() => {
    const onPointerDown = () => {
      if (!hover) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, false);
    };
  });

  const [sideOpen, setSideOpen] = useState(false);
  const [transition, setTransition] = useState(false);

  const dark = useSelector((state) => state.home.dark);

  return (
    <>
      {sideOpen && (
        <Sidebar
          cancel={() => {
            setTransition(false);
            setTimeout(() => {
              setSideOpen(false);
            }, 600);
          }}
          transition={transition}
        />
      )}
      <div
        style={{
          backgroundColor: dark ? "#111317" : "#fff",
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="w-[100%] shrink-0 absolute z-10 top-0 left-0 border-b-[1px]  h-[50px] flex items-center justify-between bg-[#fff] "
      >
        {w > 1000 ? (
          <img
            src={dark ? "long.svg" : "/logo-b.png"}
            className="w-[150px] ml-[30px]"
            alt=""
          />
        ) : (
          <img
            onClick={() => {
              setSideOpen(true);
              setTransition(true);
            }}
            src={dark ? "/menuu.svg" : "/graphic/navbar/menu.svg"}
            className="w-[30px] py-[6px] translate-y-[1px] cursor-pointer h-[30px] shrink-0 ml-[10px]"
            alt=""
          />
        )}
        <div className="flex">
          {w > 1000 && (
            <div className="text-[#13DE8E]  cursor-pointer tracking-wide text-[12px] font-medium px-[12px] bg-[#13de8d17] items-center rounded-[3px] h-[35px] flex">
              <span className="mr-[20px]">Websites Connected</span>
              <span>1/1</span>
            </div>
          )}
          <img
            src={
              dark ? "/graphic/navbar/bell-d.svg" : "/graphic/navbar/bell.svg"
            }
            className=" cursor-pointer w-[22px] ml-[22px] mx-[10px]"
            alt=""
          />
          <img
            src={
              dark
                ? "/graphic/navbar/help-circle-d.svg"
                : "/graphic/navbar/help-circle.svg"
            }
            className="cursor-pointer w-[22px] mx-[10px]"
            alt=""
          />
          <div
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            className="flex relative mx-[10px]"
          >
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="flex cursor-pointer"
            >
              <img
                src={
                  dark
                    ? "/graphic/navbar/user-circle-d.svg"
                    : "/graphic/navbar/user-circle.svg"
                }
                className="cursor-pointer w-[22px]"
                alt=""
              />
              <img
                src={dark ? "/graphic/navbar/down-d.svg" : "/down.svg"}
                className="cursor-pointer w-[12px] mx-[5px] mr-[20px] translate-y-[2px]"
                alt=""
              />
            </div>
            {open && <Prompt />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
