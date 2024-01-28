import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <section>
      <h2 className="font-bold text-3xl capitalize">{text}</h2>
      <div className="h-1 w-24 mt-2 bg-warning" />
    </section>
  )
}

export default SectionTitle