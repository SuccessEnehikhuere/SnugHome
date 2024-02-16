import React from 'react'
import { Filters, PaginationContainer, ItemsContainer } from '../components'
import { customFetch } from '../utilis'
// import ProductsContainer from '../components/ProductsContainer'

const url = '/products'

const productsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } = queryParams
  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn : ()=> customFetch(url, { params:queryParams })

  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])

    //new URL creates a new URL object from the request.url
    //the spread operator (...) converts the URL object into an array of its key-value pairs.
    //Object.from entries converts the key-value pairs of the array and converts it to an object
    //searchParams is an object that allows you to work with the query parameters of the URL
    //The .entries() method is then used to get an iterator over all key-value pairs in the query parameters.

    const response = await queryClient.ensureQueryData(productsQuery(params))
    const results = response.data.data
    const meta = response.data.meta

    return { results, meta, params }
  }

const Products = () => {
  return (
    <section>
      <Filters />
      <ItemsContainer />
      <PaginationContainer />
    </section>
  )
}

export default Products
