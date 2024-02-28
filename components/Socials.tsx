import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return (
        <div className='flex flex-row gap-4 fixed bottom-5 items-end justify-end w-full px-5 z-10'>
            <FontAwesomeIcon icon={faInstagram} className='text-link w-[40px]' />
            <FontAwesomeIcon icon={faXTwitter} className='text-link w-[40px]' />
            <FontAwesomeIcon icon={faYoutube} className='text-link w-[40px]' />
            <FontAwesomeIcon icon={faFacebook} className='text-link w-[40px]' />
            <FontAwesomeIcon icon={faPinterest} className='text-link w-[40px]' />
        </div>
    )
}

export default Socials