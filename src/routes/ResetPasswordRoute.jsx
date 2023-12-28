import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDark } from "../services/home";

const ResetPasswordPage = React.lazy(() => import("../views/ResetPasswordPage.jsx"));

export default function ResetPasswordRoute() {

    const dispatch = useDispatch();

    useEffect(() => {
        const dark = localStorage.getItem("dark");

        if (dark) dispatch(setDark(true));
        else dispatch(setDark(false));
    });


    return (
        <Suspense fallback={null}>
            <ResetPasswordPage />
        </Suspense>
    )
}
