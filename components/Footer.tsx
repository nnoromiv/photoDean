import Image from 'next/image'
import React from 'react'
import { PORTFOLIO_WAVE_ } from '../assets'
import { FooterProps } from '../types'

const Footer: React.FC<FooterProps> = ({ type }) => {
    return (
        <footer className="footer footer-center pb-3  text-base-content">
            {
                type === 'lg' &&
                <Image
                    alt='image'
                    src={PORTFOLIO_WAVE_}
                    width={500}
                    height={500}
                    className='w-full rotate-180 -mt-2'
                />
            }
            <aside>
                <p>Copyright © 2024 - All right reserved by IV</p>
            </aside>
        </footer>
    )
}

export default Footer