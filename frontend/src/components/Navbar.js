import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
      <div>
        <h1>Wall App</h1>
        <div>
          {user ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/wall">Wall</Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/wall">Wall</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
