import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth, setDark } from "../services/home";
import PageLoader from "../components/PageLoader";


const SignInPage = React.lazy(() => import("../views/SignInPage"));

const SignInRoute = () => {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem("loggedIn");
        const dark = localStorage.getItem("dark");

        if (dark) dispatch(setDark(true));
        else  dispatch(setDark(false));
        
        if (loggedIn === "true") {
            setTimeout(() => {
                navigate("/dashboard");
                dispatch(setAuth(true));
            }, 1000);
        } else { setLoading(false)}
    });

    return (
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <Suspense fallback={null}>
                    <SignInPage />
                </Suspense>
            )}
        </>
    );
};

export default SignInRoute;
