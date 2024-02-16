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
            From plush sofas and luxurious bedding to stylish accent pieces and
            functional accessories, each item in our catalog is carefully
            selected to bring comfort and joy into your home. Whether you're
            furnishing a cozy apartment, a spacious house, or a charming
            cottage, SnugHome offers a diverse range of products to suit every
            taste and lifestyle. Our commitment to quality craftsmanship,
            sustainable materials, and affordable pricing ensures that you can
            create your dream home without compromise. But SnugHome is more than
            just an online store; it's a community of like-minded individuals
            who share a passion for creating inviting and nurturing living
            environments. We're here to inspire and empower you to transform
            your house into a SnugHome—a place where memories are made, laughter
            is shared, and every moment is cherished. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
