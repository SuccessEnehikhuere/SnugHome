import React from 'react'
import img1 from '../assets/images/photo1.jpeg'
import img2 from '../assets/images/photo2.jpeg'
import img3 from '../assets/images/hero1.webp'
import img4 from '../assets/images/hero2.webp'
import img5 from '../assets/images/hero3.webp'
import img6 from '../assets/images/hero4.webp'
import { Link } from 'react-router-dom'


const images = [img1, img2, img3, img4, img5, img6]

const Hero = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 items-center gap-24">
        <div className="div">
          <h2 className="max-w-2xl text-4xl capitalize font-bold tracking-tight md:text-5xl">
            shop with purpose, <br />
            shop with style
          </h2>
          <p className="text-lg max-w-xl leading-8 mt-8 opacity-75 tracking-wider">
            Welcome to SnugHome, where comfort meets style and every corner is
            designed to embrace you in warmth and coziness. At SnugHome, we
            believe that home is more than just a place; it's a sanctuary where
            you can retreat, relax, and rejuvenate.
          </p>
          <div>
            <button className="btn  bg-[#4f46e5] capitalize text-white hover:bg-[#a5b4fc] mt-4">
              <Link to="/products">our products</Link>
            </button>
          </div>
        </div>
        {/*CAROUSEL*/}
        <div className=" hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 rounded-box bg-primary-content">
          {images.map((image) => {
            return (
              <div key={image} className="carousel-item">
                <img
                  src={image}
                  className="h-full w-80 object-cover rounded-box"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
