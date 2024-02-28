'use client'
import React, { useRef } from 'react'
import Works from './Works'
import Image from 'next/image'
import { PORTFOLIO_WAVE } from '../assets'
import { useInView } from 'framer-motion'

const Portfolio = () => {
  const ref = useRef<Element>(null) as any
  const isInView = useInView(ref, { once: true })

  return (
    <div id='portfolio'>
      <Image
        alt='image'
        src={PORTFOLIO_WAVE}
        width={500}
        height={500}
        className='w-full'
      />
      <div className='flex flex-col py-10 bg-whiteRabbit'>
        <div className='text-black'>
          <h1 className='text-7xl font-bold mb-5 text-center max-xs-pn:text-5xl'>Portfolio.</h1>
          <div ref={ref} className={`
              ${isInView ? 'transform-none opacity-1' : 'translate-x-[100%] opacity-0'}
              transition-all duration-2000 ease-in-out delay-1500
          `}>
            <Works />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio