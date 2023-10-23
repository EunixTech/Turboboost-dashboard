import React, { useEffect, useState } from "react";
import HomeLayout from "../layouts/index/index";
import Toggle from "../utils/toggle";
import { useSelector, useDispatch } from "react-redux";
import { fetchIntegrationData } from "../services/integrationSlice";
import IntegrationItem from "../components/IntegrationItem";
import {
  selectSelectedTab,
  selectIntegrations,
  setSelectedTab,
} from "../services/integrationDataSlice";
import { selectFeaturedApps } from "../services/featureAppsDataSlice";

const Integrations = ({ setShow }) => {
  const dark = useSelector((state) => state.home.dark);
  const [selected, setSelected] = useState(0);
  const integrations = useSelector(selectIntegrations);
  const featuredApps = useSelector(selectFeaturedApps);
  const selectedTab = useSelector(selectSelectedTab);
  const dispatch = useDispatch();
  console.log('integrations---------->>>>',integrations);
  useEffect(() => {
    // Fetch integration data when the component mounts
    dispatch(fetchIntegrationData());
  }, [dispatch]);

  const selectTab = (index) => {
    setSelected(index);
  };

  const wrapperClassName = dark ? "divWrapperDarkMode" : "divWrapper";


  // Function to render IntegrationItem components based on selected tab
  const renderIntegrationItems = () => {
    const filteredIntegrations = integrations.filter(
      (integration) =>
        selectedTab === 0 ||
        (selectedTab === 1 && integration.connect) ||
        (selectedTab === 2 && !integration.connect)
    );

    return filteredIntegrations.map((integration) => (
      <IntegrationItem
        key={integration.title}
        connected={integration.connected}
        src={integration.src}
        title={integration.title}
        connectClick={() => {
          setShow(true);
        }}
        connect={integration.connect}
        sub={integration.sub}
      />
    ));
  };

  return (
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-[100%] h-[50px] shrink-0"></div>
      <div
        style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
        className={`w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] pb-[40px] mobile:px-[10px] laptop:px-[80px] ${wrapperClassName}`}
      >
        <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
          <div className="w-[100%] pt-[30px]">
            <h1
              style={{
                color: dark ? "#fff" : "#000",
              }} 
              className={`text-[20px] font-bold tracking-wide ${wrapperClassName}`}
            >
              Featured Apps
            </h1>
          </div>
          <div className="grid laptop:grid-cols-3 mt-[14px] gap-[20px] w-[100%]">
            {featuredApps.map((app) => (
              <IntegrationItem
                key={app.title}
                connected={app.connected}
                src={app.src}
                title={app.title}
                connectClick={app.connectClick}
                connect={app.connect}
                sub={app.sub}
              />
            ))}
          </div>
          {/* <div className="w-[100%] pt-[30px]">
            <h1
              className={`text-[18px] font-bold tracking-wide ${wrapperClassName}`}
            >
              Integrationsss
            </h1>
            <div className="w-[100%] mt-[10px] flex">
              <div
                onClick={() => {
                  selectTab(0);
                }}
                className={`px-[22px] border-[${
                  selected === 0
                    ? dark
                      ? "#fff"
                      : "#000"
                    : dark
                    ? "#1F2329"
                    : "#ebebeb"
                }] text-[${
                  selected === 0
                    ? dark
                      ? "#fff"
                      : "#000"
                    : dark
                    ? "#ffffff74"
                    : "#0a0a187e"
                }] ${
                  dark
                    ? "hover:border-[#fff] hover:text-[#fff]"
                    : "hover:border-[#000] hover:text-[#000]"
                } rounded-[3px] text-[12px] mr-[10px] cursor-pointer font-medium h-[34px] border-[1px] flex items-center justify-center`}
              >
                All
              </div>
              <div
                onClick={() => {
                  selectTab(1);
                }}
                className={`px-[22px] border-[${
                  selected === 1
                    ? dark
                      ? "#fff"
                      : "#000"
                    : dark
                    ? "#1F2329"
                    : "#ebebeb"
                }] text-[${
                  selected === 1
                    ? dark
                      ? "#fff"
                      : "#000"
                    : dark
                    ? "#ffffff74"
                    : "#0a0a187e"
                }] ${
                  dark
                    ? "hover:border-[#fff] hover:text-[#fff]"
                    : "hover:border-[#000] hover:text-[#000]"
                } rounded-[3px] text-[12px] mr-[10px] cursor-pointer font-medium h-[34px] border-[1px] flex items-center justify-center`}
              >
                Installed
              </div>
              <div
                onClick={() => {
                  selectTab(2);
                }}
                className={`px-[22px] border-[${
                  selected === 2
                    ? dark
                      ? "#fff"
                      : "#000"
                    : dark
                    ? "#1F2329"
                    : "#ebebeb"
                }] text-[${
                  selected === 2
                    ? dark
                      ? "#fff"
                      : "#000"
                    : dark
                    ? "#ffffff74"
                    : "#0a0a187e"
                }] ${
                  dark
                    ? "hover:border-[#fff] hover:text-[#fff]"
                    : "hover:border-[#000] hover:text-[#000]"
                } rounded-[3px] text-[12px] mr-[10px] cursor-pointer font-medium h-[34px] border-[1px] flex items-center justify-center`}
              >
                Not Installed
              </div>
            </div>
            <div className="w-[100%] mt-[20px] grid laptop:grid-cols-3 gap-[20px] ">
              {renderIntegrationItems()}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Integrations;
