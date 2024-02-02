import React from 'react'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { toast } from 'react-toastify'



const HomeFooter = () => {


  
  return (
    <section className="mt-16 bg-base-300  px-8 md:px-16 py-20 rounded-md">
      <h2 className="font-bold text-2xl md:text-3xl ">Join our NewsLetter</h2>
      <div className="grid md:grid-cols-2 mt-4">
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          pariatur nulla velit laborum, porro sunt! A sed veniam numquam. At
          similique porro error, ratione animi quam eius veniam vero harum.
        </p>
        <div className="flex items-center justify-center gap-x-8 mt-8">
          <input className="input input-md w-full md:w-80" />
          <button type='submit' className="btn btn-md  bg-[#D87D4A] text-white hover:bg-[#FBAF85]">
            subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeFooter