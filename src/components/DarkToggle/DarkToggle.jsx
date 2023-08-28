'use client'


import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useState } from 'react'

const DarkToggle = () => {

    const { mode, setMode, toggle } = useContext(ThemeContext)

    return (
        <div onClick={toggle} className='relative flex justify-between items-center border border-slate-500 rounded-full w-[52px] h-[24px] p-[2px] cursor-pointer select-none transition-all duration-500 ease-in-out' >
            <div className=''>🌙</div>
            <div className=''>🔆</div>
            <div className={`w-[20px] h-[20px] bg-theme-primary rounded-full absolute transition-all duration-200 ease-in-out ${mode === 'dark' ? 'left-[2px]' : 'right-[2px]'}`}>

            </div>
        </div>
    )
}

export default DarkToggle