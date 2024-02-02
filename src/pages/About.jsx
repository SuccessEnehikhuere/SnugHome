import React from 'react'
import image from '../assets/images/photo2.jpeg'
import { SectionTitle } from '../components'

const About = () => {
  return (
    <section className=" py-8">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <img
            src={image}
            className="object-cover  h-full rounded-lg shadow-md "
          />
        </div>

        <div>
        <SectionTitle text="our journey" />
        <p className="text-base capitalize mt-8 leading-8 tracking-wide md:leading-6 md:tracking-wider lg:leading-8 lg:tracking wide">
          at audiophile, we live and breathe innovation. we are not just a
          market place, we are a haven for gadgets enthusiasts. our mission is
          to bring you the latest gadgets that not only make your life easier
          but elevate it to a whole new level of excitement.our journey began
          with a simple goal: to provide a platform where tech enthusiasts,
          beginners, and experts alike can explore and acquire the most
          innovative gadgets on the market. Every gadget in our store is chosen
          for its functionality, design, and impact. From the latest smart home
          devices to futuristic wearables, our collection is designed to inspire
          and enhance your lifestyle.Thank you for choosing audiophile. Your
          journey into the future of technology starts here.
        </p>
      </div>
      </div>
    </section>
  )
}

export default About
