import React, { useState } from 'react'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'


const HomeFooter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // console.log(errors)

  //useForm is a library for managing form state and validation in rect applications using hooks

  const [inputValue, setInputValue] = useState('')

  const onSubmit = (data) => {
    if (!inputValue) {
      // Object.values(errors).forEach((error) => {
      //   toast.error(error.message)
      // })
      toast.error('please input your email')
    }

    
    toast.success('Successful subscription!')
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

 

  return (
    <section className="mt-16 bg-base-300  px-8 md:px-16 py-20 rounded-md">
      <h2 className="font-bold text-2xl md:text-3xl ">Join our NewsLetter</h2>
      <div className="grid md:grid-cols-2 mt-4">
        <p className="text-base">
          Don't miss out on our exclusive home deals and discounts! Treat yourself to something special or surprise a loved one with a thoughtful home gift. Subscribe to our newsletter and be the first to explore our fresh
          arrivals and stay ahead of the curve.
        </p>
        <form
          className="flex items-center justify-center gap-x-8 mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('email', {
              required: 'email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            placeholder="email"
            name="email"
            type="text"
            className="input input-md w-full md:w-80 capitalize"
            value={inputValue}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn btn-md  bg-[#4f46e5] text-white hover:bg-[#a5b4fc]"
            // onClick={subscribeMessage}
          >
            subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default HomeFooter
