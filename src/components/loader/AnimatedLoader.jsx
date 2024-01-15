import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import myVideo from "../../video/load-b.mp4";

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
   <video controls autoPlay loop muted>
  <source src={myVideo} type="video/mp4" />
</video>

{/* <video
            autoPlay
            className={"w-[300px]"}
            muted
            controls
            type="video/mp4"
            onEnded={() => {
              setVidLoad(true);
            }}
            src={dark ? "/load-b.mp4" : "/load-w.mp4"}
          ></video> */}

  </div>
  )
}
