import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Footer, Header, Loading, Navbar } from '../components'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <Loading/>
      ):<section className="align-item py-20 ">
        <Outlet />
      </section> }
      
      <Footer />
    </>
  )
}

export default HomeLayout
