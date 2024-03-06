import React from "react";
import { useSelector } from "react-redux";
import FeatureCard from "../FeatureCard";
import InputFields from "../InputFields";
import OptimizationModeCard from "../OptimizationModeCard";

const IntegrationsTabSettings = () => {
  const dark = useSelector((state) => state.home.dark);

  return (
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
              isSubSectionExist={true}
              last={true}
              p="10px 15px 20px 15px"
              subSectionTitile={"Adjust Reverse Proxy Settings"}
              description="If you are using a reverse proxy (like Varnish or NGINX) use this option to configure its settings, so TurboBoost can synchronize both caches for best performance."
            >
              <div className="w-[100%] py-[10px]">
                <InputFields
                  labelText="URL for performing a complete purge"
                  type="text"
                />
                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  Use this only if your reverse proxy server is configured with
                  a custom URL for purging its entire cache.
                </div>

                <InputFields
                  labelText="HTTP method when purging a single URL"
                  type="text"
                />
                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  The HTTP method to use when TurboBoost is purging cache for a
                  single URL. Default value is PURGE.
                </div>

                <InputFields
                  labelText="HTTP method when purging the entire reverse proxy cache"
                  type="text"
                />
                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  The HTTP method to use when TurboBoost is purging the entire
                  reverse proxy cache. Default value is PURGE.
                </div>

                <InputFields
                  labelText="List of IPs of reverse proxy servers. Format: <ip>:<port>. The port can be omitted, in which case port 80 will be used."
                  type="textarea"
                  inputClass="w-[100%] border-[1px] py-[10px] outline-none  rounded-[3px] border-[#ebebeb] px-[10px] text-[12px] font-medium mt-[7px] h-[120px]"
                />

                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  List the IPs of the reverse proxy servers that should get
                  their cache purge.
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              title="Cloudfare"
              isSubSectionExist={true}
              p="15px 15px 30px 15px"
              subSectionTitile={"Adjust Cloudfare Settings"}
              description="If your site is behind Cloudflare use this option to configure API access, so TurboBoost can synchronize both caches for best performance."
            >
              <div className="w-[100%] py-[10px]">
                <InputFields
                  labelText="Cloudflare account-email address"
                  type="text"
                />
                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  Enter the primary email address for the Cloudflare account
                  that controls http://txtcartapp.com/
                </div>

                <InputFields labelText="Global API Key" type="text" />

                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  For information on finding your global API key, see this
                  article in the Cloudflare knowledge base.
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              title="Sucuri"
              isSubSectionExist={true}
              p="15px 15px 30px 15px"
              subSectionTitile={"Adjust Sucuri Settings"}
              description="If your site is behind Sucuri use this option to configure API access, so TurboBoost can synchronize both caches for best performance."
            >
              <div className="w-[100%] py-[10px]">
                <InputFields labelText="API Key" type="text" />

                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  The Sucuri API key for http://txtcartapp.com/, labeled as
                  API_KEY in the website Firewall Dashboard
                </div>

                <InputFields labelText="API Secret" type="text" />

                <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                  The Sucuri API secret for http://txtcartapp.com/,labeled as
                  API_SECRET in the Website Firewall Dashboard
                </div>
              </div>
            </FeatureCard>
          </div>
        </div>

        {/* <OptimizationModeCard /> */}
      </div>
    </>
  );
};

export default IntegrationsTabSettings;
