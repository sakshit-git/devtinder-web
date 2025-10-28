import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';                                                  
import { useNavigate } from 'react-router-dom';
import{ BASE_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('khushi.yadav@wes.co.in');
  const [password, setPassword] = useState('Khushi@123');
  const [error, setError] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault(); // prevents page refresh
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { email, password },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
      //console.log("Axios response.data:", res.data);
      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (err) {
      setError(err.res?.data?.message || 'Login failed. Please try again.');
      console.error(err.res || err.message);
    }
  }; 

  return (
  <div className="flex justify-center items-center min-h-screen bg-base-200">
  <div className="card bg-neutral text-neutral-content w-96">
    <div className="card-body items-center text-center">
      <h2 className="card-title text-xxl">Login</h2>
      
      <input
        type="email"
        value={email}
        placeholder="Email"
        className="input input-bordered w-full mb-3"
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        className="input input-bordered w-full mb-5"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <p className="text-red-700 align-text-left">{error}</p>
      <Link className="mb-2 text-left text-sm text-gray-300">Forgot Password?</Link>
      <div className="card-actions w-full">
        <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login;
