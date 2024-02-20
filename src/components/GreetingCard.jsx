import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from "react-redux";
import { GetAxiosConfig,PostAxiosConfig } from "../utils/axiosConfig.js";
export default function GreetingCard() {
    const [time, setTime] = useState(new Date());
    const [greeting, setGreeting] = useState('');
    const [userName, updateUserName] = useState('');
    const dark = useSelector((state) => state.home.dark);

    const updateGreeting = useCallback(() => {
        const currentTime = time.getHours();
        let newGreeting = '';
    
        if (currentTime >= 0 && currentTime < 12) {
            newGreeting = 'Good morning';
        } else if (currentTime >= 12 && currentTime < 18) {
            newGreeting = 'Good afternoon';
        } else {
            // Fix the condition for the evening and night
            newGreeting = 'Good evening';
        }
    
        setGreeting(newGreeting);
    }, [time, setGreeting]);
    

    useEffect(() => {
        updateGreeting();

        const timerID = setInterval(() => {
            setTime(new Date());
            updateGreeting();
        }, 1000 * 60);

        return () => { clearInterval(timerID)};
    }, [updateGreeting]);

    useEffect(() => {
        const fetchProfileData = async () => {
       
          try {
            const res = await GetAxiosConfig(`user/user-profile`);

            const resJSON = await res.data;
    
            if (resJSON?.status === 200) {
              const user = resJSON?.acccount;
    
                const full_name = user?.user_info?.first_name;
                const email_address = user?.user_info?.email_address;
                
                updateUserName(full_name);
                const websiteURL = user?.app_token?.shopify?.shop;
                
                window.Intercom("boot", {
                  api_base: "https://api-iam.intercom.io",
                  app_id: "vr8qka5j",
                  name:full_name,
                  email: email_address, // the email for your user
                  user_id: "65cc86a2d454e8c9c83f2d6e", // a UUID for your user
                  user_hash: "65cc7a6d881b39eee9da4daac3768f18979528af0cdffda64ddb0a465b00fde4" // an Identity Verification user hash for your user
                });
                dispatch(setToggle({ key: "websiteURL", value: websiteURL }));

            }
          } catch (error) {
            if (error?.response?.status === 401) {
              localStorage.removeItem('authToken');
              window.location.replace('/login-shopify');
            }
            console.error("Error fetching user profile data:", error);
          }
        };
    
        fetchProfileData();
      }, []);

    return (
           <h1 className={`${dark ? "headingDarkMode" : "heading"} text-[18px] f2 font-medium`} > {greeting}, {userName || "User Name"}! </h1>
    )
}
