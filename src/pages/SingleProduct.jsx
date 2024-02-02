import React, { useState } from 'react'
import { customFetch, getAmountOptions } from '../utilis'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

const data = [
  { id: 1, unit: '2x', text: 'Earphone unit' },
  { id: 2, unit: '2x', text: 'Earphone unit' },
  { id: 3, unit: '2x', text: 'Earphone unit' },
  { id: 4, unit: '2x', text: 'Earphone unit' },
  { id: 5, unit: '2x', text: 'Earphone unit' },
]

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)

  return { product: response.data.data }
}

const SingleProduct = () => {
  const { product } = useLoaderData()
  const { image, title, company, colors, price, description } =
    product.attributes
  const [productColor, setProductColor] = useState(colors[0])
  const [productAmount, setProductAmount] = useState(1)
  const selectProductAmount = (e) => {
    setProductAmount(parseInt(e.target.value))
  }

  const dispatch = useDispatch()
  const cartProduct = ({
    cartID : product.id + productColor,
    productID : product.id,
    image,
    title,
    price,
    productAmount,
    productColor,
    company,
  })

  const addToCart = ()=>{
    dispatch(addItem({product: cartProduct}))
  }
  
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT SECTION */}
      <div className="gap-y-8 grid md:grid-cols-2 md:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full mt-4 "
        />

        {/* PRODUCT INFO */}
        <div>
          <h4 className="text-xl text-[#D87D4A]  mt-2 tracking-widest ">
            {company}
          </h4>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <p className="mt-6 leading-8">{description}</p>
          <p className="mt-3 text-xl">{price}</p>

          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge  w-6 h-6 mr-2  ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>

          <div className='flex gap-x-6'>
            {/* AMOUNT */}
            <div className="form-control w-50  max-w-xs">
              <label className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-bordered select-secondary select-md "
                value={productAmount}
                onChange={selectProductAmount}
              >
                {getAmountOptions(10)}
              </select>
            </div>

            {/* CART BUTTON */}
             <div className="mt-10">
            <button className="btn bg-[#D87D4A] uppercase text-white btn-md hover:bg-[#FBAF85;] text-xs" onClick={addToCart}>
              add to cart
            </button>
          </div>
          </div>      
        </div>
      </div>

    </section>
  )
}

export default SingleProduct
