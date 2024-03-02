'use client'

import React, { useEffect, useState } from 'react'
import { ScrollUp, Socials, NavBar, Portfolio, Footer, Loading } from '../../../../components'
import { AllImages, IMAGES_NAV } from '../../../../constants'
import { convertParamsToName, shuffleArray } from '@/pages/api'
import { ImageLib } from '../../../../types'

interface PageParams {
    params: {
        image: string,
    }
}

const Page = ({ params }: PageParams) => {

    const [imageArray, setImageArray] = useState<ImageLib[] | undefined>(undefined);
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const foundImage = AllImages.find((item: any) => item.link === params.image);
            if (foundImage) {
                setImageArray([foundImage]);
            } else {
                setImageArray(undefined);
            }
            setLoad(false)
        }, 2500)

        return () => clearInterval(intervalId)
    }, [params.image]);

    return (
        <>
            {
                load ?
                    <Loading />
                    :
                    <main className='h-full'>
                        <ScrollUp />
                        <Socials />
                        <NavBar PageLinks={IMAGES_NAV} />
                        <div className='w-full bg-white dark:bg-base-200'>
                            <div className='bg-gradient-linear bg-white bg-23 dark:bg-dark-gradient-linear mb-3'>
                                <Portfolio
                                    super={{
                                        endIndex: -1,
                                        showButton: false,
                                        theImage: imageArray
                                    }}
                                    pageTitle={convertParamsToName(params.image)}
                                />
                            </div>
                            <Footer type='sm' />
                        </div>
                    </main>
            }
        </>
    )
}

export default Page

