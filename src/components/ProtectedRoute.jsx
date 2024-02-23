import { Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ element: Component, ...rest }) {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? (
    <Routes>
      <Route {...rest} element={<Component />} />
    </Routes>
  ) : (
    <Navigate to="/auth/signIn" />
  );
}

export default PrivateRoute;
