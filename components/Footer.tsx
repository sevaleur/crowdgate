import React from 'react'
import Image from 'next/image'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer id='contact' className='h-full w-full pt-20 pb-10'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Stay in touch!
        </h1>
        <div className='flex justify-center gap-10 md:gap-10 items-center w-full h-full py-10'>
          {socialMedia.map(({id, img}) => (
            <div key={id} className='h-[4rem] w-[4rem] flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
              <figure className='h-[2rem] w-[2rem]'>
                <Image src={img} alt={img} width={0} height={0} className='h-full w-full object-cover object-center' />
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className='flex mt-52 md:flex-row flex-col justify-center items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2025 CrowdGate 
        </p>
      </div>
    </footer>
  )
}

export default Footer