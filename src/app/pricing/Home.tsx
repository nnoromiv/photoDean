'use client'

import React, { useEffect, useState } from 'react'
import { ScrollUp, Socials, NavBar, Footer, Price, Loading } from '../../../components'
import { PRICING_NAV } from '../../../constants'

const Home = () => {
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
            <NavBar PageLinks={PRICING_NAV} />
            <div className='w-full bg-white dark:bg-base-200'>
              <div className='bg-gradient-linear bg-white bg-23 dark:bg-dark-gradient-linear'>
                <Price />
              </div>
              <Footer type='sm' />
            </div>
          </main>
      }
    </>
  )
}

export default Home