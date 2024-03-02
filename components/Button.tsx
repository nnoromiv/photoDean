import React from 'react'
import { ButtonProps } from '../types'
import Link from 'next/link'

const Button:React.FC<ButtonProps> = ({title, style, link, target}) => {
  return (
    <Link href={link === undefined ? '/' : link} target={target}>
          <button className={`btn btn-wide  max-pn:btn-md lg:btn-lg rounded-none bg-black text-white ${style} dark:text-black dark:bg-white`}>{title}</button>
    </Link>
  )
}

export default Button