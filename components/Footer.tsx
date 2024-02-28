import Image from 'next/image'
import React from 'react'
import { PORTFOLIO_WAVE_ } from '../assets'

const Footer = () => {
    return (
        <footer className="footer footer-center pb-3  text-base-content">
            <Image
                alt='image'
                src={PORTFOLIO_WAVE_}
                width={500}
                height={500}
                className='w-full rotate-180'
            />
            <aside>
                <p>Copyright © 2024 - All right reserved by IV</p>
            </aside>
        </footer>
    )
}

export default Footer