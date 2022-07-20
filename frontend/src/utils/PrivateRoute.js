import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

// const PrivateRoute = ({ children, ...rest }) => {
//   let { user } = useContext(AuthContext);
//   return <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>;
// };

function PrivateRoute({ children }) {
  let { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
