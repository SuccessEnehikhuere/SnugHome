import React from 'react'
import { CheckoutForm, SectionHeading } from '../components'
import CartTotals from '../components/CartTotals'
import { useSelector } from 'react-redux'
import { store } from '../store'
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export const loader = (store) => () => {
   const user = store.getState().userState.user

   if (!user) {
     toast.warn('You must be logged in to checkout')
     return redirect('/login')
   }
   return null
}

const Checkout = () => {
  const cartItems = useSelector((state)=>state.cartState.cartTotal)
  if(cartItems === 0) {
    return <SectionHeading text='your cart is empty' />
  }

  return (
    <>
      <SectionHeading text='place your order'/>
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}

export default Checkout