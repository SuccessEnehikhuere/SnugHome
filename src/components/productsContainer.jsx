import React, { useState } from 'react'
import ProductsGrid from './ProductsGrid'
import { useLoaderData } from 'react-router-dom'
import ProductsList from './ProductsList'
import {BsFillGridFill, BsList} from 'react-icons/bs'

const ProductsContainer = () => {
  const {meta} = useLoaderData()
  const totalProducts = meta.pagination.total 
  const [layout,setLayout ] = useState('grid');

  const setActiveStyles = (style)=>{
     return `text-xl btn btn-circle btn-sm`
  }

  return (
    <>
      {/*HEADER */}
      <div className="borderd border-b pb-5 border-base-300 flex justify-between mt-8 items-center]">
        <h4 className="capitalize font-medium text-md">
          {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            className={setActiveStyles('grid')}
            onClick={() => setLayout('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            className={setActiveStyles('list')}
            onClick={() => setLayout('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/*PRODUCT*/}
      <div>
        {totalProducts === 0 ? (<h5 className='mt-16 text-2xl'>sorry, no product found...</h5>) : layout === 'grid' ? <ProductsGrid /> : <ProductsList />  }
      </div>   
    
    </>
  )
}

export default ProductsContainer