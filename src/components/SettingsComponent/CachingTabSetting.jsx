import React from 'react';
import FeatureCard from '../FeatureCard';
import InputFields from '../InputFields';
import CookieVariationCard from '../CookieVariationCard';
import SaveButton from './saveButton';
import OptimizationModeCard from '../OptimizationModeCard';
import { useSelector } from 'react-redux';

const CachingTabSetting = () => {
    const dark = useSelector((state) => state.home.dark);

  return (
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
                    isSubSectionExist={true}
                    p="10px 15px 20px 15px"
                    subSectionTitile={"Adjust page cache expiration time"}
                    description="We’re serving you with static page cache which you can use effectively to skip all the server logic. Use it to improve the server response time."
                  >
                    <div className="w-[100%] py-[10px]">
                      <InputFields labelText="First Name" type="text" />
                      <div className="h-[10px]"></div>
                      <InputFields labelText="Country" type="text" />
                    </div>
                  </FeatureCard>
                  <FeatureCard
                    title="Minify Resources"
                    description="Enable or disable minification of JavaScript, CSS and HTML resources"
                    h={"70px"}
                  />
                  <FeatureCard
                    title="“Optimize only” URLs"
                    description="Only optimize the specified URLs and skip the rest"
                    h={"70px"}
                  />
                  <FeatureCard
                    title="Excluded URLs"
                    description="Specify a list of excluded URLs you would not like to be optimized."
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
                    description="Specify a list of AJAX URLs you would like to be cached."
                    h={"70px"}
                  />
                  <FeatureCard
                    title="Ignore Parameters"
                    description="Specify a list of URL parameters that do not modify the page content and can be ignored."
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
                    description="Specify cookie names and values (optional) that when present then the page won't be optimized"
                    h={"100px"}
                  />
                  <FeatureCard
                    title="Enable Compression"
                    description="We’ve enabled this optimization for all your resources. Compression is supported in effectively all browsers ( since IE6+, Firefox 2+, Chrome 1+ etc)"
                    h={"100px"}
                  />
                  <FeatureCard
                    title="Variation Cookies"
                    description="Specify cookie names for different page cache versions based on their values"
                    h={"90px !important"}
                    p="10px 15px 10px 15px"
                  >
                    <div className="w-[100%] mb-[10px] text-[12px] italic text-[#85858C] mt-[5px] ">
                      Specify one or more cookie names (one line each) based on
                      which different page cache versions will be created for
                      each different value .
                    </div>
                    <CookieVariationCard />
                    <CookieVariationCard />
                    <CookieVariationCard />
                  </FeatureCard>

                  <div className="w-[100%] px-[15px] mb-[15px] h-[38px] flex justify-end items-center">
                    <SaveButton
                      btnText="Add Cookie"
                      wrapperClasses="mb-[20px]"
                    />
                  </div>
                </div>
              </div>

       
            </div>
  );
}

export default CachingTabSetting;
