import React from 'react'
import { FeaturedProducts, Hero } from '../components'

import { customFetch } from '../utilis'


const url = '/products?featured=true'

export const loader = async()=>{
  const response = await customFetch(url)
  const results = response.data.data
  return {results};
}


const Landing = () => {
  return (
    <>
     <Hero/>
     <FeaturedProducts/>
    </>
  )
}

export default Landing