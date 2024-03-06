import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AnimatedLoader from "../components/loader/AnimatedLoader";
import IntegerationIteamCard from "../components/IntegerationIteamCard";
import { IntegrationsArr, FeaturedIntegrationArr } from "../static/IntegrationsArr";
import "../css/integration.css"

const Integrations = () => {
  const dark = useSelector((state) => state.home.dark);
  const [selected, setSelected] = useState(0);
  const [intArr, updateIntArr] = useState(IntegrationsArr);
  const [loader, toggleLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      toggleLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlingFilter = (index) => {
    setSelected(index);
    let data;
    if (index === 0) {
      data = IntegrationsArr;
    } else {
      data = IntegrationsArr.filter((data) => data.isConnected === (index === 1));
    }
    updateIntArr(data);
  }

  return (
    <>
      {
        loader ? <AnimatedLoader /> :
          <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
            <div className="w-[100%] h-[50px] shrink-0"></div>
            <div
              style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
              className="w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] pb-[40px] mobile:px-[10px] laptop:px-[80px]"
            >
              <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
                <div className="w-[100%] pt-[30px]">
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] font-bold tracking-wide "
                  >
                    Featured Apps
                  </h1>
                </div>
                <div className="integration_card_wrapper grid laptop:grid-cols-3 tablet:grid-cols-2 mt-[14px] gap-[20px] w-[100%]">
                  {
                    FeaturedIntegrationArr.map((featuredIntegration) => {
                      return <IntegerationIteamCard
                        src={featuredIntegration?.logo}
                        title={featuredIntegration?.name}
                        connect={featuredIntegration?.isConnected}
                        sub={featuredIntegration?.desc}
                        connectURL={featuredIntegration?.connectURL}
                      />
                    })
                  }

                </div>
                <div className="w-[100%] pt-[30px] pb-[30px]">
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[18px] font-bold tracking-wide "
                  >
                    Integrations
                  </h1>
                  <div className="w-[100%] mt-[10px] flex">
                    <div
                      onClick={() => handlingFilter(0)}
                      className={`px-[22px] border-[${selected === 0
                        ? dark
                          ? "#fff"
                          : "#000"
                        : dark
                          ? "#1F2329"
                          : "#ebebeb"
                        }] text-[${selected === 0
                          ? dark
                            ? "#fff"
                            : "#000"
                          : dark
                            ? "#ffffff74"
                            : "#0a0a187e"
                        }] ${dark ? "hover:border-[#fff] hover:text-[#fff]" : "hover:border-[#000] hover:text-[#000]"}  rounded-[3px] text-[12px] mr-[10px] cursor-pointer font-medium h-[34px] border-[1px] flex items-center justify-center`}
                    >
                      All
                    </div>
                    <div
                      onClick={() => handlingFilter(1)}
                      style={{}}
                      className={`px-[22px] border-[${selected === 1
                        ? dark
                          ? "#fff"
                          : "#000"
                        : dark
                          ? "#1F2329"
                          : "#ebebeb"
                        }] text-[${selected === 1
                          ? dark
                            ? "#fff"
                            : "#000"
                          : dark
                            ? "#ffffff74"
                            : "#0a0a187e"
                        }] ${dark ? "hover:border-[#fff] hover:text-[#fff]" : "hover:border-[#000] hover:text-[#000]"}  rounded-[3px] text-[12px] mr-[10px] cursor-pointer font-medium h-[34px] border-[1px] flex items-center justify-center`}
                    >
                      Installed
                    </div>
                    <div
                      onClick={() => handlingFilter(2)}
                      className={`px-[22px] border-[${selected === 2
                        ? dark
                          ? "#fff"
                          : "#000"
                        : dark
                          ? "#1F2329"
                          : "#ebebeb"
                        }] text-[${selected === 2
                          ? dark
                            ? "#fff"
                            : "#000"
                          : dark
                            ? "#ffffff74"
                            : "#0a0a187e"
                        }]  ${dark ? "hover:border-[#fff] hover:text-[#fff]" : "hover:border-[#000] hover:text-[#000]"}  rounded-[3px] text-[12px] mr-[10px] cursor-pointer font-medium h-[34px] border-[1px] flex items-center justify-center`}
                    >
                      Not Installed
                    </div>
                  </div>
                  <div className="integration_card_wrapper w-[100%] mt-[20px] grid tablet:grid-cols-2 laptop:grid-cols-3 gap-[20px] ">
                    {
                      intArr.map((featuredIntegration) => {
                        return <IntegerationIteamCard
                          src={featuredIntegration?.logo}
                          title={featuredIntegration?.name}
                          connect={featuredIntegration?.isConnected}
                          sub={featuredIntegration?.desc}
                          connectURL={featuredIntegration?.connectURL}
                        />
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
      }

    </>
  );
};

export default Integrations;