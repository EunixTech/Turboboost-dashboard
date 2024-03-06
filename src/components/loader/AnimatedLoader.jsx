import React,{useState} from 'react'
import { useSelector } from "react-redux";

export default function AnimatedLoader() {
    const [vidLoad,setVidLoad] = useState(false);
    const dark = useSelector((state) => state.home.dark);

  return (
    <div
    style={{
      backgroundColor: dark ? "#090917" : "#fff",
    }}
    className="w-[100%] h-[100vh] bg-transparent flex items-center justify-center"
  >
   <video
     autoPlay
     className={"w-[300px]"}
     muted
     loop
     onEnded={() => {
       setTimeout(() => {
         setVidLoad(true);
       }, 500);
     }}
     src={dark ? "https://res.cloudinary.com/hpnoardgude/video/upload/v1705325221/load-b_fvtai6.mp4" : "https://res.cloudinary.com/hpnoardgude/video/upload/v1705343705/load-w_zgr2he.mp4"}
   ></video>

  </div>
  )
}
