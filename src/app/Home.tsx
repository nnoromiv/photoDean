'use client'

import React, { useEffect, useState } from 'react'
import { Message, Footer, Hero, NavBar, Portfolio, Socials, ScrollUp, Loading } from '../../components'
import { NAV } from '../../constants'

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
            <NavBar PageLinks={NAV} />
            <div className='w-full bg-white dark:bg-base-200'>
              <div className='bg-gradient-linear bg-white bg-23 dark:bg-dark-gradient-linear'>
                <Hero />
                <Message />
                <Portfolio super={{ endIndex: undefined }} />
              </div>
              <Footer type='lg' />
            </div>
          </main>
      }
    </>
  )
}

export default Home