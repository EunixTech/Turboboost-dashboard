import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ element: Component, ...rest }) {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      element={userInfo ? <Component /> : <Navigate to="/auth/signIn" />}
    />
  );
}
export default  PrivateRoute 
