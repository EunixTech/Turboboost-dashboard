import React, { Suspense, useState, useEffect } from "react";
import HomeLayout from "../layouts/index/index";
import Toggle from "../utils/toggle";
import { useDispatch, useSelector } from "react-redux";
import { setUpgradePopUpShow } from "../services/home";
import TitleManager from "../components/TitleManager";
import axios from "axios";
import appURLs from "../appURL";
import Tooltip from "../components/Tooltip"
import toast from "react-hot-toast";
import AnimatedLoader from "../components/loader/AnimatedLoader";
import { GetAxiosConfig,PostAxiosConfig } from "../utils/axiosConfig.js";
import { setToggle } from "../slice/statusToggleSlice";
import ToggleButton from "../components/ToggleButton.jsx";

const Button = () => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className={`w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}

        h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
    >
      <p
        className={`text-[${false ? "#fff" : "#000"}]   f2 text-[12px]   ${dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
          } rounded-[4px] active:translate-y-[0px] hover:bg-[#2fe49c] active:border-0  translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        <img
          src="/graphic/warmup/play.svg"
          className="w-[8px] mr-[5px] translate-y-[0px]"
          alt=""
        />{" "}
        Start Optimizations
      </p>
    </div>
  );
};


const Button1 = ({ onClick }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={`w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"}
        
        h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
    >
      <p
        className={`text-[${true ? "#fff" : "#000"}]   f2 text-[12px]   ${dark ? "bg-[#000]" : "bg-[#000]"
          } rounded-[4px] active:translate-y-[0px] hover:bg-[#333345] active:border-0 translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        <img
          src="/graphic/warmup/plus.svg"
          className="w-[8px] mr-[5px] translate-y-[0px]"
          alt=""
        />{" "}
        Get HTML Sitemap
      </p>
    </div>
  );
};


const Table1 = ({ tableData }) => {
  const arr = [1, 2, 3];
  const {title, is_optimized,optimized_at} =  tableData;

  const [selected, setSelected] = useState([]);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] border-t-[1px]  border-[#ebebeb] mt-[10px] mobile:pb-[10px] laptop:pb-[0] overflow-x-auto overflow-y-hidden scroll-x-cool"
    >
      <div className="mobile:w-[1200px] laptop:w-[100%]">
        <TableHeader1 />
        {tableData.map((item, i) => {
          return <TableItem1 key={i} last={i === arr.length - 1} item={item} />;
        })}
      </div>
    </div>
  );
};

