import React from 'react'
import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utilis'

const url = '/products'

export const loader = async()=>{
  const response = await customFetch(url)
  const results = response.data.data;
  const meta = response.data.meta 
  return {results, meta}
}


const Products = () => {
  return (
    <section>
      <Filters/>
      <ProductsContainer/>
      <PaginationContainer/>
    </section>
  )
}

export default Products