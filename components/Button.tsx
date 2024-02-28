import React from 'react'
import { ButtonProps } from '../types'

const Button:React.FC<ButtonProps> = ({title, style}) => {
  return (
    <button className={`btn btn-wide  max-pn:btn-md lg:btn-lg rounded-none bg-black text-white ${style}`}>{title}</button>
  )
}

export default Button