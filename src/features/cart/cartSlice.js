import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
}

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload
      const item = state.cartItems.find((i) => i.cartID === product.cartID)
      if (item) {
        item.productAmount =+ product.productAmount
      } else {
        state.cartItems.push(product)
      }
      state.numItemsInCart += product.productAmount
      state.cartTotal += product.price * product.productAmount
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('item added to cart successfully!')
    },

    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState))
      return defaultState;
    },

    removeItem: (state, action) => {
      const {cartID} = action.payload
      const product = state.cartItems.find((i)=>i.cartID === cartID)
      state.cartItems.filter((i)=>i.cartID !== cartID)

      state.numItemsInCart -= product.productAmount
      state.cartTotal -= product.price * product.productAmount
      cartSlice.caseReducers.calculateTotals(state)
      toast.error('item removed from cart!')
    },

    editItem: () => {
      const {cartID, productAmount} = state.payload
      const item = state.cartItems.find((i)=>i.cartID===cartID)
      state.numItemsInCart += productAmount - item.productAmount

      state.cartTotal += item.price * (productAmount - item.productAmount)
      
      item.ProductAmount = productAmount
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Cart updated')

    },

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
      
    },
  },
})

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions

export default cartSlice.reducer
