import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <nav><h2 className='text-3xl text-pink-600'>Audiophile</h2>
    </nav>
    <Outlet/>
    </>
  )
}

export default HomeLayout