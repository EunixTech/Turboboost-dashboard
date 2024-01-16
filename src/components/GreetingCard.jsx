import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from "react-redux";

export default function GreetingCard() {
    const [time, setTime] = useState(new Date());
    const [greeting, setGreeting] = useState('');

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

    return (
           <h1 className={`${dark ? "headingDarkMode" : "heading"} text-[18px] f2 font-medium`} > {greeting}, {localStorage.getItem('shopifyDashboardUserName') || ""}! </h1>
    )
}
