'use client'

import React from 'react'
import { ScrollUp, Socials, NavBar, Footer, Price } from '../../../components'
import { PRICING_NAV } from '../../../constants'

const Home = () => {
  return (
    <main className='h-full'>
      <ScrollUp />
      <Socials />
      <NavBar PageLinks={PRICING_NAV}/>
      <div className='w-full bg-white dark:bg-base-200'>
        <div className='gradient-linear'>
         <Price />
        </div>
        <Footer type='sm'/>
      </div>
    </main>
  )
}

export default Home