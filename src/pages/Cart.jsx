import React from 'react'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {CartTotals, CartItemsList, SectionHeading} from '../components'

const Cart = () => {
  const { user } = useSelector((state) => state.userState)
  const numItemsInCart = useSelector((state)=>state.cartState.numItemsInCart)
  
  if(numItemsInCart === 0) {
    return <SectionHeading text='your cart is empty' />
  }
  return (
    <>
      <SectionHeading text="Shopping cart" />
      <div className="mt-8 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn bg-[#4f46e5] btn-block mt-8 text-white hover:bg-[#a5b4fc]"
            >
              proceed to checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#4f46e5] btn-block mt-8 capitalize text-white hover:bg-[#a5b4fc]"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart