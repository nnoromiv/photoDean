'use client'
import React, { useRef } from 'react'
import Works from './Works'
import Image from 'next/image'
import { DARK_PORTFOLIO_WAVE, PORTFOLIO_WAVE } from '../assets'
import { useInView } from 'framer-motion'
import { PortfolioProps } from '../types'
import { useTheme } from 'next-themes'

const Portfolio:React.FC<PortfolioProps> = ({ super: { endIndex, showButton, theImage }, pageTitle}) => {
  const ref = useRef<Element>(null) as any
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme()

  return (
    <div id='portfolio'>
      <Image
        alt='image'
        src={theme === 'dark' ? DARK_PORTFOLIO_WAVE : PORTFOLIO_WAVE}
        width={500}
        height={500}
        className='w-full'
      />
      <div className='flex flex-col py-10 bg-whiteRabbit dark:bg-base-300'>
        <div className='text-black dark:text-white'>
          <h1 className='text-7xl font-bold mb-5 text-center max-xs-pn:text-5xl'>{ pageTitle !== undefined ? pageTitle :'Portfolio.' }</h1>
          <p className='text-3xl font-bold mb-5 text-center max-xs-pn:text-sm'>LET THE IMAGES SPEAK FOR ME.</p>
          <div ref={ref} className={`
              ${isInView ? 'transform-none opacity-1' : 'translate-x-[100%] opacity-0'}
              transition-all duration-2000 ease-in-out delay-1500
          `}>
            <Works endIndex={endIndex} showButton={showButton} theImage={theImage} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio