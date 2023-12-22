import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeatureCard from "../FeatureCard";
import InputFields from "../InputFields";
import OptimizationModeCard from "../OptimizationModeCard";
import toast from "react-hot-toast";

// import getFetchConfig from '../../utils/getFetchConfig';
// import standardFetchHandlers from '../../utils/standardFetchHandlers';
// import handleFetchErrors from '../../utils/handleFetchErrors';
// import appURLs from '../../appURL';
import { featureAPIHandling } from "../../utils/featureAPIHandling";
import { setToggle } from "../../slice/statusToggleSlice";

const JSTabSettings = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.home.dark);
  const combinedjs = useSelector((state) => state.toggles?.combinedjs);
  console.log("Lazyloading value:", combinedjs);
  // Use useEffect to set the initial value of combinedjs when the component mounts
  useEffect(() => {
    // Check if the combinedjs value is undefined or null, and set it to false
    if (combinedjs === undefined || combinedjs === null) {
      dispatch(setToggle({ key: "combinedjs", value: false }));
    }
  }, [combinedjs, dispatch]);

  const handlingToggleForCombineResources = () => {
    if (combinedjs === false || combinedjs === undefined) {
      dispatch(setToggle({ key: "combinedjs", value: true }));
      toast.success("combinedjs switched to on");
    } else {
      dispatch(setToggle({ key: "combinedjs", value: false }));
      toast.success("combinedjs switched to off");
    }
  };
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
            <p onClick={handlingToggleForCombineResources}>
              Combine Js:{" "}
              {combinedjs !== undefined
                ? combinedjs
                  ? "true"
                  : "false"
                : "loading..."}
            </p>
            <FeatureCard
              handlingToggle={handlingToggleForCombineResources}
              last={true}
              title="Combine JS into one resource"
              description="Use a single file for all JavaScript code. This reduces the number of network requests and makes rendering more efficient"
            />
            {/* <FeatureCard
            title="Configure resource loading strategy"
            isSubSectionExist={true}
            p="10px 15px 20px 15px"
            subSectionTitile={"Additional Options"}
            description="Rework and reposition blocking resource files in the above-the-fold portion of your page"
          >
            <div className="w-[100%] py-[10px]">
              <InputFields
                labelText="Use Resource Loader Script"
                list={["Disabled"]}
                type="dropdown"
              />
              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                Using a resource loader script gives us control over
                the CSS asd JS loading sequence, which often improves
                the score. However, it may not be compatible with all
                sites, especially ones that have JS errors or scripts
                that use document.write().
              </div>

              <InputFields
                labelText="Delay loading of non-critical resources until user interaction is detected"
                list={["Disabled"]}
                type="dropdown"
              />

              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                When this option is enabled, only critical resources
                for rendering above-the-fold parts of pages will be
                loaded. The rest of the resources will be loaded when
                user interaction with the site is detected. This
                option can improve score drastically.
              </div>

              <InputFields
                labelText="Resource loading strategy"
                type="text"
              />
              <div className="w-[100%] mb-[10px] text-[10px] italic text-[#85858C] mt-[5px] ">
                Loading scripts first usually gives better performance
                and snappier feeling site, however it may not work in
                all cases. Loading styles first is the safer option,
                but you may still get some styles reported as
                render-blocking.
              </div>
            </div>
          </FeatureCard> */}
            <FeatureCard
              handlingToggle={handlingToggleForCombineResources}
              title="Delayed Scripts"
              description="Specify scripts that you would like to be loaded with a delay."
            />
            {/* <FeatureCard
            title="Optimize Ads"
            description="Ads will not block the initial page render"
          /> */}
            {/* <FeatureCard
            title="Minify JSON for Linking Data"
            description="When enabled TurboBoost will minify the JSON-LD elements in the HTML document."
          /> */}
            {/* <FeatureCard
            title="Do not optimize OptinMonster scripts"
            description="OptinMonster scripts and scripts using the OptinMonster events will be automatically excluded from optimization"
          /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JSTabSettings;
