// LoginPage
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../css/Login.css'

// use loginUser method from AuthContext
const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  // login form inputs and buttons
  return (
    <section>
      <form className='login-form' onSubmit={handleSubmit}>
        <hr />
        <label className='login-label' htmlFor='username'>Username</label>
        <input className='login-input' type='text' id='username' placeholder='Enter Username' />
        <label className='login-label' htmlFor='password'>Password</label>
        <input className='login-input' type='password' id='password' placeholder='Enter Password' />
        <button className='login-button' type='submit'>Submit</button>
        <Link to='/' >
        <button className='login-button'>Cancel</button>
        </Link>
        
      </form>
    </section>
  );
};

export default LoginPage;
