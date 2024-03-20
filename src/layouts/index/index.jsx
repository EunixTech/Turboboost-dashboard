import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar/index";
import ChatContainer from "./AI";
import useWidth from "../../hooks/useWidth";

const HomeLayout = ({ children, show }) => {
  const w = useWidth();
  const [selectedView, setSelectedView] = useState("NewViewCard"); // Default selected view

  const handleViewChange = (view) => {  
    setSelectedView(view);
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col relative">
        <Navbar handleViewChange={handleViewChange} />
        <div className="w-[100%]  flex h-[100vh]">
          {w > 1000 && <Sidebar selectedView={selectedView} />}
          <div className="w-[100%] h-[100vh] overflow-hidden">{children}</div>
        </div>
        {/* <ChatContainer/> */}
      </div>
    </>
  );
};

export default HomeLayout;
