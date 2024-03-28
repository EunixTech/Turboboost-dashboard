import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar/index";
import ChatContainer from "./AI";
import useWidth from "../../hooks/useWidth";
import { GetAxiosConfig } from "../../utils/axiosConfig";

const HomeLayout = ({ children, show }) => {
  const w = useWidth();
  const [selectedView, setSelectedView] = useState(""); // Default selected view

  const handleViewChange = (view) => {  
    setSelectedView(view);
  };

  useEffect(() => {
    // Fetch data and update selected view based on platform value
    const fetchDataAndSetView = async () => {
      try {
        const res = await GetAxiosConfig(`api/dashboard/fetch-connected-website-data`);
        const resJSON = res?.data;
       
        
        if (resJSON.status === 200) {
          const platformValue = resJSON.conectedWebsite.length > 0 ? resJSON.conectedWebsite[0].platform : "";
          
          // Set selected view based on platform value
          setSelectedView(platformValue === 1 ? "Websites Connected" : platformValue === 2 ? "Other Websites" : "");
        } else {
          // Handle error or invalid response
          console.error("Error fetching data:", resJSON);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchDataAndSetView(); // Fetch data and set selected view
  }, []); // Run effect only once on component mount

  return (
    <>
      <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col relative">
        <Navbar handleViewChange={handleViewChange} />
        <div className="w-[100%]  flex h-[100vh]">
          {w > 1000 && <Sidebar selectedView={selectedView} />} {/* Pass selected view as prop */}
          <div className="w-[100%] h-[100vh] overflow-hidden">{children}</div>
        </div>
        {/* <ChatContainer/> */}
      </div>
    </>
  );
};

export default HomeLayout;
