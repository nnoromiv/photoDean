'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { about } from '../constants'
import Button from './Button'
import { useInView } from 'framer-motion'

const Message = () => {
    const ref = useRef<Element>(null) as any
    const isInView = useInView(ref, { once: true })

    return (
        <div ref={ref} 
            id='message'
            className={`
                flex items-center justify-center max-lt:gap-[20%] max-lt:flex-col min-lt:gap-5 max-lt:mt-5
                ${
                    isInView ? 'transform-none opacity-1' : '-translate-x-[100%] opacity-0'
                }
                transition-all duration-2000 ease-in-out delay-1500
            `}
        >
            <div className='px-3'>
                <Image
                    src={about}
                    alt='hero'
                    width={500}
                    height={500}
                    className='object-cover w-[761px] h-[1037px] rounded-about max-lt:w-full max-lt:h-[900px] max-pn:h-[600px] max-xs-pn:h-[500px]'

                />
            </div>

            <div className='text-black max-lt:px-20 max-pn:px-4'>
                <h1 className='text-6xl font-bold mb-5'>Message</h1>
                <div className='bg-black h-[2px] w-full'></div>
                <p className="text-grey w-[500px] mt-5 leading-loose max-lt:w-full">
                    <em className='font-bold text-4xl text-black'>E</em> legance is not merely a visual concept; it&apos;s a narrative waiting to unfold. It&apos;s the delicate interplay of light and shadow, the unspoken poetry in a candid smile, and the timeless beauty found in the simplest of moments. A skilled photographer wields their camera like a storyteller&apos;s pen, capturing the essence of elegance in every frame. It&apos;s not about extravagant settings or opulent subjects; rather, it&apos;s the art of distilling grace from the ordinary, revealing the sophistication that exists in the day
                </p>
                
                <Button title='LEARN MORE' style='mt-20' />
                
            </div>
            
        </div>
    )
}

export default Message