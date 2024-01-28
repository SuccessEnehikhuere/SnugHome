import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Navlinks } from './NavLinks'

const themes = {
  winter: 'winter',
  dracula:'dracula'
}

const getThemeFromLocalStorage = ()=>{
  return localStorage.getItem('theme') || themes.winter
}

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage())
  const toggleTheme = ()=>{
    const {winter, dracula} = themes;
    const newTheme = theme === winter ? dracula : winter;
     
    setTheme(newTheme);
  }
  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <nav className=" bg-primary-content">
      <div className="navbar align-item">
        {/*DROPDOWN MENU*/}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className=" w-6 h-6 font-bold " />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow bg-base-200 rounded-box w-52"
          >
            <Navlinks />
          </ul>
        </div>
        {/*TITLE*/}
        <div className="navbar-start flex items-center">
          <h2 className="font-bold text-2xl lg:text-3xl">audiophile</h2>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/*THEME*/}

          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} />
            <BsSunFill className="swap-on w-4 h-4" />
            <BsMoonFill className="swap-off w-4 h-4" />
          </label>

          {/*CART LINK*/}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4 ">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm bg-[#D87D4A] indicator-item text-white">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
      {/*UNDERLINE*/}
      <div className="h-[1px] bg-white w-full md:w-[689px] lg:w-1110px align-item opacity-20" />
    </nav>
  )
}

export default Navbar
