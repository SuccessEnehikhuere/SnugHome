import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/user/userSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useQueryClient } from '@tanstack/react-query'


const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state)=>state.userState.user)
 

  const handleUserLogout = ()=>{
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries()
  }

 
  return (
    <header className="bg-white text-black py-2 z-[1] ">
      <div className="align-item flex justify-center sm:justify-end ">
        {/* USER*/}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs  bg-[#D87D4A] hover:bg-[#FBAF85] text-white"
              onClick={handleUserLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center ">
            <Link
              to="/login"
              className="link link-hover text-xs sm:text-sm capitalize"
            >
              sign in/ guest
            </Link>
            <Link
              to="/register"
              className="link link-hover text-xs sm:text-sm capitalize"
            >
              create account
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
