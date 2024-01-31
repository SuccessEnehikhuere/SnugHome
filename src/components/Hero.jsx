import React from 'react'
import img1 from '../assets/images/pineapple.jpg'
import img2 from '../assets/images/creamy.jpg'
import img3 from '../assets/images/artist.jpg'
import img4 from '../assets/images/mojito.jpg'
import img5 from '../assets/images/red wine.jpg'
import img6 from '../assets/images/wine.jpg'
import { Link } from 'react-router-dom'
import { FeaturedProducts, HomeFooter } from '../components'

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
            Embark on a journey into the heart of innovation with our
            meticulously curated collection of cutting-edge products. At the
            intersection of sleek design and technological brilliance, each item
            in our selection promises to redefine the way you experience
            everyday life.
          </p>
          <div>
            <button className="btn  bg-[#D87D4A] capitalize text-white hover:bg-[#FBAF85] mt-4">
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
      <HomeFooter />
    </section>
  )
}

export default Hero
