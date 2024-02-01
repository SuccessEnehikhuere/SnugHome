import { useState } from 'react'
import { HomeLayout, Home, About, Error, Landing, Register, Login, Cart, Products, SingleProduct } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorElement } from './components'

//loaders
import {loader as landingloader} from './pages/Landing'
import { loader as SingleProductLoader } from './pages/SingleProduct'
import { loader as ProductsLoader } from './pages/Products'
//actions


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingloader,
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
        errorElement: <ErrorElement />,
        loader: ProductsLoader,
      },
      {
        path: 'Cart',
        element: <Cart />,
      },
      {
        path: 'Products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader,
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
