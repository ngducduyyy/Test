import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav'>
        <h1>Anonime</h1>
       <ul className='nav-container'>
       <NavLink to={"/"} >Home</NavLink>
       <NavLink to={"/ListAnime"} >List anime</NavLink>
       </ul>
    </div>
  )
}

export default Navbar