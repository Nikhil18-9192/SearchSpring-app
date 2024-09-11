import React from 'react'
import './Header.scss'
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <p className='logo_text'>SS</p>
        </div>
        <div className="search_container">
            <div className="search_box">
            <input type="text"  placeholder='Show product based on search' />
            <CiSearch className='search_icon' />
            </div>
        </div>
    </div>
  )
}

export default Header