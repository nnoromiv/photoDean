"use client"

import React, { useEffect, useState } from 'react'
import Button from './Button'
import Image from 'next/image'
import { about, hero } from '../constants'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [imageStack, setImageSTack] = useState([hero, about])
  
  useEffect(() => {

    const intervalId = setInterval(() => {
      const images = [...imageStack]
      images.unshift(images.pop() as any)
      setImageSTack(images)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [imageStack])

  return (
    <div className='flex items-center justify-center gap-6 max-lt:flex-col max-lt:pt-32 max-lt:text-center'>
      <div className='text-black animate-moveIn'>
        <h1 id='type' className='text-6xl font-bold mb-5 max-lt:text-8xl max-pn:text-5xl'>
          <Typewriter
            options={{
              strings: ['Photographer <br />& Film Maker', 'Oziren Johnson <br /> Photo Dean'],
              autoStart: true,
              loop: true
            }}
          />
        </h1>
        <h3 className='text-5xl mb-3 lt:text-3xl'>Nigeria, NG</h3>
        <div className='gap-2'>
          <Button title='LINK TREE' style='mt-20 mr-10 max-pn:w-fit'  link='https://linktr.ee/Photodean' target='_blank'/>
          <Button title='PRICING' style='mt-20 max-pn:w-fit' link='/pricing' target='_blank' />
        </div>
      </div>
      <div className='stack px-2 animate-moveOut'>
        {
          imageStack.map((item: any, index: number) => (
            <Image
              key={index}
              src={item}
              alt='hero'
              width={500}
              height={500}
              className='w-[761px] h-[1037px] rounded-hero object-cover max-lt:w-full max-lt:h-[900px] max-pn:h-[600px] max-xs-pn:h-[500px]'
            />
          ))
        }
      </div>
    </div>
  )
}

export default Hero