import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./services/store";
import{ Toaster } from 'react-hot-toast';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import DashboardPage from "./routes/DashboardPage";
import ForgotPasswordPage from "./views/ForgotPassword";
import PasswordScreen from "./routes/forgot-password"
import Login from "./routes/signIn";
import SignUp from "./routes/signUp.jsx";
import ConnectWebsite from "./routes/connect-website.jsx";
import CacheWarmup from "./routes/cache-warmup";
import CacheStatus from "./routes/cache-status";
import Home from "./routes/home.jsx";
import Logs from "./routes/logs";
import Integrations from "./routes/integrations";
import Billing from "./routes/billing";
import Settings from "./routes/settings";
import Affiliate from "./routes/affiliate";
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
    element: <DashboardPage />,
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
  {
    path: "/new-route",
    element: <PasswordScreen />,
  },
  

];

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {!(location.pathname==="/auth/signIn" || location.pathname==="/auth/signUp" || location.pathname==="/auth/forgot-password" )&&
        <HomeLayout  >
          <Routes>
            {router.map((item, i) => {
              return <Route key={i} path={item.path} element={item.element} />;
            })}
          </Routes>
        </HomeLayout>
      }
      <Routes>
        <Route path={"/auth/signIn"} element={<Login />} />
        <Route path={"/auth/signUp"} element={<SignUp />} />
        <Route path={"/auth/forgot-password"} element={<ForgotPasswordPage />} />
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
