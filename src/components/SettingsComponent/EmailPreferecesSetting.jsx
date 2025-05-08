import React from "react";
import FeatureCard from "../FeatureCard";
import { useSelector } from "react-redux";

const EmailPreferecesSetting = () => {
    const dark = useSelector((state) => state.home.dark);
  return (
    <div
      style={{
        backgroundColor: dark ? "#111317" : "#fff",
        borderColor: dark ? "#1F2329" : "#ebebeb",
      }}
      className=" bg-[#fff] border-[1px] border-[#EBEBEB] pt-[12px] mb-[30px] rounded-[8px] w-[100%]"
    >
      <h1
        style={{ color: dark ? "#fff" : "#000" }}
        className="text-[20px] px-[15px] mb-[12px]  font-bold tracking-wide "
      >
        E-mail Notification Preferences
      </h1>

      <FeatureCard
        title="Essential emails"
        description="Important emails about your TurboBoost account billing, resource usage
             and other account activity related events. These notifications are
                always on because they are directly related to us delivering the
                TurboBoost service to you."
      />
      <FeatureCard
        title="New features, tips and tricks articles, and company news"
        description="Our newsletters, surveys, and other helpful content."
      />
      <FeatureCard
        title="Promotions and special offers"
        description="Our seasonal offers and exclusive upgrade deals."
      />
    </div>
  );
};

export default EmailPreferecesSetting;
