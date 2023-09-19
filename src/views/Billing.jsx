import React, { useEffect, useState } from "react";
import HomeLayout from "../layouts/index/index";
import { useSelector } from "react-redux";

const Table1 = ({ setSelected1 }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arrrrr = [
    {
      title: "Optimized by TurboBoost Badge",
      free: true,
      starter: false,
      growth: false,
      pro: false,
    },
    {
      title: "Built-in Global CDN",
      free: true,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Image Optimization Stack",
      free: true,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Advanced Caching Machanism",
      free: true,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Fast and Easy Setup",
      free: true,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "24/7 Support",
      free: false,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "All-in-one Performance Optimization",
      free: false,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Image Lazy Loading",
      free: false,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Critical CSS",
      free: false,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Delay Resource Loading",
      free: false,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Cache Warmup",
      free: false,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Lazy Load Hidden Images",
      free: false,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Combine CSS & JS",
      free: false,
      starter: true,
      growth: true,
      pro: true,
    },
    {
      title: "Excluded Resources",
      free: false,
      starter: false,
      growth: true,
      pro: true,
    },
    {
      title: "Image Optimization",
      free: false,
      starter: false,
      growth: true,
      pro: true,
    },
    {
      title: "iFrame Lazy Loading",
      free: false,
      starter: false,
      growth: true,
      pro: true,
    },
    {
      title: "Remove Unused CSS",
      free: false,
      starter: false,
      growth: true,
      pro: true,
    },
    {
      title: "Adaptive Image Subsetting",
      free: false,
      starter: false,
      growth: true,
      pro: true,
    },
    {
      title: "Generated Sitemap",
      free: false,
      starter: false,
      growth: true,
      pro: true,
    },

    {
      title: "Font Subsettings",
      free: false,
      starter: false,
      growth: true,
      pro: true,
    },
    {
      title: "Optimize Ads",
      free: false,
      starter: false,
      growth: true,
      pro: true,
    },
  ];
  const [selected, setSelected] = useState([]);

  return (
    <div className="w-[100%] border-[#ebebeb] mt-[0px] mobile:pb-[10px] laptop:pb-[0] overflow-x-auto overflow-y-hidden scroll-x-cool">
      <div className="mobile:w-[500px] laptop:w-[100%]">
        <TableHeader1 />
        <TableItem1
          title="Page Views Per Month"
          free="5,000"
          starter="50,000"
          growth="200,000"
          pro="1,000,000"
        />
        <TableItem1
          title="CND Bandiwth Per Month"
          free="1GB"
          starter="25GB"
          growth="100GB"
          pro="500GB"
        />
        {arrrrr.map((item, i) => {
          return (
            <TableItem2
              key={i}
              title={item.title}
              free={item.free}
              starter={item.starter}
              growth={item.growth}
              pro={item.pro}
            />
          );
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
      style={{ borderColor: dark ? "#1F2329" : "#ebebeb" }}
      className="w-[100%] px-[10px] flex h-[30px] border-b-[1px] border-[#ebebeb]"
    >
      <div className="w-[30%] text-[16px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"></div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[18%] text-[16px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
      >
        Free
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[18%] text-[16px] px-[15px]  cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
      >
        Starter
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[18%] text-[16px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
      >
        Growth
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[16%] text-[16px] px-[15px]  cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
      >
        Pro
      </div>
    </div>
  );
};

const TableItem1 = ({ last, free, starter, growth, pro, title }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] flex px-[10px] h-[45px] border-b-[1px] border-[#ebebeb]"
    >
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30%] text-[16px] px-[15px] text-[#000]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
      >
        {title}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[18%] text-[14px] px-[15px] text-[#0a0a1876]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
      >
        {free}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[18%] text-[14px] px-[15px] text-[#0a0a1876]   cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
      >
        {starter}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[18%] text-[14px] px-[15px] text-[#0a0a1876]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
      >
        {growth}
      </div>
      <div
        style={{
          color: dark ? "#fff" : "#0a0a1876",
        }}
        className="w-[16%] text-[14px] px-[15px] text-[#0a0a1876]   cursor-pointer leading-[14px] tracking-wide ] font-bold flex h-[100%] items-center"
      >
        {pro}
      </div>
    </div>
  );
};
const TableItem2 = ({ last, free, starter, growth, pro, title }) => {
  const [check, setCheck] = useState(false);
  const dark = useSelector((state) => state.home.dark);
  const clr = dark ? "#1F2329" : "#ebebeb";
  return (
    <div
      style={{
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="w-[100%] flex px-[10px] h-[45px] border-b-[1px] "
    >
      <div
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="w-[30%] text-[16px] px-[15px] text-[#000]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
      >
        {title}
      </div>
      <div className="w-[18%] text-[14px] px-[15px] text-[#0a0a1876]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center">
        {free ? (
          <img
            src="/graphic/bill/check.svg"
            className="w-[15px] ml-[1px]"
            alt=""
          />
        ) : (
          <img
            src="/graphic/bill/cross.svg"
            className="w-[12px] ml-[1px]"
            alt=""
          />
        )}
      </div>
      <div className="w-[18%] text-[11px] px-[15px] text-[#0a0a1876]   cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center">
        {starter ? (
          <img
            src="/graphic/bill/check.svg"
            className="w-[15px] ml-[1px]"
            alt=""
          />
        ) : (
          <img
            src="/graphic/bill/cross.svg"
            className="w-[12px] ml-[1px]"
            alt=""
          />
        )}
      </div>
      <div className="w-[18%] text-[11px] px-[15px] text-[#0a0a1876]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center">
        {growth ? (
          <img
            src="/graphic/bill/check.svg"
            className="w-[15px] ml-[1px]"
            alt=""
          />
        ) : (
          <img
            src="/graphic/bill/cross.svg"
            className="w-[12px] ml-[1px]"
            alt=""
          />
        )}
      </div>
      <div className="w-[16%] text-[11px] px-[15px] text-[#0a0a1876]   cursor-pointer leading-[14px] tracking-wide ] font-bold flex h-[100%] items-center">
        {pro ? (
          <img
            src="/graphic/bill/check.svg"
            className="w-[15px] ml-[1px]"
            alt=""
          />
        ) : (
          <img
            src="/graphic/bill/cross.svg"
            className="w-[12px] ml-[1px]"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

const Billing = () => {
  const [selected, setSelected] = useState(0);
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
      <div className="w-[100%] h-[50px] shrink-0"></div>
      <div
        style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
        className="w-[100%] h-[100%] flex flex-col items-center  overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] mobile:px-[10px] laptop:px-[80px]"
      >
        <div className="w-[100%] max-w-[1920px] min-h-[100vh]">
          <h1
            style={{
              color: dark ? "#fff" : "#000",
            }}
            className="text-[20px] font-bold tracking-wide text-center pt-[30px]"
          >
            Plans and Billing
          </h1>
          <h1 className="text-[14px] font-medium text-[#696e7ea8] tracking-wide text-center mt-[2px]">
            Speed up your website effortlessly, we offer a 7-day trial
          </h1>
          <div className="w-[100%] mt-[15px] flex items-center justify-center">
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className="flex w-[200px] h-[40px]  border-[1px]   rounded-[4px] px-[3px] py-[3px]"
            >
              <div
                onClick={() => {
                  setSelected(0);
                }}
                style={{
                  backgroundColor: selected === 0 ? "#18df903f" : "",
                  color: selected === 0 ? "#0FE38F" : "#85858C",
                }}
                className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[14px] font-medium flex items-center justify-center tracking-wide"
              >
                Monthly
              </div>
              <div
                onClick={() => {
                  setSelected(1);
                }}
                style={{
                  backgroundColor: selected === 1 ? "#18df903f" : "",
                  color: selected === 1 ? "#0FE38F" : "#85858C",
                }}
                className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[14px] font-medium flex items-center justify-center tracking-wide"
              >
                Annually
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-[20px] grid laptop:grid-cols-4 mobile:gap-y-[10px] laptop:gap-[20px]">
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className=" bg-[#fff] border-[1px] border-[#EBEBEB] py-[12px] mobile:mb-[3px] laptop:mb-[30px] rounded-[8px]"
            >
              <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[20px]  px-[17px] font-bold tracking-wide"
              >
                Free
              </h1>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px] h-[42px] px-[17px] text-[#0a0a187a] font-medium tracking-wide"
              >
                Try out TurboBoost on a limited plan
              </p>
              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="w-[100%] leading-[32px] px-[17px] relative mt-[10px] shrink-0 text-[32px] font-bold "
              >
                {selected === 0 ? "$0" : "$0 "}
                <span className="text-[14px] font-medium text-[#696e7e89]">
                  {" "}
                  /month
                </span>
              </div>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px]  px-[17px] mt-[14px] text-[#0a0a187a]  tracking-wide"
              >
                <span className="font-bold">5,000</span> page views/mo
              </p>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px]  px-[17px] text-[#0a0a187a]  tracking-wide"
              >
                <span className="font-bold">1.00GB</span> CDN bandwidth/mo
              </p>
              <div className="w-[100%] px-[17px] mt-[15px]">
                <div
                  style={{
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className={`w-[100%] h-[38px] text-[${
                    dark ? "#fff" : "#000"
                  }] hover:bg-[#38F8AC] hover:text-[#000] cursor-pointer rounded-[3px] border-[1px] border-[#ebebeb] text-[14px] font-bold text-[#000] tracking-wide flex items-center justify-center`}
                >
                  Downgrade from Growth
                </div>
              </div>
              <div className="w-[100%]  px-[17px] mt-[15px] pt-[15px] border-t-[1px] border-[#ebebeb]">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[14px] font-bold tracking-wide"
                >
                  Free Plan Includes
                </p>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    5,000 page views per month
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    1.00 GB CDN bandwidth per month
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Optimized by TurboBoost Badge
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Built-in global CDN
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Image Optimization Stack
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Advanced Caching Mechanism
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Fast and easy setup
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Basic Support
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className=" bg-[#fff] border-[1px] border-[#EBEBEB] py-[12px] mobile:mb-[3px] laptop:mb-[30px] rounded-[8px]"
            >
              <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[20px]  px-[17px] font-bold tracking-wide"
              >
                Starter
              </h1>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px] h-[42px]  px-[17px] text-[#0a0a187a] font-medium tracking-wide"
              >
                For very small businesses
              </p>
              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="w-[100%] relative px-[17px] mt-[10px] shrink-0 text-[32px] font-bold "
              >
                <div className="flex items-end">
                  {selected === 1 && (
                    <span className="text-[12px] italic mr-[10px] line-through	 text-[#b0b0b0] font-medium ">
                      $180
                    </span>
                  )}
                  <span className="leading-[36px]">
                    {selected === 0 ? "$15" : "$12.50"}
                  </span>
                  <span className="text-[14px] font-medium text-[#696e7e89]">
                    {" "}
                    /month
                  </span>
                </div>
                {/* {selected === 1 && (
                  <div className="absolute text-[12px] italic text-[#b0b0b0] font-medium top-[36px]">
                    $150 billed Annually
                  </div>
                )} */}
              </div>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px]  px-[17px] mt-[14px] text-[#0a0a187a]  tracking-wide"
              >
                <span className="font-bold">50,000 </span> page views/mo
              </p>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px]  px-[17px] text-[#0a0a187a]  tracking-wide"
              >
                <span className="font-bold">25GB </span> CDN bandwidth/mo
              </p>
              <div className="w-[100%] px-[17px] mt-[15px]">
                <div
                  style={{
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className={`w-[100%] h-[38px] rounded-[3px] text-[${
                    dark ? "#fff" : "#000"
                  }]  hover:bg-[#38F8AC] hover:text-[#000] cursor-pointer border-[1px] border-[#ebebeb] text-[14px] font-bold text-[#000] tracking-wide flex items-center justify-center`}
                >
                  Downgrade from Growth
                </div>
              </div>
              <div className="w-[100%]  px-[17px] mt-[15px] pt-[15px] border-t-[1px] border-[#ebebeb]">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[14px] font-bold tracking-wide"
                >
                  Starter Plan Includes
                </p>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    50,000 page views per month
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    25 GB CDN bandwidth per month
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Built-in global CDN
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Image Optimization Stack
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Advanced Caching Mechanism
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    All-in-one performance optimization
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Image Lazy Loading
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Critical CSS
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Delay Resource Loading
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Cache Warmup
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Lazy Load hidden images
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Combine CSS & JS
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Fast and easy setup
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Expert Support
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className=" bg-[#fff] border-[1px] border-[#EBEBEB] py-[12px] mobile:mb-[3px] laptop:mb-[30px] rounded-[8px]"
            >
              <div className="flex w-[100%] items-center px-[17px]">
                <h1
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[20px]   font-bold tracking-wide"
                >
                  Growth
                </h1>
                <div className="text-[#0FE38F] bg-[#000] px-[14px] py-[6.5px] leading-[8px] rounded-[20px] ml-[9px] translate-y-[-1px] text-[12px]  tracking-wide font-medium flex items-center justify-center">
                  Most Popular
                </div>
              </div>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px] h-[42px] px-[17px] text-[#0a0a187a] font-medium tracking-wide"
              >
                Our most popular plan for growing brands
              </p>
              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="w-[100%] relative px-[17px] mt-[10px] shrink-0 text-[32px] font-bold "
              >
                <div className="flex items-end">
                  {selected === 1 && (
                    <span className="text-[12px] italic mr-[10px] line-through	 text-[#b0b0b0] font-medium ">
                      $480
                    </span>
                  )}
                  <span className="leading-[36px]">
                    {selected === 0 ? "$40" : "$33.30 "}
                  </span>
                  <span className="text-[14px] font-medium text-[#696e7e89]">
                    {" "}
                    /month
                  </span>
                </div>
                {selected === 1 && (
                  <div className="absolute text-[12px] italic text-[#b0b0b0] font-medium top-[36px]"></div>
                )}
              </div>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px]  px-[17px] mt-[16px] text-[#0a0a187a]  tracking-wide"
              >
                <span className="font-bold">200,000 </span> page views/mo
              </p>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px]  px-[17px] text-[#0a0a187a]  tracking-wide"
              >
                <span className="font-bold">100GB </span> CDN bandwidth/mo
              </p>
              <div className="w-[100%] px-[17px] mt-[15px]">
                <div
                  style={{
                    backgroundColor: "#18df903f",
                    color: "#0FE38F",
                  }}
                  className="w-[100%] h-[38px] rounded-[3px] border-[1px] bg-[#38f8ab27] hover:text-[#fff]  border-[#38f8ab27] text-[14px] font-bold text-[#fff] tracking-wide flex items-center justify-center"
                >
                  Current Plan
                </div>
              </div>
              <div className="w-[100%]  px-[17px] mt-[15px] pt-[15px] border-t-[1px] border-[#ebebeb]">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[14px] font-bold tracking-wide"
                >
                  Growth Plan Includes
                </p>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    200,000 page views per month
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    100 GB CDN bandwidth per month
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Built-in global CDN
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Image Optimization Stack
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Advanced Caching Mechanism
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    All-in-one performance optimization
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Image Lazy Loading
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Critical CSS
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Delay Resource Loading
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Cache Warmup
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Lazy Load hidden images
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Combine CSS & JS
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Optimize Ads
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Image Optimization
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    iFrame lazy loading
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Remove unused CSS
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Adaptive Image Sizing
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Generated sitemap
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Fast and easy setup
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    24/7 Support
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: dark ? "#111317" : "#fff",
                borderColor: dark ? "#1F2329" : "#ebebeb",
              }}
              className=" bg-[#fff] border-[1px] border-[#EBEBEB] py-[12px] mobile:mb-[3px] laptop:mb-[30px] rounded-[8px]"
            >
              <h1
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="text-[20px]  px-[17px] font-bold tracking-wide"
              >
                Pro
              </h1>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px] h-[42px] px-[17px] text-[#0a0a187a] font-medium tracking-wide"
              >
                Best for big brands
              </p>
              <div
                style={{
                  color: dark ? "#fff" : "#000",
                }}
                className="w-[100%] relative px-[17px] mt-[10px] shrink-0 text-[32px] font-bold "
              >
                <div className="flex items-end">
                  {selected === 1 && (
                    <span className="text-[12px] italic mr-[10px] line-through	 text-[#b0b0b0] font-medium ">
                      $1800
                    </span>
                  )}
                  <span className="leading-[36px]">
                    {selected === 0 ? "$150" : "$125"}
                  </span>
                  <span className="text-[14px] font-medium text-[#696e7e89]">
                    {" "}
                    /month
                  </span>
                </div>
                {/* {selected === 1 && (
                  <div className="absolute text-[12px] italic text-[#b0b0b0] font-medium top-[36px]">
                    $1500 billed Annually
                  </div>
                )} */}
              </div>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px]  px-[17px] mt-[14px] text-[#0a0a187a]  tracking-wide"
              >
                <span className="font-bold">1,000,000 </span> page views/mo
              </p>
              <p
                style={{
                  color: dark ? "#ffffff74" : "#0a0a187e",
                }}
                className="text-[14px]  px-[17px] text-[#0a0a187a]  tracking-wide"
              >
                <span className="font-bold">500GB </span> CDN bandwidth/mo
              </p>
              <div className="w-[100%] px-[17px] mt-[15px]">
                <div
                  style={{
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className={`w-[100%] h-[38px] rounded-[3px] text-[${
                    dark ? "#fff" : "#000"
                  }] hover:bg-[#38F8AC] hover:text-[#000] cursor-pointer border-[1px] border-[#ebebeb] text-[14px] font-bold text-[#000] tracking-wide flex items-center justify-center`}
                >
                  Upgrade to Pro
                </div>
              </div>
              <div className="w-[100%]  px-[17px] mt-[15px] pt-[15px] border-t-[1px] border-[#ebebeb]">
                <p
                  style={{
                    color: dark ? "#fff" : "#000",
                  }}
                  className="text-[14px] font-bold tracking-wide"
                >
                  Pro Plan Includes
                </p>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    1,000,000 page views per month
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    500 GB CDN bandwidth per month
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Built-in global CDN
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Image Optimization Stack
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Advanced Caching Mechanism
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    All-in-one performance optimization
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Image Lazy Loading
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Critical CSS
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Delay Resource Loading
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Cache Warmup
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Lazy Load hidden images
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Combine CSS & JS
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Optimize Ads
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Image Optimization
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    iFrame lazy loading
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Remove unused CSS
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Adaptive Image Sizing
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Font subsetting
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Excluded resources
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Generated sitemap
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    Fast and easy setup
                  </p>
                </div>
                <div className="w-[100%] mt-[10px] flex justify-between">
                  <img
                    src="/graphic/status/check.svg"
                    className="w-[13px] mr-[10px] shrink-0"
                    alt=""
                  />
                  <p
                    style={{
                      color: dark ? "#ffffff74" : "#0a0a187e",
                    }}
                    className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
                  >
                    24/7 Support
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-[20px] font-bold tracking-wide mt-[20px] text-center pt-[0px]">
            Compare Plans
          </h1>
          <h1 className="text-[14px] font-medium text-[#696e7ea8] tracking-wide text-center mt-[2px]">
            Choose a plan that’s right for you and leverage everything
            TurboBoost has to offer.
          </h1>
          <div
            style={{
              backgroundColor: dark ? "#111317" : "#fff",
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            className=" w-[100%] mt-[15px] bg-[#fff] border-[1px] border-[#EBEBEB] pt-[12px] mb-[30px] rounded-[8px]"
          >
            <Table1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
