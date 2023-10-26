import React, { Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setDark } from "../services/home";

const DashboardPage = React.lazy(() => import("../views/DashboardPage"));

const DashboardPageRoute = () => {
  const auth = useSelector((state) => state.home.auth);

  const dispatch = useDispatch();
  const [vidLoad, setVidLoad] = useState(auth);

  useEffect(() => {

    const dark = localStorage.getItem("dark");
    if (dark) {
      dispatch(setDark(true));
    } else {
      dispatch(setDark(false));
    }
 
  });
  const dark = useSelector((state) => state.home.dark);
  
  return (
    <>
      {!vidLoad ? (
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
             
            onEnded={() => {
              setVidLoad(true);
            }}
            src={dark ? "/load-b.mp4" : "/load-w.mp4"}
          >

          </video>
        </div>
      ) : (
        <Suspense
          fallback={
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
                onEnded={() => {
                  setVidLoad(true);
                }}
                src={dark ? "/load-b.mp4" : "/load-w.mp4"}
              ></video>
            </div>
          }
        >
          <DashboardPage />
        </Suspense>
      )}
    </>
  );
};

export default DashboardPageRoute;
