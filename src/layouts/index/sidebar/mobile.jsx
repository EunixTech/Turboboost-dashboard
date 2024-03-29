import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Plan from "../plan";
import { Tween } from "react-gsap";
import { Power2 } from "gsap";
import SidebarCard from "../../../components/SidebarCard";
import { setUpgradePopUpShow } from "../../../services/home";
import { useDispatch, useSelector } from "react-redux";
import NewViewCard from "../../../components/NewViewSideBarCard";

const Item = ({ title, src, route }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  console.log(currentPath, "please check here");
  const selected = currentPath === route;

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
  const upgradePopUpShow = useSelector((state) => state.home.upgradePopUpShow);
  const [show, setShow] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  const dispatch = useDispatch();
  return (
    <>
      {upgradePopUpShow && (
        <Plan
          cancel={() => {
            dispatch(setUpgradePopUpShow(false));
          }}
        />
      )}
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

          <SidebarCard cancel={cancel} />
          <NewViewCard cancel={cancel} />

        </div>
      </Tween>
    </>
  );
};

export default Sidebar;
