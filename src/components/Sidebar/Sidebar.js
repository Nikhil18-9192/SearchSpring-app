import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsBoxSeam } from "react-icons/bs";
import './Sidebar.scss'

function Sidebar() {
  return (
    <>
    <nav>
        <ul>
            <li>
              <NavLink activeclassname="active" to="/">
            <BsBoxSeam className='icon'/>
            <span className='text'>Products</span>
            </NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Sidebar