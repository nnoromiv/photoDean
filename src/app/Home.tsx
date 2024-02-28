import React from 'react'
import { About, Footer, Hero, NavBar, Portfolio, Socials } from '../../components'

const Home = () => {
  return (
    <main className='h-full'>
      <NavBar />
      <Socials />
      <div className='w-full bg-white dark:bg-base-200'>
        <div className='gradient-linear'>
          <Hero />
          <About />
          <Portfolio />
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default Home