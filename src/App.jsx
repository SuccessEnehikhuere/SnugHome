import { useState } from 'react'
import {
  HomeLayout,
  About,
  Error,
  Landing,
  Register,
  Login,
  Cart,
  Products,
  SingleProduct,
  Orders,
  Checkout,
} from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorElement } from './components'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

//loaders
import { loader as landingloader } from './pages/Landing'
import { loader as SingleProductLoader } from './pages/SingleProduct'
import { loader as ProductsLoader } from './pages/Products'
import { loader as CheckoutLoader } from './pages/Checkout'
import { loader as OrdersLoader } from './pages/Orders'

//actions
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as CheckoutAction } from './components/CheckoutForm'
import { store } from './store'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 5,
    },
  },
})

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
        loader: landingloader(queryClient),
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductsLoader(queryClient),
      },
      {
        path: 'Cart',
        element: <Cart />,
      },
      {
        path: 'Products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader(queryClient),
      },
      {
        path: 'Checkout',
        element: <Checkout />,
        loader: CheckoutLoader(store),
        action: CheckoutAction(store, queryClient),
      },
      {
        path: 'Orders',
        element: <Orders />,
        loader: OrdersLoader(store, queryClient),
      },
    ],
  },
  {
    path: '/Register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
  {
    path: '/Login',
    element: <Login />,
    errorElement: <ErrorElement />,
    action: loginAction(store),
  },
])

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
