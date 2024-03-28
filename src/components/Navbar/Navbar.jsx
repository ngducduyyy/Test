import React from 'react'
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav'>
        <h1>Anonime</h1>
       <ul className='nav-container'>
       <NavLink to={"/"} >Home</NavLink>
       <NavLink to={"/ListAnime"} >List anime</NavLink>
       </ul>
    </div>
    <input type="text" placeholder='Search anime or movie'/>
    </div>
  )
}

export default Navbar