'use client'

import React, { useEffect, useState } from 'react'
import { Footer, NavBar, Portfolio, Socials, ScrollUp, Loading } from '../../../components'
import { IMAGES_NAV } from '../../../constants'

const Page = () => {
  const [load, setLoad] = useState(true)

  useEffect(() => {

    const intervalId = setInterval(() => {
      setLoad(false)
    }, 2500)

    return () => clearInterval(intervalId)

  }, [])

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
                <Portfolio super={{ endIndex: -1 }} />
              </div>
              <Footer type='sm' />
            </div>
          </main>
      }
    </>
  )
}

export default Page