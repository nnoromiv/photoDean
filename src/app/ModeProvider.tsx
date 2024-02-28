'use client'

import React, { useEffect, useState } from 'react'
import { ModeProviderProps } from '../../types'
import { ThemeProvider } from 'next-themes'

const ModeProvider:React.FC<ModeProviderProps> = ({ children }) => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    },[])

    if(!mounted) return <>{children}</>
  return (
    <ThemeProvider enableSystem attribute='class'>
        {
            children
        }
    </ThemeProvider>
  )
}

export default ModeProvider