import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import '../css/Register.css'

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, email, password, confirm_password);
  };

  return (
    <section>
      <form className='register-form' onSubmit={handleSubmit}>
        <hr />
        <div>
          <label className='register-label' htmlFor="username">Username</label>
          <input className='register-input'
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label className='register-label' htmlFor="email">Email</label>
          <input className='register-input'
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label className='register-label' htmlFor="password">Password</label>
          <input className='register-input'
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <label className='register-label' htmlFor="confirm_password">Confirm Password</label>
          <input className='register-input'
            type="password"
            id="confirm_password"
            onChange={e => setConfirm_password(e.target.value)}
            placeholder="Confirm Password"
            required
          />
          <p>{confirm_password !== password ? "Passwords do not match" : ""}</p>
        </div>
        <div>
          <button className='register-button'>Submit</button>
          <Link to="/" >
            <button className='register-button'>Cancel</button>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
