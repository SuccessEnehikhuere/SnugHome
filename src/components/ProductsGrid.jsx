import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utilis'

const ProductsGrid = () => {
  const { results } = useLoaderData()

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      {results.map((result) => {
        const { title, price, image } = result.attributes
       
        return (
          <Link
            key={result.id}
            to={`/products/${result.id}`}
            className=" card w-full shadow-xl hover:scale-105 transition duration-300 "
          >
            <figure className="pt-4 px-4">
              <img
                src={image}
                alt={title}
                className=" h-64 rounded-xl md:h-48 w-full object-cover "
              />
            </figure>

            <div className="card-body items-center text-center">

               <h2 className="card-title capitalize tracking-wider">{title}</h2>
            <span className="text-secondary">{formatPrice(price)}</span>
            </div>
           
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsGrid
