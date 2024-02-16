import React from 'react'
import { Navlinks } from './NavLinks'
import { Footerlinks } from './NavLinks'
import IconLinks from './IconLinks'

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-black text-white mt-8 md:mt-10">
      <div className="align-item">
        {/*UNDERLINE*/}
        {/* <div className='h-1 w-24 bg-warning mt-0 pt-0 '/> */}
        <nav className="flex flex-col place-self-center md:place-self-start lg:flex-row lg:navbar lg:justify-between lg:p-0">
          {/*TITLE*/}
          <div className="grid place-items-center md:place-items-start">
            <h2 className="text-3xl font-bold ">
              <span className="text-[#4f46e5]">Snug</span>Home
            </h2>
          </div>
          {/*LINKS*/}
          {/*REDUCE TEXT SIZE OF LINKS IN MOBILE*/}
          <div className="grid place-items-center mt-6">
            <ul className="menu text-base menu-sm md:menu-md menu-horizontal font-medium ">
              <Footerlinks/>
            </ul>
          </div>
        </nav>
        <p className="text-center md:text-start lg:text-start leading-6 tracking-widest text-neutral-content lg:text-base lg:pt-4">
          SnugHome is an all in one stop to fulfill your cozy and home-related
          needs. Follow us on social media for daily doses of home inspiration,
          decor tips, and behind-the-scenes sneak peeks. Connect with us on
          Facebook, Instagram, Pinterest, and more!
        </p>
        <div className="flex flex-col  place-self-center mt-6 md:flex-row md:place-self-start md:navbar md:justify-between">
          <div>
            <p className="text-neutral-content">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="grid place-items-center mt-12 md:place-items-start md:mt-0 ">
            <IconLinks />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer