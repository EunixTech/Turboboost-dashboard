import React, { useEffect, useRef, useState } from "react";
import ToggleButton from "../components/ToggleButton";
import useWidth from "../hooks/useWidth";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../static/countries";
import { setUpgradePopUpShow } from "../services/home";
import InputFields from "../components/InputFields";
import SaveButton from "../components/button/SaveButton";
import OptimizationModeCard from "../components/OptimizationModeCard";
import FeatureCard from "../components/FeatureCard";

const Navigator = ({ current, setCurrent }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div className="w-[100%] h-[30px]   px-[5px]  border-[#ebebeb] flex  items-center">
      <div
        onClick={() => {
          setCurrent(0);
        }}
        className="h-[100%] cursor-pointer pl-[5] px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 0 && "2px solid #38F8AC",
            color:
              current === 0
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className=" translate-y-[-1px]">User</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(1);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 1 && "2px solid #38F8AC",
            color:
              current === 1
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className=" translate-y-[-1px]">General</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(2);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 2 && "2px solid #38F8AC",
            color:
              current === 2
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">Caching</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(3);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 3 && "2px solid #38F8AC",
            color:
              current === 3
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">Fonts</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(4);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 4 && "2px solid #38F8AC",
            color:
              current === 4
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">Images</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(5);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 5 && "2px solid #38F8AC",
            color:
              current === 5
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">HTML</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(6);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 6 && "2px solid #38F8AC",
            color:
              current === 6
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">CSS</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(7);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 7 && "2px solid #38F8AC",
            color:
              current === 7
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">JS</span>
        </div>
      </div>
      <div
        onClick={() => {
          setCurrent(8);
        }}
        className="h-[100%]  cursor-pointer px-[15px] flex items-center text-[16px] font-bold tracking-wide"
      >
        <div
          style={{
            borderBottom: current === 8 && "2px solid #38F8AC",
            color:
              current === 8
                ? dark
                  ? "#fff"
                  : "#000"
                : dark
                ? "#ffffff74"
                : "#0a0a187e",
          }}
          className=" h-[100%] flex items-center"
        >
          <span className="translate-y-[-1px]">Integrations</span>
        </div>
      </div>
    </div>
  );
};

const Navigator1 = ({ label, list, w, change }) => {
  const [curr, setCurr] = useState(0);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

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
    <div className="h-[100%] w-[100%]" style={{ width: w }}>
      <div className="w-[100%] relative border-[1px]  border-[#ebebeb]  text-[12px] font-medium  h-[34px]">
        <div
          onClick={() => {
            setClicked(true);
          }}
          className="w-[100%] cursor-pointer px-[10px] h-[34px] flex justify-between items-center"
        >
          <p
            style={{
              color: dark ? "#ffffff74" : "#0a0a187e",
              borderRadius: clicked ? "4px 4px 0 0" : "4px 4px 4px 4px",
            }}
            className="text-[12px] font-bold tracking-wide  text-[#000]"
          >
            {list[curr]}
          </p>
          <img src="/graphic/status/down.svg" className="w-[10px]" alt="" />
        </div>
        {clicked && (
          <div className="w-[100%] min-h-[10px] rounded-[2px] px-[5px] py-[5px] border-[1px] border-[#ebebeb] absolute z-50 top-[40px] bg-[#fff]">
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
                    backgroundColor: i === curr ? "#222" : "#fff",
                    color: i === curr ? "#fff" : "#000",
                  }}
                  onClick={() => {
                    change(i);
                    setClicked(false);
                    setCurr(i);
                  }}
                  className="w-[100%] rounded-[2px] h-[27px] mb-[3px] flex items-center justify-center text-[11px] cursor-pointer"
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const Item2 = ({ last }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className="w-[100%] mobile:py-[10px] laptop:py-0 laptop:h-[90px] px-[15px] flex laptop:flex-row mobile:flex-col laptop:items-end justify-between border-b-[1px] "
      style={{
        borderColor: last ? "#ffffff00" : dark ? "#1F2329" : "#ebebeb",
      }}
    >
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        <InputFields
          labelText="Asset URL/Code"
          list={["jquery.min.js", "JavaScript", "External", "Any Device"]}
          type="dropdown"
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        <InputFields
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          labelText="Resource Type"
          list={["JavaScript", "External", "Any Device", "jquery.min.js"]}
          type="dropdown"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        <InputFields
          labelText="Resource Relation"
          list={["External", "Any Device", "jquery.min.js", "JavaScript"]}
          type="dropdown"
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        <InputFields
          labelText="Device"
          list={["Any Device", "jquery.min.js", "JavaScript", "External"]}
          type="dropdown"
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[18%] h-[100%] mr-[10px] flex items-center">
        {/* <InputDropdown2
          w="100%"
          list={[
            "Optimize",
            "Minify",
            "Combine",
            "Render Blocking Fix",
            "Resize",
            "Remove Unused CSS",
            "Page Prefetch",
          ]}
          label="Excluded Operations"
        /> */}

        <InputFields
          labelText="Excluded Operations"
          list={[
            "Optimize",
            "Minify",
            "Combine",
            "Render Blocking Fix",
            "Resize",
            "Remove Unused CSS",
            "Page Prefetch",
          ]}
          dropDownCheckbox={true}
          type="dropdown"
          labelClass="text-[11px] font-bold tracking-wide  text-[#0a0a187a]"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className=" mobile:w-[100%] mobile:mt-[10px] cursor-pointer laptop:mt-0 laptop:w-[34px] mb-[14px] h-[34px] flex items-center justify-center border-[1px] border-[#ebebeb] rounded-[3px]"
      >
        <img
          src="/graphic/settings/trash.svg"
          className="w-[14px] h-[14px] shrink-0"
          alt=""
        />
      </div>
    </div>
  );
};

