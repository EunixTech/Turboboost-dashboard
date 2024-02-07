import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUpgradePopUpShow } from "../services/home";
import getFetchConfig from '../utils/getFetchConfig';
import standardFetchHandlers from '../utils/standardFetchHandlers';
import handleFetchErrors from '../utils/handleFetchErrors';
import appURLs from '../appURL';

import { GetAxiosConfig } from "../utils/axiosConfig.js";


const Button = ({ onClick }) => {
    const dark = useSelector((state) => state.home.dark);
    return (
      <div
        onClick={() => {
          onClick();
        }}
        className={`w-[100%] ${!dark ? "bg-[#0A0A18] " : "bg-[#1c1f26]"}
  
          h-[34px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
      >
        <p
          className={`text-[${false ? "#fff" : "#000"}]   f2 text-[12px]   ${dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
            } rounded-[4px] hover:bg-[#2fe49c] font-bold active:border-0 translate-y-[-3px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide `}
        >
          Upgrade Plan
        </p>
      </div>
    );
  };
  
  const Item = ({ title, src, route }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const selected = currentPath === route;
 
    const [hover, setHover] = useState(false);
    const btn = useRef();
    return (
      <div
        style={{
          backgroundColor: (hover ? true : selected) ? "#ffffff20" : "",
        }}
        ref={btn}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={(e) => {
          const btn = e.currentTarget;
  
          const circle = document.createElement("span");
          const diameter = Math.max(btn.clientWidth, btn.clientHeight);
          const radius = diameter / 2;
  
          circle.style.width = circle.style.height = `${diameter}px`;
          circle.style.left = `${e.clientX - (btn.offsetLeft + radius)}px`;
          circle.style.top = `${e.clientY - (btn.offsetTop + radius)}px`;
          circle.classList.add("ripple");
  
          const ripple = btn.getElementsByClassName("ripple")[0];
  
          if (ripple) {
            ripple.remove();
          }
  
          btn.appendChild(circle);
  
          navigate(route);
        }}
        className="w-[100%] cursor-pointer overflow-hidden relative sidebar-anim  rounded-[4px] mb-[15px] flex items-center  h-[40px]"
      >
        <img
          src={
            "/graphic/sidebar/" +
            ((hover ? true : selected) ? "dark" : "light") +
            src
          }
          className="ml-[18px] w-[16px] mr-[15px]"
          alt=""
        />
        <p
          style={{
            opacity: (hover ? true : selected) ? 1 : 0.4,
          }}
          className="text-[#fff] f2 duration-100 font-normal tracking-wider translate-y-[1px]  text-[16px]"
        >
          {title}
        </p>
      </div>
    );
  };
  
  
  

export default function SidebarCard({cancel}) {
    const [show, setShow] = useState(false);
    const [PageViewCount, updatePageViewCount] = useState(0);
    const dark = useSelector((state) => state.home.dark);
    const dispatch = useDispatch();
    const [currentPlan, updateCurrentPlan] = useState({})
  
    const fetchPageViewData = async () => {
      try {
  
        const res = await GetAxiosConfig(`api/dashboard/fetch-page-views-data`);
        const resJSON = res?.data;
  
        if (resJSON.status === 200) {
          const pageViews = resJSON?.pageViewsArr;
          updatePageViewCount(pageViews?.length)
        }
      } catch (error) {
        if (error?.response?.status === 401) {
          localStorage.removeItem('authToken');
          window.location.replace('/login-shopify');
        }
        console.error("Error fetching user profile data:", error);
      }
    };
  
  
    const fetchingBillingDetails = async () => {
  
      const fetchConfig = getFetchConfig(),
        appURL = appURLs();
  
      fetch(`${appURL}/user/current-plan-detail`, fetchConfig)
        .then(handleFetchErrors)
        .then((res) => {
  
  
          if (Number(res?.status) === 200) {
            const planData = res?.data;
  
            updateCurrentPlan(planData)
          }
  
        })
        .catch(standardFetchHandlers.error)
        .finally(() => {
          setTimeout(() => {
          
          }, 1000);
        });
    }
    const planPageViewData = {
      "Basic": "5000",
      "Starter":"50,000",
      "Growth": "200,000",
      "Pro": "1,000,000"
    }
  
    const planPageViewData1 = {
      "Basic": 5000,
      "Starter":50000,
      "Growth": 200000,
      "Pro": 1000000
    }
    const urlParams = new URLSearchParams(window.location.search);
    const userToken1 = urlParams.get("userToken");
  
    useEffect(() => {
      if(!userToken1){
        fetchPageViewData();
        fetchingBillingDetails()
      }
    }, [userToken1])

    
    return (
        <>
            <div className="w-[100%] mt-[20px]">
                <Item title={"Dashboard"} route="/dashboard" src="/icon1.svg" />
                <Item
                    title={"Connect Website"}
                    route="/connect-website"
                    src="/icon2.svg"
                />
                <Item title={"Page Optimization"} route="/page-optimization" src="/icon3.svg" />
                <Item title={"Assets Status"} route="/assets-status" src="/icon4.svg" />
                <Item title={"Logs"} route="/logs" src="/icon5.svg" />
                <Item title={"Integrations"} route="/integrations" src="/icon6.svg" />
                <Item title={"Billing"} route="/billing" src="/icon7.svg" />
                <Item title={"Settings"} route="/settings" src="/icon8.svg" />
            </div>
            <div
                style={{
                    backgroundColor: dark ? "#191B21" : "#191925",
                }}
                className="w-[100%] p-[13px] border-[1px] border-[#292935] py-[13px] h-[150px] mb-[10px] rounded-sm bg-[#191925]"
            >
                <p className="text-[#918EA2] f2 text-[12px] tracking-wide font-medium">
                    My Plan
                </p>
                <p className="text-[14px] f2 text-white tracking-wide font-medium">
                    {currentPlan?.plan} Plan
                </p>
                <div>

                    <div className="w-[100%] h-[20px] flex mb-[5px] mt-[7px] justify-between items-center">
                        <p className="text-[12px] f2 text-white tracking-wide">
                            Page Views/mo
                        </p>
                        <p className="text-[12px] f2 text-[#918EA2] tracking-wide">

                            {PageViewCount || 0}/ {currentPlan?.plan && planPageViewData[currentPlan?.plan]}
                        </p>
                    </div>
                    <div className="bg-[#ffffff14] w-[100%] h-[3px] rounded-[3px]">
                        <div
                            className="bg-[#38F8AC] h-[100%]"
                            style={{
                                width: `${(currentPlan?.plan && planPageViewData1[currentPlan?.plan]) ? (PageViewCount / planPageViewData1[currentPlan?.plan]) * 100 : 0}%`,
                            }}
                        ></div>
                    </div>
                </div>

                <Button
                    onClick={() => {
                        setShow(true);
                        dispatch(setUpgradePopUpShow(true));
                    }}
                />
            </div>
        </>
    )
}