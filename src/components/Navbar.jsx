import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';
const Navbar = () => {
  const user=useSelector((store)=>store.user.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogout= async ()=>{
    try{
    const res=await axios.post(BASE_URL+"/logout",{},{
      withCredentials:true,
    });
    dispatch(removeUser());
    return navigate("/login");
    }catch(err){

    }
  }

  console.log(user);
   return (
    <div className="navbar bg-base-400 shadow-sm px-4">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
      </div>

      {/* User info */}
      {user && (
        <div className="flex-none flex items-center space-x-6">
          <p className="font-semibold">Welcome, {user?.firstName}</p>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ">
                <img alt="User" src={user?.photoId} />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-40 p-2 shadow"
            >
              <li>
                <Link className="justify-between" to="/profile">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar
