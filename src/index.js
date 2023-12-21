import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./services/store";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DashboardPageRoute from "./routes/DashboardPag";
import SignInRoute from "./routes/SignInRoute";
import SignUp from "./routes/SignUpRoute";
import ResetPasswordRoute from "./routes/ResetPasswordRoute";
import ConnectWebsite from "./routes/connect-website";
import CacheWarmup from "./routes/cache-warmup";
import CacheStatus from "./routes/cache-status";
import Home from "./routes/home.jsx";
import Logs from "./routes/logs";
import Integrations from "./routes/integrations";
import Billing from "./routes/billing";
import Settings from "./routes/settings";
import Affiliate from "./routes/affiliate";
import ForgotPassword from "./routes/ForgotPassword";
import ShopifyAdmin from "./routes/shopify-admin";
import Store from "./routes/store";
import HomeLayout from "./layouts/index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";
import NewOnboard from "./routes/newOnboarding.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./notFound.jsx";
const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <DashboardPageRoute />,
  },
  // {
  //   path: "/connect-website",
  //   element: <ConnectWebsite />,
  // },
  // {
  //   path: "/cache-warmup",
  //   element: <CacheWarmup />,
  // },
  // {
  //   path: "/cache-status",
  //   element: <CacheStatus />,
  // },
  // {
  //   path: "/logs",
  //   element: <Logs />,
  // },
  // {
  //   path: "/integrations",
  //   element: <Integrations />,
  // },
  {
    path: "/billing",
    element: <Billing />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/affiliate",
    element: <Affiliate />,
  },
  // {
  //   path: "/store",
  //   element: <Store />,
  // },
  {
    path: "/shopify-admin",
    element: <ShopifyAdmin />,
  },
];

const App = () => {
 
  const location = useLocation();
  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userToken = urlParams.get('userToken');
    setShowOnboardingModal(userToken ? true : false);

    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "pz01qpvl",
      email: "manmohankumar023@hmail.com", // the email for your user
      user_id: "asd123", // a UUID for your user
      user_hash: "017721e6fe54a639abdc8a5be4aac63d3c9d484fd5927ce7e0013dcc3ea1bc2c" // an Identity Verification user hash for your user
      };

  }, []);

  // useEffect(() => {
  //   window.intercomSettings = {
  //     api_base: "https://api-iam.intercom.io",
  //     app_id: "pz01qpvl",
  //     email: "manmohankumar023@hmail.com", // the email for your user
  //     user_id: "asd123", // a UUID for your user
  //     user_hash: "017721e6fe54a639abdc8a5be4aac63d3c9d484fd5927ce7e0013dcc3ea1bc2c" // an Identity Verification user hash for your user
  //     };
  //   }, [])
  return (
    <>
      {showOnboardingModal && <NewOnboard />}
      {!(
        location.pathname === "/auth/signIn" ||
        location.pathname === "/auth/signUp" ||
        location.pathname === "/auth/forgot-password" ||
        location.pathname === "/auth/reset-password"
      ) && (
        <HomeLayout>
          <Routes>
            {router.map((item, i) => {
              return <Route key={i} path={item.path} element={item.element} />;
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HomeLayout>
      )}
       <Routes>
        <Route path={"/auth/signIn"} element={<SignInRoute />} />
        <Route path={"/auth/signUp"} element={<SignUp />} />
        <Route path={"/auth/forgot-password"} element={<ForgotPassword />} />
        <Route path={"/auth/reset-password"} element={<ResetPasswordRoute />} />
        {/* Add the 404 Not Found route without any layout */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="648805285797-kgc785jg9ffbt9u8t73leb6o9pcs59oh.apps.googleusercontent.com">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Toaster position="top-right" reverseOrder={false} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>
);
