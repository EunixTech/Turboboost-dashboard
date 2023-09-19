import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Plan from "../plan";
import { Tween } from "react-gsap";
import { Power2 } from "gsap";
import { useSelector } from "react-redux";

const Item = ({ title, src, route }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  console.log(currentPath, "please check here");
  const selected = currentPath === route;
  console.log(selected, currentPath, route);
  return (
    <div
      style={{
        backgroundColor: selected ? "#ffffff20" : "",
      }}
      onClick={() => {
        navigate(route);
      }}
      className="w-[100%] cursor-pointer rounded-[4px] mb-[5px] flex items-center  h-[40px]"
    >
      <img
        src={"/graphic/sidebar/" + (selected ? "dark/" : "light/") + src}
        className="ml-[18px] w-[14px] mr-[10px]"
        alt=""
      />
      <p
        style={{
          opacity: selected ? 1 : 0.4,
        }}
        className="text-[#fff] duration-100 font-normal tracking-wider translate-y-[1px]  text-[14px]"
      >
        {title}
      </p>
    </div>
  );
};

const Sidebar = ({ transition, cancel }) => {
  const [show, setShow] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <>
      {show && (
        <Plan
          cancel={() => {
            setShow(false);
          }}
        />
      )}
      <Tween
        from={{
          x: "-100%",
        }}
        to={{
          x: transition ? 0 : "-100%",
        }}
        duration={0.5}
        ease={Power2.easeIn}
      >
        <div
          style={{
            backgroundColor: dark ? "#111317" : "#0a0a18",
            borderColor: dark ? "#1F2329" : "#ebebeb",
          }}
          className="w-[100%] px-[10px]  h-[100vh] flex flex-col justify-between pt-[50px] bg-[#0A0A18] shrink-0 fixed z-50"
        >
          <div
            style={{
              backgroundColor: dark ? "#111317" : "#fff",
            }}
            className="w-[100%] h-[50px] bg-[#fff] absolute top-0 left-0 flex items-center justify-between px-[15px]"
          >
            <img
             src={dark ? "long.svg" : "/logo-b.png"}
              className="w-[120px]"
              alt=""
            />
            <img
              onClick={() => {
                cancel();
              }}
              src="/cross.svg"
              className="w-[17px] h-[17px] cursor-pointer"
              alt=""
            />
          </div>
          <div className="w-[100%] mt-[20px]">
            <Item title={"Dashboard"} route="/dashboard" src="/icon1.svg" />
            <Item
              title={"Connect Website"}
              route="/connect-website"
              src="/icon2.svg"
            />
            <Item
              title={"Cache Warmup"}
              route="/cache-warmup"
              src="/icon3.svg"
            />
            <Item
              title={"Cache Status"}
              route="/cache-status"
              src="/icon4.svg"
            />
            <Item title={"Logs"} route="/logs" src="/icon5.svg" />
            <Item
              title={"Integrations"}
              route="/integrations"
              src="/icon6.svg"
            />
            <Item title={"Billing"} route="/billing" src="/icon7.svg" />
            <Item title={"Settings"} route="/settings" src="/icon8.svg" />
          </div>
          <div
            style={{
              backgroundColor: dark ? "#191B21" : "#191925",
            }}
            className="w-[100%] p-[13px] border-[1px] border-[#292935] py-[13px] h-[180px] mb-[10px] rounded-sm bg-[#191925]"
          >
            <p className="text-[#918EA2] text-[12px] tracking-wide font-medium">
              My Plan
            </p>
            <p className="text-[13px] text-white tracking-wide font-medium">
              Growth Plan
            </p>
            <div>
              <div className="w-[100%] h-[20px] flex mb-[5px] mt-[7px] justify-between items-center">
                <p className="text-[11px] text-white tracking-wide">
                  Page Views/mo
                </p>
                <p className="text-[11px] text-[#918EA2] tracking-wide">
                  90,000/200,000
                </p>
              </div>
              <div className="bg-[#ffffff14] w-[100%] h-[3px] rounded-[3px]">
                <div
                  className="bg-[#38F8AC] h-[100%]"
                  style={{
                    width: `${30}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="mt-[7px] mb-[10px]">
              <div className="w-[100%] h-[20px] flex mb-[5px] mt-[7px] justify-between items-center">
                <p className="text-[11px] text-white tracking-wide">
                  CDN Bandwidth/mo
                </p>
                <p className="text-[11px] text-[#918EA2] tracking-wide">
                  13.98/100GB
                </p>
              </div>
              <div className="bg-[#ffffff14] w-[100%] h-[3px] rounded-[3px]">
                <div
                  className=" bg-[#38F8AC] h-[100%]"
                  style={{
                    width: `${22}%`,
                  }}
                ></div>
              </div>
            </div>
            <div
              onClick={() => {
                setShow(true);
              }}
              className="w-[100%] h-[34px] text-[#000] rounded-[2px] text-[12px] font-medium tracking-wide flex items-center justify-center cursor-pointer bg-[#38F8AC]"
            >
              Upgrade Plan
            </div>
          </div>
        </div>
      </Tween>
    </>
  );
};

export default Sidebar;
