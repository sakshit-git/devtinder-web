import React from 'react'
import Navbar  from './Navbar';
import Footer from './footer';  
import { Outlet } from 'react-router-dom';
const body = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default body
