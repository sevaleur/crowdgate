"use client"

import React from 'react'
import { events } from '@/data'
import { Carousel, Card } from './ui/CardCarousel'

const FeaturedEvents = () => {
  const cards = events.map((e, index) => (
    <Card key={e.img} card={{ src: e.img, title: e.title, category: e.category, desc: e.des }} index={index} /> 
  ))

  return (
    <section id='events' className='my-40 w-full'>
      <h1 className='heading'>
        The events waiting { ' ' }
        <span className='text-purple'>
          for you</span>
      </h1>
      <Carousel items={cards} />
    </section>
  )
}

export default FeaturedEvents