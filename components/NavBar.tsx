import ModeSwitch from '@/app/ModeSwitcher'
import Image from 'next/image'
import React from 'react'
import { NAV, logo } from '../constants'
import Link from 'next/link'
import MobileNav from './MobileNav'


const NavBar = () => {
    return (
        <nav className="navbar bg-transparent px-3 w-full absolute  top-0 z-11">
            <div className="flex-1 max-pn:hidden">
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt='logo'
                />
                <h2 className="text-black text-3xl">Photo Dean</h2>
            </div>
            <div className="flex-none z-10 max-pn:hidden">
                <ul className="menu menu-horizontal px-1">
                    {
                        NAV.map((item: any, index: number) => (
                            item.name === 'Home' ?
                            <li key={index} className='text-black  text-[18px]'  >
                                <Link href={item.link}>{item.name} </Link>
                            </li>
                            :
                            <li key={index} className='text-grey  text-[18px]' >
                                <Link href={item.link}>{item.name} </Link>
                            </li>
                        ))
                    }
                </ul>
                <ModeSwitch />
            </div>

            <div className='pn:hidden'>
                <MobileNav />
            </div>
        </nav>
    )
}

export default NavBar