const Item5 = ({ last }) => {
  const dark = useSelector((state) => state.home.dark);
  return (
    <div
      className="w-[100%] mobile:py-[10px] laptop:py-0 laptop:h-[72px] laptop:px-[15px] flex laptop:flex-row mobile:flex-col items-end justify-between border-b-[1px] "
      style={{
        borderColor: true ? "#ffffff00" : dark ? "#1F2329" : "#ebebeb",
      }}
    >
      <div className="mobile:w-[100%] laptop:w-[32.5%] h-[100%] mobile:mb-[10px] laptop:mr-[10px] flex items-center">
        <InputFields
          inputClass="w-[100%] border-[1px] rounded-[4px] outline-none rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[34px]"
          wrapperStyle={{ width: "100%" }}
          labelText="Cookie Name"
          type="text"
          labelClass="text-[12px] font-bold tracking-wide  text-[#0a0a187a]"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[32.5%] h-[100%] mobile:mb-[10px] laptop:mr-[10px] flex items-center">
        <InputFields
          inputClass="w-[100%] border-[1px] rounded-[4px] outline-none rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[34px]"
          labelClass="text-[12px] font-bold tracking-wide  text-[#0a0a187a]"
          wrapperStyle={{ width: "100%" }}
          labelText="Cookie Values (,)"
          type="text"
        />
      </div>
      <div className="mobile:w-[100%] laptop:w-[25%] mobile:mb-[10px] h-[100%] laptop:mr-[10px] flex items-center">
        <InputFields
          labelText="Group"
          list={["External", "Any Device", "jquery.min.js", "JavaScript"]}
          type="dropdown"
          wrapperStyle={{ width: "100%" }}
          dropDownListClass="w-[100%]  h-[40px] mb-[0px] flex px-[20px] font-medium items-center text-[12px] cursor-pointer"
          dropDownClass="h-[34px]"
        />
      </div>
      <div
        style={{
          borderColor: dark ? "#1F2329" : "#ebebeb",
        }}
        className="mobile:w-[100%] laptop:w-[34px] cursor-pointer mb-[16px] h-[34px] flex items-center justify-center border-[1px] border-[#ebebeb] rounded-[3px]"
      >
        <img
          src="/graphic/settings/trash.svg"
          className="w-[14px] h-[14px] shrink-0"
          alt=""
        />
      </div>
    </div>
  );
};

