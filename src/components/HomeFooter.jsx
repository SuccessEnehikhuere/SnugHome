import React from 'react'

const data = [
  {
    id: 1,
    icon: '',
    title: 'mission',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.',
  },
]

const HomeFooter = () => {
  return (
    <section className="card grid md:grid-cols-2 lg:grid-cols-3 mt-10 w-full gap-10">
      <div className="card-body rounded-lg  shadow-xl bg-primary-content">
        our mission
      </div>

      <div className="card-body rounded-lg shadow-xl bg-primary-content">
        our mission
      </div>

      <div className="card-body rounded-lg  shadow-xl bg-primary-content">
        our mission
      </div>
    </section>
  )
}

export default HomeFooter