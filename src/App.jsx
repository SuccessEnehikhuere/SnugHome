import { useState } from 'react'
import { HomeLayout, Home, About, Error, Landing, Register, Login, Cart, Products, SingleProduct } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Products',
        element: <Products />,
      },
      {
        path: 'Cart',
        element: <Cart />,
      },
      {
        path: 'Products:/id',
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: '/Register',
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: '/Login',
    element: <Login />,
    errorElement: <Error />,
  },
])


function App() {
 
 return (
  <>
  <RouterProvider router={router}>
  </RouterProvider> 
  </>
 )
}

export default App
