import React, { useState } from "react";
import HomeLayout from "../layouts/index/index";
import Toggle from "../utils/toggle";
import { useSelector } from "react-redux";

const Button = ({ onClick }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className={`w-[100px] ${!dark ? "bg-[#ebebeb] " : "bg-[#1c1f26]"} 
        h-[32px]   cursor-pointer rounded-[4px] border-[1px] ${
          dark ? "border-[#1F2329]" : "border-[#ebebeb] "
        } flex items-center justify-center`}
    >
      <p
        className={`text-[${
          dark ? "#fff" : "#000"
        }]   f2 text-[12px]  border-[1px]  ${
          dark ? "border-[#1F2329]" : "border-[#ebebeb]"
        } ${
          dark ? "bg-[#111317]" : "bg-[#fff]"
        } rounded-[4px] active:translate-y-[0px] hover:font-bold active:border-0 translate-y-[-2px] translate-x-[1px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Connect
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
      className={`w-[100px] ${!dark ? "bg-[#ebebeb] " : "bg-[#1c1f26]"}

        h-[32px]   cursor-pointer rounded-[4px] border-[1px] ${
          dark ? "border-[#1F2329]" : "border-[#ebebeb] "
        } flex items-center justify-center`}
    >
      <p
        className={`${
          dark ? "text-[#fff]" : "text-[#ff0000]"
        }   f2 text-[12px]  border-[1px]  ${
          dark ? "border-[#1F2329]" : "border-[#ebebeb]"
        } ${
          dark ? "bg-[#111317]" : "bg-[#fff]"
        } rounded-[4px] active:translate-y-[0px] hover:font-bold active:border-0 translate-y-[-2px] translate-x-[1px] active:translate-x-0 w-[100%] flex items-center justify-center h-[100%] tracking-wide font-medium `}
      >
        Disconnect
      </p>
    </div>
  );
};

const IntegrationItem = ({
  connectClick,
  src,
  title,
  sub,
  connected,
  connect,
}) => {
  const dark = useSelector((state) => state.home.dark);
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#111317" : "#fff",
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className="px-[15px] bg-[#fff] border-[1px] border-[#ebebeb] rounded-[9px] py-[18px] h-[190px] "
    >
      <div className="flex justify-between w-[100%]">
        <img src={src} className="w-[50px] rounded-[7px]" alt="" />
        {connect ? (
          <div
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            style={{
              color: connect ? (dark ? "#fff" : "#000") : "#FF465C",
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            onClick={() => {
              connectClick();
            }}
            className="w-[100px] rounded-[3px] text-[14px]  hover:bg-[#38F8AC] cursor-pointer font-medium h-[38px] border-[1px] border-[#ebebeb] flex items-center justify-center"
          >
            Connect
          </div>
          // <Button
          //   onClick={() => {
          //     connectClick();
          //   }}
          // />
        ) : (
          <div
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            style={{
              borderColor: dark ? "#1F2329" : "#ebebeb",
            }}
            onClick={() => {
              connectClick();
            }}
            className="w-[100px] rounded-[3px] text-[14px] hover:bg-[#FF465C] text-[#FF465C] hover:text-[#fff]  cursor-pointer font-medium h-[38px] border-[1px] border-[#ebebeb] flex items-center justify-center"
          >
            Disconnect
          </div>
          // <Button1
          //   onClick={() => {
          //     connectClick();
          //   }}
          // />
        )}
      </div>
      <h1
        style={{
          color: dark ? "#fff" : "#000",
        }}
        className="text-[20px] font-bold tracking-wide mt-[10px] items-center flex"
      >
        {title}{" "}
        {connected && (
          <div
            className="h-[22px] flex items-center px-[9.5px] ml-[8px] justify-between rounded-[23px] "
            style={{
              backgroundColor: "#38f8ab31",
            }}
          >
            <p
              className="text-[14px] translate-y-[-1px] tracking-wide "
              style={{
                color: "#0FE38F",
              }}
            >
              Connected
            </p>
          </div>
        )}
      </h1>
      <p
        style={{
          color: dark ? "#ffffff74" : "#0a0a187e",
        }}
        className="text-[14px] font-bold text-[#0a0a1876] tracking-wide mt-[2px]"
      >
        {sub}
      </p>
    </div>
  );
};

const Integrations = ({ setShow }) => {
  const dark = useSelector((state) => state.home.dark);
  const [selected, setSelected] = useState(0);
  return (
    <>
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
            <div className="grid laptop:grid-cols-3 mt-[14px] gap-[20px] w-[100%]">
              <IntegrationItem
                src="/graphic/integrations/p1.png"
                title="TxtCart"
                connectClick={() => {
                  setShow(true);
                }}
                connect={true}
                sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
              />
              <IntegrationItem
                connected={true}
                src="/graphic/integrations/p2.png"
                title="Appstack"
                connectClick={() => {
                  setShow(true);
                }}
                connect={true}
                sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
              />
            </div>
            <div className="w-[100%] pt-[30px]">
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
                  onClick={() => {
                    setSelected(0);
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
                  }] ${dark?"hover:border-[#fff] hover:text-[#fff]":"hover:border-[#000] hover:text-[#000]"}  rounded-[3px] text-[12px] mr-[10px] cursor-pointer font-medium h-[34px] border-[1px] flex items-center justify-center`}
                >
                  All
                </div>
                <div
                  onClick={() => {
                    setSelected(1);
                  }}
                  style={{}}
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
                  }] ${dark?"hover:border-[#fff] hover:text-[#fff]":"hover:border-[#000] hover:text-[#000]"}  rounded-[3px] text-[12px] mr-[10px] cursor-pointer font-medium h-[34px] border-[1px] flex items-center justify-center`}
                >
                  Installed
                </div>
                <div
                  onClick={() => {
                    setSelected(2);
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
                  }]  ${dark?"hover:border-[#fff] hover:text-[#fff]":"hover:border-[#000] hover:text-[#000]"}  rounded-[3px] text-[12px] mr-[10px] cursor-pointer font-medium h-[34px] border-[1px] flex items-center justify-center`}
                >
                  Not Installed
                </div>
              </div>
              <div className="w-[100%] mt-[20px] grid laptop:grid-cols-3 gap-[20px] ">
                {selected === 0 && (
                  <>
                    <IntegrationItem
                      connected={true}
                      src="/graphic/integrations/p3.png"
                      title="HubSpot"
                      connectClick={() => {
                        setShow(true);
                      }}
                      connect={false}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      src="/graphic/integrations/p4.png"
                      title="Shopify"
                      connect={true}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      src="/graphic/integrations/p5.png"
                      title="Klaviyo"
                      connect={true}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />

                    <IntegrationItem
                      src="/graphic/integrations/p6.png"
                      title="Zapier"
                      connect={true}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      connected={true}
                      src="/graphic/integrations/p7.png"
                      title="Slack"
                      connect={false}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      connected={true}
                      src="/graphic/integrations/p8.png"
                      title="WooCommerce"
                      connectClick={() => {
                        setShow(true);
                      }}
                      connect={false}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      src="/graphic/integrations/p9.png"
                      title="TxtCart"
                      connectClick={() => {
                        setShow(true);
                      }}
                      connect={false}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      connected={true}
                      src="/graphic/integrations/p2.png"
                      title="Appstack"
                      connectClick={() => {
                        setShow(true);
                      }}
                      connect={true}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      src="/graphic/integrations/p9.png"
                      title="TxtCart"
                      connect={true}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                  </>
                )}
                {selected === 1 && (
                  <>
                    <IntegrationItem
                      connected={true}
                      src="/graphic/integrations/p3.png"
                      title="HubSpot"
                      connectClick={() => {
                        setShow(true);
                      }}
                      connect={false}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      src="/graphic/integrations/p4.png"
                      title="Shopify"
                      connect={true}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      src="/graphic/integrations/p5.png"
                      title="Klaviyo"
                      connect={true}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />

                    <IntegrationItem
                      src="/graphic/integrations/p6.png"
                      title="Zapier"
                      connect={true}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      connected={true}
                      src="/graphic/integrations/p7.png"
                      title="Slack"
                      connect={false}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      connected={true}
                      src="/graphic/integrations/p8.png"
                      title="WooCommerce"
                      connectClick={() => {
                        setShow(true);
                      }}
                      connect={false}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                  </>
                )}
                {selected === 2 && (
                  <>
                    <IntegrationItem
                      src="/graphic/integrations/p9.png"
                      title="TxtCart"
                      connectClick={() => {
                        setShow(true);
                      }}
                      connect={false}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      connected={true}
                      src="/graphic/integrations/p2.png"
                      title="Appstack"
                      connectClick={() => {
                        setShow(true);
                      }}
                      connect={true}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                    <IntegrationItem
                      src="/graphic/integrations/p9.png"
                      title="TxtCart"
                      connect={true}
                      connectClick={() => {
                        setShow(true);
                      }}
                      sub="Lorem ipsum dolor sit amet consectetur. Facilisi turpis neque aenean magna platea purus."
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