const TableHeader1 = ({ change }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] px-[10px] flex h-[28px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[40.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Name
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[30.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Optimized At
      </div>
      {/* <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[10px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        CDN Bandwidth (MiB)
      </div> */}
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[20.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Status
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[12.5%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >

      </div>

    </div>
  );
};

const Status = ({ i }) => {
  return (
    <div
      className="h-[22px] flex items-center px-[9.5px] justify-between rounded-[23px] "
      style={{
        backgroundColor:
          i === 1 ? "#38f8ab31" : i === 2 ? "#ffcc6538" : "#ff465c38",
      }}
    >
      <div
        className="w-[6px] h-[6px] shrink-0 rounded-[50%]"
        style={{
          backgroundColor:
            i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
        }}
      ></div>
      <p
        className="text-[11px] tracking-wide ml-[5px]"
        style={{
          color: i === 1 ? "#0FE38F" : i === 2 ? "#FFCB65" : "#FF465C",
        }}
      >
        {i === 1 ? "Optimized" : i === 2 ? "Incomplete" : "Disconnected"}
      </p>
    </div>
  );
};

const TableItem1 = ({ last, item }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);

  return (
    <div
      style={{
        border: last && "0px !important",

        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] flex px-[10px] h-[45px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[40.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        {item?.title}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30.5%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        {item?.optimized_at ? new Date(item.optimized_at).toLocaleString() : ''}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[20.5%] text-[14px] px-[15px]  leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        <Status i= {item?.is_optimized === true ? 1 : 2} />
      </div>

    </div>
  );
};

const CacheWarmup = ({ setShow }) => {
  const [enabled, setEnabled] = useState(false);
  const [pageOptimizationData, updatePageOptimizationData] = useState({});
  const dark = useSelector((state) => state.home.dark);
   const [loader, toggleLoader] = useState(false);
  const dispatch = useDispatch();
  const appURL = appURLs();
  const pageOptimizationValue = useSelector((state) => state.toggles?.pageOptimization);

  const handleOptimizePage = async() =>{
console.log("working.....",)
    // try {
    //   toggleLoader(true);
    //   const res = await GetAxiosConfig(`api/dashboard/fetch-page-optimization-data`);
    //   toggleLoader(false);

    //   const resData = res?.data;
    //   if(resData?.status === 200){
      dispatch(setToggle({ key: "pageOptimization", value: !pageOptimizationValue }));
    //     const pageDataObj = resData?.pageData;
    //     updatePageOptimizationData(pageDataObj)
    //   } else {
    //     return toast.error("Please try again");
    //   }
    // } catch (error) {
    //   toggleLoader(false);
    //   console.error("Error fetching user profile data:", error);
    // }
  }

  const fetchPageOptimizationData = async () => {

    try {
      toggleLoader(true);
      const res = await GetAxiosConfig(`api/dashboard/fetch-page-optimization-data`);
      toggleLoader(false);

      const resData = res?.data;
      if(resData?.status === 200){
        const pageDataObj = resData?.pageData;
        updatePageOptimizationData(pageDataObj)
      } else {
        return toast.error("Please try again");
      }
    } catch (error) {
      toggleLoader(false);
      console.error("Error fetching user profile data:", error);
    }

  };

  useEffect(() => {
    fetchPageOptimizationData();
  }, [])
  return (
    <>
    {
      loader ?
      <AnimatedLoader /> :
  
      <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
        <TitleManager title="pages-optimization" conicalURL="pages-optimization" />

        <div className="w-[100%] h-[50px] shrink-0"></div>
        <div
          style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
          className="w-[100%] h-[100%] flex flex-col items-center overflow-y-auto pb-[30px] scroll-bar-cool111 bg-[#FAFAFC]  laptop:px-[80px] desktop:px-[80px] mobile:px-[10px]"
        >
          <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
            <div className="w-[100%] pt-[30px]">
              <div className="flex justify-between mb-[20px] h-[34px] items-center w-[100%]">
                <h1
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[24px] font-bold tracking-wide "
                >
                  Page Optimization
                </h1>
                {/* {enabled && (
                  <div className="w-[120px] h-[34px] text-[#fff] cursor-pointer mt-[18px] rounded-[3px] flex items-center justify-center bg-[#000]">
                    <h1 className="text-[11px] items-center flex font-medium">
                      <img
                        src="/graphic/warmup/web.svg"
                        className="w-[12px] mr-[5px] translate-y-[0px]"
                        alt=""
                      />{" "}
                      HTML Sitemap
                    </h1>
                  </div>
                )} */}
              </div>
              <div className="w-[100%] laptop:flex justify-between">
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="laptop:w-[32%] mobile:w-[100%] mobile:mb-[10px]  px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                >
                  <div className="flex justify-between items-center">
                    <p
                      style={{
                        color: dark ? "#ffffff74" : "#0a0a187e",
                      }}
                      className="text-[#0a0a187e] text-[16px] tracking-wide font-bold"
                    >
                      Total No. Pages
                    </p>
                    <Tooltip text="This statement serves to indicate the count of pages" />
                  </div>
                  <div className="flex mt-[6px] items-center">
                    <p
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[30px] font-semibold "
                    >
                      {pageOptimizationData && pageOptimizationData?.totalPage}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="laptop:w-[32%] mobile:w-[100%] mobile:mb-[10px]  px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                >
                  <div className="flex justify-between items-center">
                    <p
                      style={{
                        color: dark ? "#ffffff74" : "#0a0a187e",
                      }}
                      className="text-[#0a0a187e] text-[16px] tracking-wide font-bold"
                    >
                      No of Optimized pages
                    </p>
                    <Tooltip text="This indicates the number of pages optimized by TurboBoost." />
                  </div>
                  <div className="flex mt-[6px] items-center">
                    <p
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[30px] font-semibold "
                    >
                      {pageOptimizationData && pageOptimizationData?.optimizedPageCoun}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="laptop:w-[32%] mobile:w-[100%] mobile:mb-[10px]  px-[15px] py-[14px] h-[100%] bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                >
                  <div className="flex justify-between items-center">
                    <p
                      style={{
                        color: dark ? "#ffffff74" : "#0a0a187e",
                      }}
                      className="text-[#0a0a187e] text-[16px] tracking-wide font-bold"
                    >
                      Pending pages
                    </p>
                    <Tooltip text="This indicates the number of pages pending optimization." />
                  </div>
                  <div className="flex mt-[6px] items-center">
                    <p
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[30px] font-semibold "
                    >
                      {pageOptimizationData && pageOptimizationData?.notOptimizedPage}
                    </p>
                  </div>
                </div>
              </div>
              <div className="laptop:flex  justify-between w-[100%] mt-[18px]">
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className="laptop:w-[66%] mobile:w-[100%]   py-[14px]  bg-[#fff] border-[1px]  rounded-[8px]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] px-[15px] font-bold tracking-wide "
                  >
                    Page Optimization Status
                  </h1>
                  <div className="flex px-[15px] justify-between mt-[4px] items-center">
                    <p
                      style={{
                        color: dark ? "#ffffff74" : "#0a0a187e",
                      }}
                      className="text-[14px] tracking-wide font-medium text-[#0a0a186f]"
                    >
                      When TurboBoost is enabled, it will minify the HTML by removing extra whitespace.
                    </p>
                    {/* <Toggle
                      value={!enabled}
                      setValue={(e) => {
                        setEnabled(!enabled);
                      }}
                    /> */}

                    <ToggleButton toggleValue={pageOptimizationValue} handlingToggle={handleOptimizePage}  toggleKey="someKey" />

                  </div>
                  <div
                    style={{
                      borderColor: dark ? "#1F2329" : "#ebebeb",
                    }}
                    className="w-[100%] laptop:flex justify-between border-t-[1px] px-[15px] border-[#ebebeb] mt-[8px]"
                  >
                    {/* <div className="laptop:w-[49%] mobile:w-[100%] pt-[13px] flex flex-col justify-between">
                      <div>
                        <h1
                          style={{
                            color: dark ? "#fff" : "#000",
                          }}
                          className="text-[16px] font-bold tracking-wide "
                        >
                          Home Page URL
                        </h1>
                        <p
                          style={{
                            color: dark ? "#ffffff74" : "#0a0a187e",
                          }}
                          className="text-[14px] mt-[4px] tracking-wide  text-[#0a0a186f]"
                        >
                          Specify a URL
                        </p>
                      </div>
                      <input
                        style={{
                          color: dark ? "#fff" : "#000",
                          borderColor: dark ? "#1F2329" : "#ebebeb",
                        }}
                        type="text"
                        className="w-[100%] h-[34px] mt-[4px] rounded-[4px] bg-transparent border-[1px] border-[#ebebeb] outline-none mt-[5px] text-[13px] font-medium px-[10px] "
                      />
                    </div>
                    <div className="laptop:w-[49%] mobile:w-[100%] h-[100%] pt-[13px] flex flex-col justify-between">
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[16px] font-bold tracking-wide flex"
                      >
                        Sitemap URL
                        {/* <div
                          onClick={() => {
                            dispatch(setUpgradePopUpShow(true));
                          }}
                          className="bg-[#754ffe33]  cursor-pointer text-[#754FFE] ml-[10px] font-medium tracking-wide h-[18px] rounded-[3px] flex items-center text-[9px] px-[10px] py-[7px] "
                        >
                          <img
                            src="/ss.svg"
                            className="w-[10px] mr-[4px] "
                            alt=""
                          />
                          <span>Get Feature</span>
                        </div> */}
                    {/* </h1>
                      <p
                        style={{
                          color: dark ? "#ffffff74" : "#0a0a187e",
                        }}
                        className="text-[14px] mt-[4px] tracking-wide  text-[#0a0a186f]"
                      >
                        Please specify a URL for your sitemap (must be in XML
                        format)
                      </p>
                      <input
                        type="text"
                        style={{
                          color: dark ? "#fff" : "#000",
                          borderColor: dark ? "#1F2329" : "#ebebeb",
                        }}
                        className="w-[100%] mt-[4px] h-[34px] rounded-[4px] border-[1px] bg-transparent
                         border-[#ebebeb] outline-none mt-[5px] text-[13px] font-medium px-[10px] "
                      />
                    </div>  */}
                    {pageOptimizationData && pageOptimizationData?.pages?.length === 0 ? "" : <Table1 tableData = {pageOptimizationData?.pages} />}

                  </div>
                </div>
                <div className="laptop:w-[32%] mobile:mt-[10px] laptop:mt-[0]  mobile:w-[100%] ">
                  <div
                    style={{
                      backgroundColor: dark ? "#111317" : "#fff",
                      borderColor: dark ? "#1F2329" : "#ebebeb",
                    }}
                    className="w-[100%]  px-[15px] py-[14px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                  >
                    <div className="flex justify-between">
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[20px] font-bold tracking-wide "
                      >
                        Page Optimization Details
                      </h1>
                      <div
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="flex text-[14px] font-medium items-center"
                      >
                        {pageOptimizationValue ? (
                          <>
                            <img
                              src="/graphic/warmup/elli1.svg"
                              className="mr-[3px] w-[14px]"
                              alt=""
                            />
                            Enabled
                          </>
                        ) : (
                          <>
                            <img
                              src="/graphic/warmup/elli.svg"
                              className="mr-[3px] w-[14px]"
                              alt=""
                            />
                            Disabled
                          </>
                        )}
                      </div>
                    </div>

                    {/* <div className="w-[100%] h-[38px] hover:bg-[#2FE49C] cursor-pointer mt-[18px] rounded-[3px] flex items-center justify-center bg-[#38F8AC]">
                    <h1 className="text-[14px] items-center flex font-medium">
                      <img
                        src="/graphic/warmup/play.svg"
                        className="w-[8px] mr-[5px] translate-y-[0px]"
                        alt=""
                      />{" "}
                      Start Optimizations
                    </h1>
                  </div> */}
                    <Button />
                  </div>
                  {/* <div
                    style={{
                      color: dark ? "#fff" : "#000",
                      borderColor: dark ? "#1F2329" : "#ebebeb",
                      backgroundColor: dark ? "#111317" : "#fff",
                    }}
                    className="w-[100%] mt-[10px]  px-[15px] py-[14px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
                  >
                    {/* <div className="flex items-center">
                      <h1 className="text-[20px] font-bold tracking-wide ">
                        Generate Sitemap
                      </h1>
                      <div
                        onClick={() => {
                          dispatch(setUpgradePopUpShow(true));
                        }}
                        className="bg-[#754ffe33] cursor-pointer text-[#754FFE] ml-[10px] font-medium tracking-wide h-[22px] rounded-[3px] flex items-center text-[11px] px-[10px] py-[7px] "
                      >
                        <img
                          src="/ss.svg"
                          className="w-[11px] mr-[4px] "
                          alt=""
                        />
                        <span>Get Feature</span>
                      </div> */}
                  {/* <div className="bg-[#000] ml-[5px] font-medium tracking-wide h-[24px] rounded-[3px] flex items-center text-[13px] px-[10px] py-[4px] text-[#fff]">
                          <img
                            src="/graphic/warmup/lock.svg"
                            className="w-[10px] mr-[4px] "
                            alt=""
                          />
                          <span className="translate-y-[1px]">Pro</span>
                        </div> */}
                  {/* </div> */}
                  {/* <div
                    onClick={() => {
                      setShow(true);
                    }}
                    className="w-[100%] h-[38px] hover:bg-[#333345] text-[#fff] cursor-pointer mt-[18px] rounded-[3px] flex items-center justify-center bg-[#000]"
                  >
                    <h1 className="text-[14px] items-center flex font-medium">
                      <img
                        src="/graphic/warmup/plus.svg"
                        className="w-[8px] mr-[5px] translate-y-[0px]"
                        alt=""
                      />{" "}
                      Get HTML Sitemap
                    </h1>
                  </div> */}
                  {/* <Button1
                      onClick={() => {
                        setShow(true);
                      }}
                    />
                  </div>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
};

export default CacheWarmup;
