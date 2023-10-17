import React, { Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setAuth, setDark } from "../services/home";
import { useNavigate } from "react-router-dom";
const DashboardPage = React.lazy(() => import("../views/DashboardPage"));


const DashboardPageRoute = () => {
  const auth = useSelector((state) => state.home.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(!auth);

  const dispatch = useDispatch();
  const [vidLoad, setVidLoad] = useState(auth);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const dark = localStorage.getItem("dark");
    if (dark) {
      dispatch(setDark(true));
    } else {
      dispatch(setDark(false));
    }
    if (loggedIn === "true") {
      setTimeout(() => {
        setLoading(false);
        dispatch(setAuth(true));
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/auth/signIn");
        dispatch(setAuth(false));
      }, 1000);
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