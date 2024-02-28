'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AllImages } from '../constants'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Button from './Button'

function shuffleArray<T>(array: T[]): T[] {

    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }

    return array
}


const Works = () => {
    const [allImages, setAllImages] = useState(AllImages)
    
    useEffect(() => {
        setAllImages(shuffleArray(AllImages))        
    },[])

    return (
        allImages.map((item: any, index: number) => (
            <div key={index} className='px-3'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-3xl font-bold max-xs-pn:text-xl'>{item.name} Pictures</h1>
                    <Button title='See All' style='w-fit' />
                </div>
                <ResponsiveMasonry
                    className='mt-5'
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1024: 4 }}
                >
                    <Masonry >
                        {
                            shuffleArray(item.image).slice(0,7).map((item: any, index: number) => (
                                <Image
                                    key={index}
                                    alt='image'
                                    src={item.image}
                                    width={350}
                                    priority={true}
                                    height={350}
                                    className='object-contain rounded-sm self-center my-1 blur-sm hover:blur-0 hover:scale-110 max-tb:blur-0'
                                />
                            ))
                        }
                    </Masonry>
                </ResponsiveMasonry>

            </div>
        ))
    )
}

export default Works