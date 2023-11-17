import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./services/store";
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import DashboardPageRoute from "./routes/DashboardPag"
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
import { GoogleOAuthProvider } from '@react-oauth/google';
const router = [
  {
    path: "/",
    element: <Home />,
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
    path: "/cache-warmup",
    element: <CacheWarmup />,
  },
  {
    path: "/cache-status",
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

];

const App = () => {
  const location = useLocation();
//   useEffect(() => {
//     window.Intercom('show'); // trigger
// }, []);

  return (
    <>
      {!(location.pathname === "/auth/signIn" || location.pathname === "/auth/signUp" || location.pathname === "/auth/forgot-password" || location.pathname === "/auth/reset-password") &&
        <HomeLayout  >
          <Routes>
            {router.map((item, i) => {
              return <Route key={i} path={item.path} element={item.element} />;
            })}
          </Routes>
        </HomeLayout>
      }
      <Routes>
        <Route path={"/auth/signIn"} element={<SignInRoute />} />
        <Route path={"/auth/signUp"} element={<SignUp />} />
        <Route path={"/auth/forgot-password"} element={<ForgotPassword />} />
        <Route path={"/auth/reset-password"} element={<ResetPasswordRoute />} />
      </Routes>
    </>
  );
};

 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="648805285797-kgc785jg9ffbt9u8t73leb6o9pcs59oh.apps.googleusercontent.com">
    <Provider store={store}>

      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </BrowserRouter>
    </Provider>
  </GoogleOAuthProvider>
);