const Settings = () => {

  const [current, setCurrent] = useState(0);
  const w = useWidth();
  const dark = useSelector((state) => state.home.dark);

  const countriesData = countries.map((item, i) => {
    return item.label;
  });
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
                style={{ color: dark ? "#fff" : "#000" }}
                className="text-[24px] font-bold tracking-wide "
              >
                Settings
              </h1>
            </div>
            <div className="w-[100%] mobile:my-[20px] laptop:my-0 h-[34px] flex justify-end items-center">
              {w < 1000 && (
                <Navigator1
                  list={[
                    "User",
                    "General",
                    "Caching",
                    "Fonts",
                    "Images",
                    "HTML",
                    "CSS",
                    "JS",
                    "Integrations",
                  ]}
                  change={(e) => {
                    setCurrent(e);
                  }}
                />
              )}

              <SaveButton btnText="Save Settings" />
            </div>

            {w > 1000 && (
              <Navigator current={current} setCurrent={setCurrent} />
            )}
            {current === 0 && (
              <>
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className=" bg-[#fff] px-[15px] border-[1px] border-[#EBEBEB] py-[12px] mb-[30px] rounded-[8px] w-[100%]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] font-bold tracking-wide "
                  >
                    Details
                  </h1>
                  <div className="grid mt-[10px] laptop:grid-cols-2 gap-x-[15px] gap-y-[10px]">
                    <InputFields labelText="First Name" type="text" />

                    <InputFields labelText="Last Name" type="text" />

                    <InputFields
                      list={countriesData}
                      labelText="Country"
                      type="dropdown"
                    />

                    <InputFields labelText="Phone number" type="tel" />

                    <InputFields
                      class1={"translate-y-[2.5px]"}
                      labelText="Business Type"
                      list={["Small or Medium Business", "India"]}
                      type="dropdown"
                    />

                    <div className="flex justify-between items-end h-[]">
                      <InputFields
                        wrapperStyle={{ width: w }}
                        labelText="Email"
                        type="email"
                      />

                      <SaveButton btnText="Change Email" />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: dark ? "#111317" : "#fff",
                    borderColor: dark ? "#1F2329" : "#ebebeb",
                  }}
                  className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[12px] mb-[30px] rounded-[8px] w-[100%]"
                >
                  <h1
                    style={{
                      color: dark ? "#fff" : "#000",
                    }}
                    className="text-[20px] px-[15px] mb-[12px]  font-bold tracking-wide "
                  >
                    E-mail Notification Preferences
                  </h1>
                  <FeatureCard
                    title="Essential emails"
                    sub="Important emails about your TurboBoost account billing, resource usage
          and other account activity related events. These notifications are
          always on because they are directly related to us delivering the
          TurboBoost service to you."
                  />
                  <FeatureCard
                    title="New features, tips and tricks articles, and company news"
                    sub="Our newsletters, surveys, and other helpful content."
                  />
                  <FeatureCard
                    title="Promotions and special offers"
                    sub="Our seasonal offers and exclusive upgrade deals."
                  />
                </div>
              </>
            )}
            {current === 1 && (
              <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
                <div className="w-[100%] ">
                  <div
                    style={{
                      backgroundColor: dark ? "#111317" : "#fff",
                      borderColor: dark ? "#1F2329" : "#ebebeb",
                    }}
                    className=" bg-[#fff] border-[1px] border-[#EBEBEB]  mb-[30px] rounded-[8px] w-[100%]"
                  >
                    <FeatureCard
                      last={true}
                      title="Safe Mode"
                      sub="Use TurboBoost for debugging purposes, excluding public traffic. To test your pages with TurboBoost append [tsetruno=1 to your URLs."
                    />
                    <FeatureCard
                      title="Ignore query parameters for static assets"
                      sub="Enabling this option will produce consistent URLs for static assets that contain cache busting query parameters. This will increase the browser cache effectiveness and improve the loading time for your visitors."
                      h={"130px"}
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: dark ? "#111317" : "#fff",
                      borderColor: dark ? "#1F2329" : "#ebebeb",
                    }}
                    className=" bg-[#fff] border-[1px] border-[#EBEBEB]  mb-[30px] rounded-[8px] w-[100%] mt-[15px]"
                  >
                    <FeatureCard
                      h="60px"
                      last={true}
                      title="Excluded Resources (Images, JavaScript, CSS, etc.)"
                      sub="Specify the names or snippets that should be excluded from optimization."
                    />
                    <Item2 />
                    <Item2 />
                    <Item2 />
                    <Item2 />
                    <Item2 />
                    <Item2 />
                    <Item2 />
                    <Item2 last={true} />
                    <div className="w-[100%] px-[15px] mb-[15px] h-[38px] flex justify-end items-center">
                      <SaveButton
                        btnText="Add an Exclude"
                        wrapperClasses="mb-[20px]"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: dark ? "#111317" : "#fff",
                      borderColor: dark ? "#1F2329" : "#ebebeb",
                    }}
                    className=" bg-[#fff] border-[1px] border-[#EBEBEB]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
                  >
            
                    <FeatureCard
                      drop={false}
                      last={true}
                      title="Webhook for Config Changes"
                      sub="Specify a URL that will be called when your config changes. Use this to automatically fetch a fresh version of your config as soon as it gets updated."
                    >
                      <div
                        style={{
                          color: dark ? "#fff" : "#000",
                          borderColor: dark ? "#1F2329" : "#ebebeb",
                        }}
                        className="w-[100%] whitespace-nowrap overflow-hidden cursor-pointer h-[38px] border-[1px] border-[#ebebeb] rounded-[3px] flex items-center px-[15px] text-[14px] font-bold tracking-wide mt-[10px] mb-[10px]"
                      >
                        https://txtcartapp.com/?nitroWebhook-confirm&token=68cf19c4369df90q9wnjFSDg39
                      </div>
                    </FeatureCard>
                    <FeatureCard
                      title="Webhook for Clearing Cache"
                      sub="Specify a URL that will be called when cache is being deleted. Use this to delete your local cache copies for the affected URLs."
                    />
                    <FeatureCard
                      title="Webhook for Cache Ready Notifications"
                      sub="Specify a URL that will be called when cache is ready for a URL. Use this to notify your integration that an optimized version of a URl is ready."
                    >
                     <div
                        style={{
                          color: dark ? "#fff" : "#000",
                          borderColor: dark ? "#1F2329" : "#ebebeb",
                        }}
                        className="w-[100%] whitespace-nowrap overflow-hidden cursor-pointer h-[38px] border-[1px] border-[#ebebeb] rounded-[3px] flex items-center px-[15px] text-[14px] font-bold tracking-wide mt-[10px] mb-[10px]"
                      >
                        https://txtcartapp.com/?nitroWebhook-confirm&token=68cf19c4369df90q9wnjFSDg39
                      </div>
                    </FeatureCard>
                  </div>
                </div>
                <OptimizationModeCard />
              </div>
            )}
            {current === 2 && (
              <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
                <div className="w-[100%] ">
                  <div
                    style={{
                      backgroundColor: dark ? "#111317" : "#fff",
                      borderColor: dark ? "#1F2329" : "#ebebeb",
                    }}
                    className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[10px]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
                  >
                    <FeatureCard
                      last={true}
                      title="Improve Server Response Time"
                      drop={true}
                      p="10px 15px 20px 15px"
                      dropTitle={"Adjust page cache expiration time"}
                      sub="We’re serving you with static page cache which you can use effectively to skip all the server logic. Use it to improve the server response time."
                    >
                      <div className="w-[100%] py-[10px]">
                        <InputFields labelText="First Name" type="text" />

                        <div className="h-[10px]"></div>

                        <InputFields labelText="Country" type="text" />
                      </div>
                    </FeatureCard>
                    <FeatureCard
                      title="Minify Resources"
                      sub="Enable or disable minification of JavaScript, CSS and HTML resources"
                      h={"70px"}
                    />
                    <FeatureCard
                      title="“Optimize only” URLs"
                      sub="Only optimize the specified URLs and skip the rest"
                      h={"70px"}
                    />
                    <FeatureCard
                      title="Excluded URLs"
                      sub="Specify a list of excluded URLs you would not like to be optimized."
                      h={"90px !important"}
                      p="10px 15px 10px 15px"
                    >
                      <div className="w-[100%] text-[12px] italic text-[#85858C] mt-[5px] ">
                        *Don’t use this option if you want to exclude JS, CSS,
                        images, and fonts from optimization. instead, please use
                        Excluded Resources setting.
                      </div>
                    </FeatureCard>
                    <FeatureCard
                      title="Cache AJAX URLs"
                      sub="Specify a list of AJAX URLs you would like to be cached."
                      h={"70px"}
                    />
                    <FeatureCard
                      title="Ignore Parameters"
                      sub="Specify a list of URL parameters that do not modify the page content and can be ignored."
                      h={"90px !important"}
                      p="10px 15px 10px 15px"
                    >
                      <div className="w-[100%] mt-[10px]">
                        <InputFields
                          labelText="Specify excluded URL parameters, one at a line. You can use wildcard *. By default TurboBoost ignores the Urchin tracking parameters333"
                          type="textarea"
                          inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                        />

                        <InputFields
                          labelText="Include the default ignored parameters"
                          type="text"
                        />
                        <div className="w-[100%] text-[12px] italic text-[#85858C] mt-[5px] ">
                          You can find the complete list of parameters that this
                          options adds{" "}
                          <span className="hover:underline text-[#0066FF] cursor-pointer">
                            here
                          </span>
                          .
                        </div>
                      </div>
                    </FeatureCard>
                    <FeatureCard
                      title="Exclude from Optimization Cookie"
                      sub="Specify cookie names and values (optional) that when present then the page won't be optimized"
                      h={"100px"}
                    />
                    <FeatureCard
                      title="Enable Compression"
                      sub="We’ve enabled this optimization for all your resources. Compression is supported in effectively all browsers ( since IE6+, Firefox 2+, Chrome 1+ etc)"
                      h={"100px"}
                    />
                    <FeatureCard
                      title="Variation Cookies"
                      sub="Specify cookie names for different page cache versions based on their values"
                      h={"90px !important"}
                      p="10px 15px 10px 15px"
                    >
                      <div className="w-[100%] mb-[10px] text-[12px] italic text-[#85858C] mt-[5px] ">
                        Specify one or more cookie names (one line each) based
                        on which different page cache versions will be created
                        for each different value .
                      </div>
                      <Item5 />
                      <Item5 />
                      <Item5 />
                    </FeatureCard>
                    <div className="w-[100%] px-[15px] mb-[15px] h-[38px] flex justify-end items-center">
                      <SaveButton
                        btnText="Add Cookie"
                        wrapperClasses="mb-[20px]"
                      />
                    </div>
                  </div>
                </div>
                <OptimizationModeCard />
              </div>
            )}
            {current === 3 && (
              <>
                <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
                  <div className="w-[100%] ">
                    <div
                      style={{
                        backgroundColor: dark ? "#111317" : "#fff",
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                      }}
                      className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[10px]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
                    >
                      <FeatureCard
                        last={true}
                        title="Override Font Rendering Behavior"
                        drop={true}
                        p="10px 15px 20px 15px"
                        dropTitle={"Additional Options"}
                        sub="Use this option to set a desired value for the CSS front-display rule"
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields
                            labelText="Font-display Value"
                            list={["Swap"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            The selected value will be applied to all @font-face
                            definitions
                          </div>
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        title="Font Loading"
                        drop={true}
                        p="10px 15px 20px 15px"
                        dropTitle={"Additional Options"}
                        sub="Use this option to configure the method of loading fonts on your pages"
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields
                            labelText="Loading Strategy"
                            list={["Onload"]}
                            type="dropdown"
                          />
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        featured={true}
                        title="Font Subsetting (Remove Unused Glyphs)"
                        sub="When this option is enabled, TurboBoost will optimize fonts by removing symbols(glyphs), when are not used anywhere. This can dramatically reduce the size of these fonts. Learn more"
                        h={"100px"}
                      />
                      <FeatureCard
                        title="Enable Font Compression Upgrade"
                        sub="When this option is enabled, TurboBoost will optimize fonts by upgrading their compression to WOFF2 format. This can reduce the size of these fonts by up to 50%."
                        h={"100px"}
                      />
                    </div>
                  </div>
                  <OptimizationModeCard />
                </div>
              </>
            )}
            {current === 4 && (
              <>
                <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
                  <div className="w-[100%] ">
                    <div
                      style={{
                        backgroundColor: dark ? "#111317" : "#fff",
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                      }}
                      className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[10px]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
                    >
                      <FeatureCard
                        last={true}
                        title="Image Optimization"
                        drop={true}
                        p="10px 15px 20px 15px"
                        dropTitle={"Adjust Image Quality"}
                        sub="Enable or disable image optimization for size and delivery"
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields labelText="Image Quality" type="text" />

                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Choose the desired optimization image quality, from
                            0 to 100, Google recommends 80.
                          </div>
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        title="Adaptive Image Sizing"
                        sub="Image files are resized to match their container dimensions, reducing image file size. learn more"
                        h={"80px"}
                      />
                      <FeatureCard
                        title="Automatic Image Lazy Loading"
                        drop={true}
                        p="10px 15px 20px 15px"
                        dropTitle={"Additional Options"}
                        sub="Load images only when they become visible. This reduce the initial weight of the pages."
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields
                            labelText="Size Images Preemptively"
                            list={["Enabled"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Images will get width and heiht pre-configured
                            before the actual image is loaded. Helps with some
                            element sizing issues
                          </div>

                          <InputFields
                            labelText="Lazy Load iFrames"
                            list={["Enabled"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            In addition to images, iframe elements will be lazy
                            loaded as well.
                          </div>

                          <InputFields
                            labelText="Specify CSS selector to force include CSS for matching elemnts"
                            type="textarea"
                            inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                          />

                          <InputFields
                            labelText="DOM-rebuilding Slider Compatibility"
                            list={["Enabled"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Images will get width and heiht pre-configured
                            before the actual image is loaded. Helps with some
                            element sizing issues
                          </div>

                          <InputFields
                            labelText="Detect Theme Video Overlays"
                            list={["Enabled"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Some themes allow configuring an overlay for
                            embedded videos. With this setting enabled,
                            TurboBoost will display that overlay instead of the
                            video thumbnail before the video is loaded.
                          </div>

                          <InputFields
                            labelText="Loading Threshold"
                            type="text"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Elements approaching the viewport will be lazy
                            loaded when they get the configured threshold or
                            close
                          </div>

                          <InputFields
                            labelText="Hidden Image Loading"
                            list={["Default"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Images with visibility: hidden; take up space on the
                            page but are not visible - use Default to have them
                            loaded as soon as they enter the viewport, and On
                            visibility change to have them loaded when their
                            visibility property changes.
                          </div>
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        title="Additional Images"
                        sub="Specify any custom DOM element attributes that contain image URLs to have TurboBoost optimize them as well."
                        h={"80px"}
                      />
                    </div>
                  </div>
                  <OptimizationModeCard />
                </div>
              </>
            )}
            {current === 5 && (
              <>
                <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
                  <div className="w-[100%] ">
                    <div
                      style={{
                        backgroundColor: dark ? "#111317" : "#fff",
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                      }}
                      className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[10px]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
                    >
                      <FeatureCard
                        last={true}
                        h="70px"
                        title="Minify HTML"
                        sub="When enabled TurboBoost will minify the HTML by removing extra whitespace."
                      />
                      <FeatureCard
                        h="70px"
                        title="Keep HTML comments"
                        sub="When enabled TurboBoost will not remove the HTML comments from the final cache files."
                      />
                    </div>
                  </div>
                  <OptimizationModeCard />
                </div>
              </>
            )}
            {current === 6 && (
              <>
                <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
                  <div className="w-[100%] ">
                    <div
                      style={{
                        backgroundColor: dark ? "#111317" : "#fff",
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                      }}
                      className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[10px]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
                    >
                      <FeatureCard
                        last={true}
                        title="Optimize CSS Delivery"
                        drop={true}
                        p="10px 15px 20px 15px"
                        dropTitle={"Additional Options"}
                        sub="Create critical CSS as well as rework your website CSS for optimal delivery"
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields
                            labelText="Remove @font-face rules from the critical CSS"
                            list={["Disabled"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Enabling this will remove the @font-face rules from
                            the critical CSS, which will delay font loading and
                            help improve the first meaningful paint.
                          </div>

                          <InputFields
                            labelText="Specify CSS selector to force include CSS for matching elemnts"
                            type="textarea"
                            inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                          />

                          <InputFields
                            labelText="Specify CSS selector to force include CSS for matching elemnts"
                            type="textarea"
                            inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                          />
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        title="Reduce Unused CSS"
                        drop={true}
                        p="10px 15px 20px 15px"
                        dropTitle={"Additional Options"}
                        sub="Unused CSS rules are removed from optimized CSS files for faster page rendering."
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields
                            labelText="Debupe Based on Critical CSS"
                            list={["Disabled"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Remove duplicate rules from the final CSS files for
                            rules that are present in the critical CSS
                          </div>

                          <InputFields
                            labelText="Inline the final CSS"
                            list={["Disabled"]}
                            type="dropdown"
                          />

                          <InputFields
                            labelText="Inline the final CSS"
                            list={["Disabled"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Remove duplicate rules from the final CSS files for
                            rules that are present in the critical CSS
                          </div>

                          <InputFields
                            labelText="Specify CSS selector to force include CSS for matching elemnts"
                            type="textarea"
                            inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                          />

                          <InputFields
                            labelText="Specify CSS selector to force exclude CSS for matching elemnts"
                            type="textarea"
                            inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                          />
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        title="Combine CSS into one resource"
                        drop={true}
                        p="10px 15px 20px 15px"
                        dropTitle={"Additional Options"}
                        sub="Use a single file for all CSS rules grouped by media type. This reduces the number of network requests and makes rendering more efficient"
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields
                            labelText="Merge resources for media “screen” and “all”"
                            list={["Disabled"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Enabling this will use a single group for styles
                            using media “screen” and “all”. Otherwise 2 separate
                            files will be created for each group. In most cases
                            this setting must be enabled for best results.
                          </div>
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        title="Custom CSS"
                        sub="Specify custom CSS rules which will be applied to the optimized pages."
                      />
                    </div>
                  </div>
                  <OptimizationModeCard />
                </div>
              </>
            )}
            {current === 7 && (
              <>
                <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
                  <div className="w-[100%] ">
                    <div
                      style={{
                        backgroundColor: dark ? "#111317" : "#fff",
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                      }}
                      className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[10px]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
                    >
                      <FeatureCard
                        last={true}
                        title="Combine JS into one resource"
                        sub="Use a single file for all JavaScript code. This reduces the number of network requests and makes rendering more efficient"
                      />
                      <FeatureCard
                        title="Configure resource loading strategy"
                        drop={true}
                        p="10px 15px 20px 15px"
                        dropTitle={"Additional Options"}
                        sub="Rework and reposition blocking resource files in the above-the-fold portion of your page"
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields
                            labelText="Use Resource Loader Script"
                            list={["Disabled"]}
                            type="dropdown"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Using a resource loader script gives us control over
                            the CSS asd JS loading sequence, which often
                            improves the score. However, it may not be
                            compatible with all sites, especially ones that have
                            JS errors or scripts that use document.write().
                          </div>

                          <InputFields
                            labelText="Delay loading of non-critical resources until user interaction is detected"
                            list={["Disabled"]}
                            type="dropdown"
                          />

                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            When this option is enabled, only critical resources
                            for rendering above-the-fold parts of pages will be
                            loaded. The rest of the resources will be loaded
                            when user interaction with the site is detected.
                            This option can improve score drastically.
                          </div>

                          <InputFields
                            labelText="Resource loading strategy"
                            type="text"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Loading scripts first usually gives better
                            performance and snappier feeling site, however it
                            may not work in all cases. Loading styles first is
                            the safer option, but you may still get some styles
                            reported as render-blocking.
                          </div>
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        title="Delayed Scripts"
                        sub="Specify scripts that you would like to be loaded with a delay."
                      />
                      <FeatureCard
                        title="Optimize Ads"
                        sub="Ads will not block the initial page render"
                      />
                      <FeatureCard
                        title="Minify JSON for Linking Data"
                        sub="When enabled TurboBoost will minify the JSON-LD elements in the HTML document."
                      />
                      <FeatureCard
                        title="Do not optimize OptinMonster scripts"
                        sub="OptinMonster scripts and scripts using the OptinMonster events will be automatically excluded from optimization"
                      />
                    </div>
                  </div>
                  <OptimizationModeCard />
                </div>
              </>
            )}
            {current === 8 && (
              <>
                <div className="flex w-[100%] mobile:flex-col laptop:flex-row justify-between">
                  <div className="w-[100%] ">
                    <div
                      style={{
                        backgroundColor: dark ? "#111317" : "#fff",
                        borderColor: dark ? "#1F2329" : "#ebebeb",
                      }}
                      className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[10px]  mb-[30px] rounded-[8px] w-[100%] mt-[0px]"
                    >
                      <FeatureCard
                        title="Remove Proxy (Varnish, NGINX, etc.)"
                        drop={true}
                        last={true}
                        p="10px 15px 20px 15px"
                        dropTitle={"Adjust Reverse Proxy Settings"}
                        sub="If you are using a reverse proxy (like Varnish or NGINX) use this option to configure its settings, so TurboBoost can synchronize both caches for best performance."
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields
                            labelText="URL for performing a complete purge"
                            type="text"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Use this only if your reverse proxy server is
                            configured with a custom URL for purging its entire
                            cache.
                          </div>

                          <InputFields
                            labelText="HTTP method when purging a single URL"
                            type="text"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            The HTTP method to use when TurboBoost is purging
                            cache for a single URL. Default value is PURGE.
                          </div>

                          <InputFields
                            labelText="HTTP method when purging the entire reverse proxy cache"
                            type="text"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            The HTTP method to use when TurboBoost is purging
                            the entire reverse proxy cache. Default value is
                            PURGE.
                          </div>

                          <InputFields
                            labelText="List of IPs of reverse proxy servers. Format: <ip>:<port>. The port can be omitted, in which case port 80 will be used."
                            type="textarea"
                            inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                          />

                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            List the IPs of the reverse proxy servers that
                            should get their cache purge.
                          </div>
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        title="Cloudfare"
                        drop={true}
                        p="15px 15px 30px 15px"
                        dropTitle={"Adjust Cloudfare Settings"}
                        sub="If your site is behind Cloudflare use this option to configure API access, so TurboBoost can synchronize both caches for best performance."
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields
                            labelText="Cloudflare account-email address"
                            type="text"
                          />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            Enter the primary email address for the Cloudflare
                            account that controls http://txtcartapp.com/
                          </div>

                          <InputFields labelText="Global API Key" type="text" />

                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            For information on finding your global API key, see
                            this article in the Cloudflare knowledge base.
                          </div>
                        </div>
                      </FeatureCard>
                      <FeatureCard
                        title="Sucuri"
                        drop={true}
                        p="15px 15px 30px 15px"
                        dropTitle={"Adjust Sucuri Settings"}
                        sub="If your site is behind Sucuri use this option to configure API access, so TurboBoost can synchronize both caches for best performance."
                      >
                        <div className="w-[100%] py-[10px]">
                          <InputFields labelText="API Key" type="text" />
                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            The Sucuri API key for http://txtcartapp.com/,
                            labeled as API_KEY in the website Firewall Dashboard
                          </div>
                          <InputFields labelText="API Secret" type="text" />

                          <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                            The Sucuri API secret for
                            http://txtcartapp.com/,labeled as API_SECRET in the
                            Website Firewall Dashboard
                          </div>
                        </div>
                      </FeatureCard>
                    </div>
                  </div>
                  <OptimizationModeCard />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
