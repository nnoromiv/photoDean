'use client'

import ModeSwitch from '@/app/ModeSwitcher'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { logo } from '../constants'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { NavBarProps } from '../types'


const NavBar: React.FC<NavBarProps> = ({ active, PageLinks}) => {  

    const [ pageOffset, setPageOffset ] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setPageOffset(offset);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='relative'>
            <nav className={`
            navbar  px-3 w-full
            ${
                pageOffset > 50 ? 'fixed top-0 glass z-50' : 'absolute bg-transparent top-0 z-11'
            }
        `}>
           <div className="flex-1">
            <Link href={'/'}>
            <div className='flex items-center '>
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt='logo'
                    className='bg-white rounded-full mr-3 z-50'
                />
                <h2 className="text-black text-3xl dark:text-white max-pn:hidden">Photo Dean</h2>
            </div>
            </Link>
           </div>
            <div className="flex-none z-10 max-pn:hidden">
                <ul className="menu menu-horizontal px-1">
                    {
                        PageLinks.map((item: any, index: number) => (
                            item.name === 'Home' ?
                            <li key={index} className='text-base-200 font-bold  text-[18px] dark:text-white'  >
                                <Link href={item.link}>{item.name} </Link>
                            </li>
                            :
                            <li key={index} className='text-grey  text-[18px] dark:text-white' >
                                <Link href={item.link}>{item.name} </Link>
                            </li>
                        ))
                    }
                </ul>
                <ModeSwitch />
            </div>

            <div className='pn:hidden z-40'>
                <MobileNav PageLinks={PageLinks}/>
            </div>
        </nav>
        </div>
    )
}

export default NavBar