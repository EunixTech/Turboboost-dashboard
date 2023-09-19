import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./services/store";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Dashboard from "./routes/dashboard";
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
const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
  // {
  //   path: "/auth/signIn",
  //   element: <Login />,
  // },
  // {
  //   path: "/auth/signUp",
  //   element: <SignUp />,
  // },
];

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      {!(location.pathname==="/auth/signIn" || location.pathname==="/auth/signUp")&&
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
      </Routes>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
