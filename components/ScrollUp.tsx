import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'

const ScrollUp = () => {
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

    const handleUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    return (
        pageOffset > 50 &&
        <div className='flex flex-row gap-4 fixed bottom-20 items-start justify-start w-full px-5 z-50'>
            <FontAwesomeIcon onClick={handleUp} icon={faUpLong} className='text-black cursor-pointer w-[40px] border-link border-[3px] py-3 rounded-lg' />
        </div>
    )
}

export default ScrollUp