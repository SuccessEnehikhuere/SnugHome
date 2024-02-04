import React from 'react'
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {CartTotals, CartItemsList, SectionHeading} from '../components'

const Cart = () => {
  const user = null
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
            <Link to="/checkout" className="btn btn-secondary btn-block mt-8">
              proceed to checkout
            </Link>
          ) : (
            <Link to="/checkout" className="btn btn-secondary btn-block mt-8 capitalize">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart