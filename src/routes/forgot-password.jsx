import React, { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth, setDark } from "../services/home";
import SignInPage from "../views/SignIn";
import SignIn from "./signIn";
import LoadingSpinner from "../components/loader/loader";

const Loader = () => {
  return (
    <div className="w-[100%] h-[100vh]  flex items-center justify-center top-0 left-0">
      <div role="status">
        <LoadingSpinner/>
        <span className="sr-only">Loading... </span>
      </div>
    </div>
  );
};
const ForgotPasswordPage = React.lazy(() => import("../views/ForgotPassword"));

const ForgotPassword = () => {
  const [loading, setLoading] = useState(true);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate("/dashboard");
        dispatch(setAuth(true));
      }, 1000);
    } else {
      setLoading(false);
    }
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={null}>
          <ForgotPasswordPage />
        </Suspense>
      )}
    </>
  );
};

export default SignIn;
