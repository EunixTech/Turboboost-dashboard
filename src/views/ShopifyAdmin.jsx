import React, { useState } from "react";
import HomeLayout from "../layouts/index/index";
import Toggle from "../utils/toggle";
import useWidth from "../hooks/useWidth";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../services/home";
import TitleManager from "../components/TitleManager";

const ShopifyAdmin = () => {
  const w = useWidth();
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.home.dark);
  return (
    <HomeLayout>
          <TitleManager title="Shopify Admin" conicalURL="shopify-admin" />
      <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
        <div className="w-[100%] h-[50px] shrink-0"></div>
        <div
          style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
          className="w-[100%] h-[100%]  overflow-y-auto scroll-bar-cool111 laptop:px-[20px]  desktop:px-[50px]"
        ></div>
      </div>
    </HomeLayout>
  );
};

export default ShopifyAdmin;
