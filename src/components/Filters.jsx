import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Filters = () => {
  const {meta, params} =useLoaderData()
  const { search, company, category, shipping, order, price } = params
  
  return (
    <Form className="rounded-md grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 px-8 gap-x-4 gap-y-8 bg-base-200">
      {/*SEARCH */}
      <FormInput
        type="search"
        name="search"
        label="search product"
        size="input-sm"
        defaultValue={search}
      />
      {/*CATEGORIES*/}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />

      {/*COMPANIES*/}
      <FormSelect
        label="select category"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />

      {/*ORDERS*/}
      <FormSelect
        label="sort by"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        size="select-sm"
        defaultValue={order}
      />

      {/*PRICE*/}
      <FormRange
        name="price"
        label="select price"
        size="range-sm"
        price={price}
      />
      {/*SHIPPING*/}
      <FormCheckbox label="free shipping" name="shipping" size="checkbox-sm" 
      defaultValue={shipping}/>

      {/*BUTTONS*/}
      <button type="submit" className="btn btn-secondary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  )
}

export default Filters
