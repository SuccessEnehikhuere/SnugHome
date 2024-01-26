import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsCart3 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Navlinks } from './NavLinks'

const Navbar = () => {
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
            {' '}
            <Navlinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/*THEME*/}
          {/*CART LINK*/}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4 ">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
