import React from 'react'
import { FeaturedProducts, Hero, HomeFooter } from '../components'

import { customFetch } from '../utilis'


const url = '/products?featured=true'

const landingPageQuery ={
  queryKey : ['featuredProducts'],
  queryFn: () => customFetch(url)

}
export const loader = (queryClient) => async()=>{
  const response = await queryClient.ensureQueryData(landingPageQuery)
  const results = response.data.data
  return {results};
}


const Landing = () => {
  return (
    <>
     <Hero/>
     <FeaturedProducts/>
     <HomeFooter/>
    </>
  )
}

export default Landing