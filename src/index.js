import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import DashboardPageRoute from "./views/DashboardPage.jsx";
import SignInRoute from "./routes/SignInRoute";
import ConnectStore from "./views/ShopifyAuth.jsx";
import ConnectWebsite from "./views/ConnectWebsite.jsx";
import CacheWarmup from "./views/CacheWarmupage.jsx";

import CacheStatus from "./views/CacheStatus.jsx";
import Logs from "./views/Logs.jsx";

import Integrations from "./views/integrations.jsx";

import Billing from "./views/Billing.jsx";
import Settings from "./views/SettingPage.jsx";
import Affiliate from "./views/Affiliate.jsx";
import ShopifyAdmin from "./views/ShopifyAdmin.jsx";
import Store from "./routes/store";
import HomeLayout from "./layouts/index";
import NewOnboard from "./routes/newOnboarding.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./views/404.jsx";
import { GetAxiosConfig } from "./utils/axiosConfig.js";
import { setToggle } from "./slice/statusToggleSlice";
import { useDispatch } from "react-redux";
import NitroPack from "./views/NitroPack.jsx";
import ConnectSiteNitro from "./views/ConnectSiteNitro.jsx";
import NitroOtp from "./views/NitroOtp.jsx";

const router = [
  {
    path: "/",
    element: <DashboardPageRoute />,
  },
  {
    path: "/dashboard",
    element: <DashboardPageRoute />,
  },
  {
    path: "/connect-website",
    element: <ConnectWebsite />,
  },
  {
    path: "/page-optimization",
    element: <CacheWarmup />,
  },
  {
    path: "/assets-status",
    element: <CacheStatus />,
  },
  {
    path: "/logs",
    element: <Logs />,
  },
  {
    path: "/integrations",
    element: <Integrations />,
  },
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
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/shopify-admin",
    element: <ShopifyAdmin />,
  },
  {
    path: "/connect-to-store",
    element: <ConnectStore />,
  },

];


const App = () => {

  const location = useLocation();
  const dispatch = useDispatch();

  const [showOnboardingModal, setShowOnboardingModal] = useState(false);

  const fetchImageOptimizationData = async () => {
    try {

      const res = await GetAxiosConfig(`api/dashboard/fetch-optimization-handler-data`);
      const resJSON = res?.data;

      if (resJSON.status === 200) {

        const dataObj = resJSON?.optimizationHandlers?.dataArr;

        dispatch(setToggle({ key: "delayScripts", value: dataObj?.delay_js_resources?.value }));
        dispatch(setToggle({ key: "minifyJSFile", value: dataObj?.minify_js_code?.value }));
        dispatch(setToggle({ key: "lazyLoading", value: dataObj?.lazy_loading?.value }));
        dispatch(setToggle({ key: "imageSizeAdaption", value: dataObj?.image_size_adaption?.value }));
        dispatch(setToggle({ key: "minifyHTML", value: dataObj?.minify_html_code?.value }));
        dispatch(setToggle({ key: "fontLoading", value: dataObj?.font_optimization?.value }));
        dispatch(setToggle({ key: "fontRenderBehavior", value: dataObj?.font_swap_optimization?.value }));
        dispatch(setToggle({ key: "criticalCSS", value: dataObj?.critical_css?.value }));
        dispatch(setToggle({ key: "removeUnsedCSS", value: dataObj?.unused_css_code?.value }));
        dispatch(setToggle({ key: "assetsOptimization", value: dataObj?.assets_optimization?.value }));
        dispatch(setToggle({ key: "pageOptimization", value: dataObj?.page_optimization?.value }));
        dispatch(setToggle({ key: "imageOptimization", value: dataObj?.image_optimization?.value }));
        dispatch(setToggle({ key: "dashboardOptimization", value: dataObj?.dashboard_optimization }));
        dispatch(setToggle({ key: "optimizationMode", value: dataObj?.optimization_mode }));
        dispatch(setToggle({ key: "keepHTMLComment", value: dataObj?.keep_html_comment }));


      }
    } catch (error) {
      console.error("Error fetching user profile data:", error);
    }
  };

  useEffect(() => {
    fetchImageOptimizationData();
  }, [])

  useEffect(() => {

    const urlParams = new URLSearchParams(window.location.search);
    const userToken = urlParams.get("userToken");
    setShowOnboardingModal(userToken ? true : false);

    // // rU551POwDuDjGytdHWdQqiD4MsykOfNvbf0x0rFd
    // window.intercomSettings = {
    //   api_base: "https://api-iam.intercom.io",
    //   app_id: "vr8qka5j",
    //   email: "manmohankumar023@hmail.com", // the email for your user
    //   user_id: "65cc86a2d454e8c9c83f2d6e", // a UUID for your user
    //   user_hash: "65cc7a6d881b39eee9da4daac3768f18979528af0cdffda64ddb0a465b00fde4" // an Identity Verification user hash for your user
    // };

    window.Intercom("boot", {
      api_base: "https://api-iam.intercom.io",
      app_id: "vr8qka5j",
      email: "manmohankumar023@hmail.com", // the email for your user
      user_id: "65cc86a2d454e8c9c83f2d6e", // a UUID for your user
      user_hash: "65cc7a6d881b39eee9da4daac3768f18979528af0cdffda64ddb0a465b00fde4" // an Identity Verification user hash for your user
    });

    const checkAuth = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const userToken1 = urlParams.get("userToken");
      const authToken = localStorage.getItem('authToken');
      const isLoginRoute = window.location.pathname === '/login-shopify';
      const isNitroPackRoute = window.location.pathname === '/nitro-pack';
      const isConnectSiteNitro = window.location.pathname === '/connect-site';
      const isNitroOtp = window.location.pathname === '/nitro-otp';

      if (!authToken && !isLoginRoute && !userToken1 && !isNitroPackRoute && !isConnectSiteNitro && !isNitroOtp) {
        window.location.replace('/login-shopify');
      } else if (authToken && isLoginRoute) {
        window.location.replace('/dashboard');
      }
    };
    checkAuth();

  }, []);

  return (
    <>
      {showOnboardingModal && <NewOnboard />}
      {!(

        location.pathname === "/login-shopify" || location.pathname === "/nitro-pack" || location.pathname === "/connect-site" || location.pathname === "/verifiy-email-otp"
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

        <Route path={"/login-shopify"} element={<SignInRoute />} />
        <Route path={"/nitro-pack"} element={<NitroPack />} />
        <Route path={"/connect-site"} element={<ConnectSiteNitro />} />
        <Route path={"/verifiy-email-otp"} element={<NitroOtp />} />

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
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  </Provider>
);
