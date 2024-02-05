import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FeatureCard from "../FeatureCard";
import ExcludedResources from "../ExcludedResources";
import SaveButton from "./saveButton";
import { addExclude, deleteExclude } from "../../slice/excludeSlice";
const GeneralTabSetting1 = () => {
  const dark = useSelector((state) => state.home.dark);
  const excludes = useSelector((state) => state.excludes); // Assuming you have a reducer for excludes
  const dispatch = useDispatch();

  const handleAddExclude = () => {
    const newExclude = {
      id: Math.random(), // You should use a unique ID generation method
      name: "New Exclude", // Customize as needed
      description: "Description of the new exclude",
    };
    dispatch(addExclude(newExclude));
  };

  const handleDeleteExclude = (excludeId) => {
    dispatch(deleteExclude(excludeId));
  };
  return (
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
            description="Use TurboBoost for debugging purposes, excluding public traffic. To test your pages with TurboBoost append [tsetruno=1 to your URLs."
          />
          <FeatureCard
            title="Ignore query parameters for static assets"
            description="Enabling this option will produce consistent URLs for static assets that contain cache busting query parameters. This will increase the browser cache effectiveness and improve the loading time for your visitors."
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
            description="Specify the names or snippets that should be excluded from optimization."
          />
         
          {/* <ExcludedResources last={true} />  */}
         
          {excludes.map((exclude) => (
            <div key={exclude.id}>
              <ExcludedResources
                name={exclude.name}
                description={exclude.description}
                onRemove={() => handleDeleteExclude(exclude.id)}
              />
            </div>
          ))}
           <div className="w-[100%] px-[15px] mb-[15px] h-[38px] flex justify-end items-center">
            <SaveButton
              btnText="Add an Exclude"
              wrapperClasses="mb-[20px]"
              onClick={handleAddExclude}
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
            isSubSectionExist={false}
            last={true}
            title="Webhook for Config Changes"
            description="Specify a URL that will be called when your config changes. Use this to automatically fetch a fresh version of your config as soon as it gets updated."
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
            description="Specify a URL that will be called when cache is being deleted. Use this to delete your local cache copies for the affected URLs."
          />
          <FeatureCard
            title="Webhook for Cache Ready Notifications"
            description="Specify a URL that will be called when cache is ready for a URL. Use this to notify your integration that an optimized version of a URl is ready."
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

    </div>
  );
};

export default GeneralTabSetting1;
