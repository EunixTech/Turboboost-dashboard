import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./services/store";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import DashboardPageRoute from "./views/DashboardPage.jsx";
// import DashboardPageRoute from "./routes/DashboardPag.jsx";
import SignInRoute from "./routes/SignInRoute";
import ConnectStore from "./views/ShopifyAuth.jsx";
import SignUp from "./routes/SignUpRoute";
import ResetPasswordRoute from "./routes/ResetPasswordRoute";
// import ConnectWebsite from "./routes/connect-website.jsx";
import ConnectWebsite from "./views/ConnectWebsite.jsx";
// import CacheWarmup from "./routes/cache-warmup";
import CacheWarmup from "./views/CacheWarmupage.jsx";

// import CacheStatus from "./routes/cache-status";
import CacheStatus from "./views/CacheStatus.jsx";

import Home from "./views/home.jsx";

import Logs from "./views/Logs.jsx";
// import Logs from "./routes/logs.jsx";

// import Integrations from "./routes/integrations";
import Integrations from "./views/integrations.jsx";

import Billing from "./views/Billing.jsx";
import Settings from "./views/SettingPage.jsx";
// import Affiliate from "./routes/affiliate";
import Affiliate from "./views/Affiliate.jsx";
import ForgotPassword from "./routes/ForgotPassword";
import ShopifyAdmin from "./views/ShopifyAdmin.jsx";
import Store from "./routes/store";
import HomeLayout from "./layouts/index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";
import NewOnboard from "./routes/newOnboarding.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./views/404.jsx";
import { GetAxiosConfig,PostAxiosConfig } from "./utils/axiosConfig.js";
import { setToggle } from "./slice/statusToggleSlice";
import { useDispatch, useSelector } from "react-redux";
const router = [
  {
    path: "/",
    element:  <DashboardPageRoute />,
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
  const navigate = useNavigate(); 
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
        localStorage.setItem('apiCalled', 'true');
      } else if(resJSON.status === 403){

      }else{
        // toogleLoadingAPI(false);
        // return toast.error("Please try again");
      }
    } catch (error) {
      // toogleLoadingAPI(false);
      // if (error?.response?.status === 401) {
      //   localStorage.removeItem('authToken');
      //   window.location.replace('/login-shopify');
      // } 
      // console.error("Error fetching user profile data:", error);
    }
  };

  useEffect(() => {
   
    const urlParams = new URLSearchParams(window.location.search);
    const userToken = urlParams.get("userToken");
    setShowOnboardingModal(userToken ? true : false);
    
    // if (!localStorage.getItem("authToken")) {
    //   navigate("/auth/signIn");
    // } else {
    //   setShowOnboardingModal(!!userToken);
    // }

    // window.intercomSettings = {
    //   api_base: "https://api-iam.intercom.io",
    //   app_id: "eh6xj4vw",
    //   email: "manmohankumar023@hmail.com", // the email for your user
    //   user_id: "65b10b132fea19be3faabfd2", // a UUID for your user
    //   user_hash: "6729f802942742b4f8c6ea81dc9725df8c5f8d6f49a632d3f96ff023a60b01b3" // an Identity Verification user hash for your user
    //   };

    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "eh6xj4vw",
      user_id: "65b10b132fea19be3faabfd2", // a UUID for your user
      user_hash: "6729f802942742b4f8c6ea81dc9725df8c5f8d6f49a632d3f96ff023a60b01b3" // an Identity Verification user hash for your user
    };


  
    const checkAuth = () => {
      const urlParams = new URLSearchParams(window.location.search);
    const userToken1 = urlParams.get("userToken");
      const authToken = localStorage.getItem('authToken');
      const isLoginRoute = window.location.pathname === '/login-shopify';

      if (!authToken && !isLoginRoute && !userToken1) {
        // Redirect to login page if authToken is not available and not on the login route
        window.location.replace('/login-shopify');
      } else if (authToken && isLoginRoute) {
        // Redirect to dashboard page if authToken is available and on the login route
        window.location.replace('/dashboard');
      }
    };
    fetchImageOptimizationData();
    checkAuth();
 
  }, []);


  // useEffect(() => {
  //   const hasApiBeenCalled = localStorage.getItem('apiCalled');
  //   if (!hasApiBeenCalled) {
  //     // Make the API call here
  //     // ...
  //     // Set the flag in local storage to indicate that the API call has been made
  //     localStorage.setItem('apiCalled', 'true');
  //   }
  // }, []);
  

  return (
    <>
    {showOnboardingModal && <NewOnboard />}
      {!(
        // location.pathname === "/auth/signIn" ||
        // location.pathname === "/auth/signUp" ||
        // location.pathname === "/auth/forgot-password" ||
        // location.pathname === "/auth/reset-password" ||
        location.pathname === "/login-shopify"
      ) && (
        <HomeLayout>
          <Routes>
            {router.map((item, i) => {
              return <Route key={i} path={item.path} element={item.element} />;
            })}
               <Route path="*" element={<NotFound />} />
            {/* Include the connect-to-store route here */}
            {/* <Route path="/connect-to-store" element={<ConnectStore />} /> */}
          </Routes>
          
        </HomeLayout>
      )}
      <Routes>
        {/* Include the connect-to-store route here as well */}
        {/* <Route path="/connect-to-store" element={<ConnectStore />} />  */}
        <Route path={"/login-shopify"} element={<SignInRoute />} />
        {/* <Route path={"/auth/signUp"} element={<SignUp />} />
        <Route path={"/auth/forgot-password"} element={<ForgotPassword />} />
        <Route path={"/auth/reset-password"} element={<ResetPasswordRoute />} /> */}
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
      <BrowserRouter>
        <App />
        <Toaster position="top-right" reverseOrder={false} />
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);
