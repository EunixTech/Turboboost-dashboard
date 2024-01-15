import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDark , setAuth} from "../services/home";
const DashboardPage = React.lazy(() => import("../views/DashboardPage"));

const DashboardPageRoute = () => {
    const dark = useSelector((state) => state.home.dark);

    const auth = useSelector((state) => state.home.auth);
    const dispatch = useDispatch();
    const [vidLoad, setVidLoad] = useState(auth);

    const [loading, setLoading] = useState(!auth);
  
    const navigate = useNavigate();

    useEffect(() => {
      const loggedIn = localStorage.getItem("loggedIn");

      console.log("loggedInloggedIn", loggedIn )
      const dark = localStorage.getItem("dark");
      if (dark) {
        dispatch(setDark(true));
      } else {
        dispatch(setDark(false));
      }
      if (loggedIn == "true") {
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


    return (
        <>
            {!vidLoad ? (
                <div className={`${dark ? "heading": "headingDarkMode"} w-[100%] h-[100vh] bg-transparent flex items-center justify-center`}>
                    <video
                        autoPlay
                        className={"w-[300px]"}
                        muted
                        onEnded={() => { setVidLoad(true)}}
                        src={dark ? "/load-b.mp4" : "/load-w.mp4"}
                    > </video>
                </div>

            ) : (
                <Suspense
                    fallback={
                        <div className={`${dark ? "heading": "headingDarkMode"} w-[100%] h-[100vh] bg-transparent flex items-center justify-center`}>
                        
                            <video
                                autoPlay
                                className={"w-[300px]"}
                                muted
                                onEnded={() => { setVidLoad(true);}}
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
