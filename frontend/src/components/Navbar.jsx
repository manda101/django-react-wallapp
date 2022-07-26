// Navbar
import { useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Home from '../views/homePage';
import Login from '../views/loginPage';
import Register from '../views/registerPage';
import '../css/Navbar.css'

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav className='navbar'>
      <div>
        <h1 className='app-header'>Wall App</h1>
        <p>Register and/or log in to post on the wall </p>
        <div>
          {/* if user, show logout button, else show register and login buttons */}
          {user ? (
            <>
              <button className='nav-button' onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
            <Link to='/register'>
                <button className='nav-button'>
                  Register
                </button>
              </Link>
              <Link to='/login' >
                <button className='nav-button'>
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className='flex flex-col min-h-screen overflow-hidden'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </nav>
  );
};

export default Navbar;
