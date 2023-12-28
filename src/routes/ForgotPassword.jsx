import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDark } from "../services/home";

const ForgotPasswordPage = React.lazy(() => import("../views/ForgotPasswordPage.jsx"));

const ForgotPasswordRoute = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const dark = localStorage.getItem("dark");

        if (dark) dispatch(setDark(true));
        else dispatch(setDark(false));
    });

    return (

        <Suspense fallback={null}>
            <ForgotPasswordPage />
        </Suspense>

    );
};

export default ForgotPasswordRoute;
