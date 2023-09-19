import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar/index";
import ChatContainer from "./AI";
import useWidth from "../../hooks/useWidth";

const HomeLayout = ({ children, show }) => {
  const w = useWidth();
  return (
    <>
      <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col relative">
        <Navbar />
        <div className="w-[100%]  flex h-[100vh]">
          {w > 1000 && <Sidebar />}
          <div className="w-[100%] h-[100vh] overflow-hidden">{children}</div>
        </div>
        {/* <ChatContainer/> */}
      </div>
    </>
  );
};

export default HomeLayout;
