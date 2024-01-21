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
                updateUserName(full_name);
           
            }
          } catch (error) {
            if (error?.response?.status === 401) {
              localStorage.removeItem('authToken');
              window.location.replace('/login-shopify');
            }
            console.error("Error fetching user profile data:", error);
          }
        };
    if(localStorage.removeItem('authToken')){
      fetchProfileData();
    }
        
      }, []);

    return (
           <h1 className={`${dark ? "headingDarkMode" : "heading"} text-[18px] f2 font-medium`} > {greeting}, {userName || "User Name"}! </h1>
    )
}
