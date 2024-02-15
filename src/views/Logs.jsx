import React, { useEffect, useState } from "react";
import useWidth from "../hooks/useWidth";
import { useSelector } from "react-redux";
import Chart1 from "../components/charts/chart2";
import Chart4 from "../components/charts/chart4";
import TitleManager from "../components/TitleManager";

import moment from 'moment';
import toast from "react-hot-toast";
import { GetAxiosConfig } from "../utils/axiosConfig.js";
import AnimatedLoader from "../components/loader/AnimatedLoader";

const Button = () => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className={`laptop:w-[170px]  mobile:w-[100%] ${!dark ? "bg-[#f3f3f3] " : "bg-[#1c1f26]"
        }
        
        h-[40px] mt-[20px]  cursor-pointer rounded-[4px]  flex items-center justify-center`}
    >
      <p
        className={`text-[${false ? "#fff" : "#000"}]   f2 text-[12px]   ${dark ? "bg-[#38F8AC]" : "bg-[#38F8AC]"
          } rounded-[4px] active:translate-y-[0px] hover:bg-[#2fe49c] active:border-0 translate-y-[0px] translate-x-[0px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Download Log (.csv)
      </p>
    </div>
  );
};


const Table1 = ({ pageViewDataArr }) => {

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
        {pageViewDataArr.map((item, i) => {
          return <TableItem1 key={i} s_no={i} item ={item} last={i === pageViewDataArr.length - 1} />;
        })}
      </div>
    </div>
  );
};

const TableHeader1 = () => {
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
        className="w-[10%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Page No
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[40%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Store Name
      </div>

      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[40%] text-[12px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        View At
      </div>
      
    </div>
  );
};

const TableItem1 = ({ last,s_no, item }) => {
 
  const dark = useSelector((state) => state.home.dark);
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
 
 const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
 const day = dateObj.getDate().toString().padStart(2, '0');
 const year = dateObj.getFullYear();
 const hour = dateObj.getHours().toString().padStart(2, '0');
 const minute = dateObj.getMinutes().toString().padStart(2, '0');
 const period = (dateObj.getHours() < 12) ? 'AM' : 'PM';

 const formattedDate = `${month}/${day}/${year} at ${hour}:${minute} ${period}`;
 return formattedDate;
}
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
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
        className="w-[10%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        {s_no+1}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[40%] text-[14px] px-[15px] leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        {item?.location}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[40%] text-[14px] px-[15px]  leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
       {item?.viewed_at && formatDate(item?.viewed_at)}
      </div>
    
    </div>
  );
};


const Table3 = ({ connectedWebsiteData }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dark = useSelector((state) => state.home.dark);
  const [selected, setSelected] = useState([]);

  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] border-t-[1px]  border-[#ebebeb] mt-[10px]"
    >
      <TableHeader3 />
      {connectedWebsiteData?.length && connectedWebsiteData.map((item, i) => {
        return <TableItem3 key={i} last={i === arr.length - 1} item = {item}/>;
      })}
    </div>
  );
};

const TableHeader3 = ({ change }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] px-[10px] flex h-[35px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[30%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Date
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[30%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Event
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[30%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Platform
      </div>
      <div
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="w-[20%] text-[14px] tracking-wide text-[#0a0a1876] px-[15px] font-bold flex h-[100%] items-center"
      >
        Version
      </div>
    </div>
  );
};

const TableItem3 = ({ last, item }) => {

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
        className="w-[30%] text-[14px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        { item?.connected_at && moment(item.connected_at).format('MMMM Do, HH:mm:ss z YYYY')}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30%] text-[14px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        { item?.event_type === 1 ? "Install" :"updated"} Plugin
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30%] text-[14px] px-[15px]  cursor-pointer leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
        { item?.platform ===1 ? "shopify" : "wordpress"}
        
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[20%] text-[14px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-semibold flex h-[100%] items-center"
      >
         6.1.1
        
      </div>
    </div>
  );
};

const Navigator = ({ current, setCurrent }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] h-[40px]   px-[5px] border-b-[1px] border-[#ebebeb] flex  items-center"
    >
      <div
        onClick={() => {
          setCurrent(0);
        }}
        className="h-[100%] cursor-pointer px-[10px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 0 && "2px solid #38F8AC",
            color: dark
              ? current === 0
                ? "#fff"
                : "#82828A"
              : current === 0
                ? "#000"
                : "#0a0a1876",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className=" translate-y-[0px]">Resource Usage</span>
        </div>
      </div>

      <div
        onClick={() => {
          setCurrent(2);
        }}
        className="h-[100%]  cursor-pointer px-[10px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 2 && "2px solid #38F8AC",
            color: dark
              ? current === 2
                ? "#fff"
                : "#82828A"
              : current === 2
                ? "#000"
                : "#0a0a1876",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[0px]">Connector History</span>
        </div>
      </div>
    </div>
  );
};

const InputDate = ({ updateCurrMonth}) => {
  const [curr, setCurr] = useState(1);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const list = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "Sept",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    const onpointerdown = () => {
      if (!hover) {
        setClicked(false);
      }
    };
    document.addEventListener("pointerdown", onpointerdown, false);
    return () => {
      document.removeEventListener("pointerdown", onpointerdown, false);
    };
  });

  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="flex mobile:mb-[5px] laptop:mb-0 items-center h-[100%]">
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="mobile:w-[100%] laptop:w-[110px] mr-[10px] relative  text-[12px] font-medium h-[30px]"
      >
        <div
          onClick={() => {
            setClicked(true);
          }}
          style={{
            borderColor: dark ? "#1F2329" : "#ebebeb",
            borderRadius: clicked ? "4px 4px 0 0" : "4px 4px 4px 4px",
          }}
          className="w-[100%] cursor-pointer pl-[10px] pr-[10px]  border-[1px]  border-[#ebebeb] h-[30px] flex justify-between items-center"
        >
          <img src="/graphic/logs/cal.svg" className="w-[10px]" alt="" />
          <p
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[12px] font-bold tracking-wide  text-[#000]"
          >
            {list[curr]}
          </p>
          <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
        </div>
        {clicked && (
          <div
            style={{
              color: dark ? "#fff" : "#000",
              backgroundColor: dark ? "#111317" : "#fff",
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="w-[100%] min-h-[10px] rounded-[2px]  py-[0px] border-[1px] border-t-0 border-[#ebebeb] absolute z-20 top-[29px] bg-[#fff]"
          >
            {list.map((item, i) => {
              return (
                <div
                  onMouseOver={() => {
                    setHover(true);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                  key={i}
                  style={{
                    backgroundColor:
                      i === curr
                        ? dark
                          ? "#000"
                          : "#ebebeb"
                        : dark
                          ? "#111317"
                          : "#fff",
                  }}
                  onClick={() => {
                    updateCurrMonth(i)
                    setClicked(false)
                    setCurr(i);
                  }}
                  className="w-[100%]  h-[30px]  flex items-center px-[10px] text-[11px] cursor-pointer"
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div style={{
        cursor:"pointer"
      }} onClick={()=>updateCurrMonth(1)} className="w-[30px] shrink-0 h-[30px] bg-[#0A0A18] flex rounded-[3px] items-center justify-center">
        <img src="/graphic/logs/refresh.svg" className="w-[15px]" alt="" />
      </div>
    </div>
  );
};

const CacheStatus = () => {
  const [current, setCurrent] = useState(0);
  const [pageViewData, updatePageViewData] = useState([]);
  const [loader, toggleLoader] = useState(false);
  const [currMonth, updateCurrMonth] = useState(1)
  const dark = useSelector((state) => state.home.dark);

  const [connectedWebsiteData, updateConnectedWebsiteData] = useState([]);

  const fetchConnectedWebsiteData = async () => {

    try {
      toggleLoader(true)
      const res = await  GetAxiosConfig(`api/dashboard/fetch-connected-website-data`);

      const resData = res?.data;
      if(resData?.status === 200){
        toggleLoader(false)
        const dataArr = resData?.conectedWebsite;
        updateConnectedWebsiteData(dataArr);
      } else if(resData.status === 403){
     
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');

    }else{
      toggleLoader(false);
      return toast.error("Please try again");
    }

    } catch (error) {
      toggleLoader(false)
      console.error("Error fetching user profile data:", error);
    }
  };

  const fetchPageViewData = async () => {
    try {
      toggleLoader(true)
      const res = await GetAxiosConfig(`api/dashboard/fetch-page-views-data`);
      const resJSON = res?.data;

      if (resJSON.status === 200) {
        toggleLoader(false)
        const pageViews = resJSON?.pageViewsArr;
        updatePageViewData(pageViews);
      } else if(resJSON.status === 403){
     
        localStorage.removeItem('authToken');
        window.location.replace('/login-shopify');

    }else{
      toggleLoader(false);
      return toast.error("Please try again");
    }
    } catch (error) {
      toggleLoader(false);
      console.error("Error fetching user profile data:", error);
    }
  };



  useEffect(() => {
      fetchPageViewData();
    fetchConnectedWebsiteData();
  }, [])

  return (
    loader ? <AnimatedLoader /> :
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <TitleManager title="Logs" conicalURL="logs" />

      <div className="w-[100%] h-[50px] shrink-0"></div>
      <div
        style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
        className="w-[100%] h-[100%] flex flex-col items-center overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] mobile:px-[10px] laptop:px-[80px]"
      >
        <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
          <div className="flex justify-between mb-[40px] pt-[40px] h-[34px] items-center w-[100%]">
            <h1
              style={{
                color: dark ? "#fff" : "#000",
              }}
              className="text-[24px] font-bold tracking-wide "
            >
              Logs
            </h1>
          </div>
          <div
            style={{
              backgroundColor: dark ? "#111317" : "#fff",
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className="w-[100%]   bg-[#fff] border-[1px] border-[#EBEBEB] mb-[30px] rounded-[8px]"
          >
            <Navigator current={current} setCurrent={setCurrent} />
            {current === 0 && (
              <>
                <div className="w-[100%] px-[15px] py-[15px]">
                  <div className="w-[100%] mb-[15px] flex mobile:flex-col laptop:flex-row laptop:items-center justify-between">
                    <h1
                      style={{
                        color: dark ? "#fff" : "#000",
                      }}
                      className="text-[20px] mobile:mb-[5px] laptop:mb-0 font-bold tracking-wide "
                    >
                      Pageviews
                    </h1>
                 
                    <InputDate updateCurrMonth={updateCurrMonth} />
                  </div>
              
                    <Chart1 currMonth={currMonth} />

                </div>
            
              </>
            )}
            {current === 1 && (
              <div className="w-[100%] px-[15px]  py-[15px]">
                <div className="w-[100%] mb-[15px] flex items-center justify-between">
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] font-bold tracking-wide "
                  >
                    API Events
                  </h1>
                  {/* <div className="flex items-center h-[100%]">
                    <div className="flex items-center h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#38F8AC" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Optimizations
                      </h1>
                    </div>
                    <div className="flex items-center ml-[10px] h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#FF465C" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Purge/Invalidate Requests
                      </h1>
                    </div>
                    <div className="flex items-center ml-[10px] h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#9963FE" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Tag Create Requests
                      </h1>
                    </div>
                    <div className="flex items-center ml-[10px] h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#F8B738" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Tag Delete Requests
                      </h1>
                    </div>
                    <div className="flex items-center ml-[10px] h-[100%]">
                      <div
                        className="w-[8px] h-[8px] rounded-[50%]"
                        style={{ backgroundColor: "#FF46CB" }}
                      ></div>
                      <h1
                        style={{
                          color: dark ? "#fff" : "#000",
                        }}
                        className="text-[14px] font-medium ml-[4px] text-[#000]"
                      >
                        Failure
                      </h1>
                    </div>
                  </div> */}
                  <InputDate />
                </div>
                {/* <img src="/graphic/logs/chart3.svg" alt="" /> */}
                <Chart4 />
              </div>
            )}
            {current === 2 && (
              <>
                <div className="flex justify-between px-[15px] pt-[20px] items-center">
                  <p
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] font-bold tracking-wide text-[#000]"
                  >
                    Connector History
                  </p>
                </div>
                <Table3 connectedWebsiteData={connectedWebsiteData} />
              </>
            )}
          </div>
          {current === 0 && (
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%] min-h-[10px] mb-[30px] mt-[20px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
            >
              <div className="flex mobile:flex-col laptop:flex-row justify-between px-[15px] pt-[20px] laptop:items-center">
                <div className="mobile:mb-[10px] laptop:mb-0">
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] font-bold tracking-wide text-[#0a0a1877]"
                  >
                    {pageViewData?.length} Page View{pageViewData?.length > 1 ? 's' : ''}
                  </p>
                </div>
                {/* <div className="laptop:w-[170px]  mobile:w-[100%] hover:bg-[#2FE49C] cursor-pointer mobile:mb-[10px] laptop:mb-0 h-[38px] bg-[#38F8AC] rounded-[3px] flex items-center justify-center text-[14px] font-bold tracking-wide">
                Download Log (.csv)
              </div> */}
                {/* <Button /> */}
              </div>
              
              <Table1 pageViewDataArr={pageViewData} />
            </div>
          )}
          {current === 1 && (
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="w-[100%] min-h-[10px] mb-[30px] mt-[20px]  bg-[#fff] border-[1px] border-[#EBEBEB] rounded-[8px]"
            >
              <div className="flex justify-between px-[15px] pt-[20px] items-center">
                <div>
                  <p
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] font-bold tracking-wide text-[#000]"
                  >
                    Results for: 2023-05-25
                  </p>
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] font-bold tracking-wide text-[#0a0a1877]"
                  >
                    1 Optimization, 0 Purge/Invalidate Requests, 1 Tag Create
                    Request, 0 Tag Delete Requests, 0 Failed Optimizations
                  </p>
                </div>
                <Button />
              </div>
              {/* <Table2 /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CacheStatus;
