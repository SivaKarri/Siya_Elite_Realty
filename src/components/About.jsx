import React from 'react'

export default function About() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
          <p>Expert solutions in buying, selling, and managing properties with complete transparency.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Consulting</h3>
          <p>Professional guidance to make informed investment decisions in real estate markets.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Brokerage</h3>
          <p>Reliable brokerage services ensuring smooth property transactions with trust and efficiency.</p>
        </div>
      </div>
    </section>
  )
}
