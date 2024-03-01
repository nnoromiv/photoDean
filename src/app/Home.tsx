'use client'

import React from 'react'
import { Message, Footer, Hero, NavBar, Portfolio, Socials, ScrollUp } from '../../components'
import { NAV } from '../../constants'

const Home = () => {
  return (
    <main className='h-full'>
      <ScrollUp />
      <Socials />
      <NavBar PageLinks={NAV}/>
      <div className='w-full bg-white dark:bg-base-200'>
        <div className='gradient-linear'>
          <Hero />
          <Message />
          <Portfolio />
        </div>
        <Footer type='lg'/>
      </div>
    </main>
  )
}

export default Home