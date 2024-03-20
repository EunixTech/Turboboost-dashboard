import React, { useState } from "react";
import Plan from "../plan";
import { useDispatch, useSelector } from "react-redux";
import { setUpgradePopUpShow } from "../../../services/home";

import SidebarCard from "../../../components/SidebarCard.jsx";
import NewViewCard from "../../../components/NewViewSideBarCard.jsx";

const Sidebar = ({selectedView}) => {

  const upgradePopUpShow = useSelector((state) => state.home.upgradePopUpShow);
  const dark = useSelector((state) => state.home.dark);
  const dispatch = useDispatch();

 console.log('New selected view====>',selectedView)

  return (
    <>
      {upgradePopUpShow && (
        <Plan
          cancel={() => {
            dispatch(setUpgradePopUpShow(false));
          }}
        />
      )}
      <div
        style={{
          backgroundColor: dark ? "#111317" : "#0A0A18",
        }}
        className="desktop:w-[280px] laptop:w-[240px] px-[10px] pt-[50px] h-[100vh] flex flex-col justify-between  shrink-0 relative"
      >
        {selectedView === "SidebarCard" && <SidebarCard />}
        {selectedView === "NewViewCard" && <NewViewCard />}
      </div>
    </>
  );
};

export default Sidebar;
