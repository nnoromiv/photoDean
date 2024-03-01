import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Social } from '../constants'


const Socials = () => {
    return (
        <div className='flex flex-col max-pn:flex-row gap-4 fixed bottom-5 items-end justify-end w-full px-5 z-10'>
            {
                Social.map((item: any, index: number) => (
                    <Link key={index} href={item.link}>
                        <FontAwesomeIcon icon={item.icon} className='text-black w-[40px]' />
                    </Link>
                ))
            }
        </div>
    )
}

export default Socials