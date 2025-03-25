'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import IphoneCase from '../components/iphone-case'
import MobileMenu from '../components/mobile-menu'
import { animatedGradient, animatedGradientText } from '../styles'
import { motion } from 'motion/react'

const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.8
        }
    }
}

const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const bulletPoints = [
    {
        id: 1,
        text: 'Boost user retention and engagement.'
    },
    {
        id: 2,
        text: 'Improve productivity and user satisfaction.'
    },
    {
        id: 3,
        text: 'Less guidance leading to less support overhead.'
    },
]

export default function MarketplaceApp() {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark')

    return (
        <motion.div
            variants={parentVariant}
            initial='hidden'
            animate='visible'
            className='w-full h-screen flex justify-around gap-x-5'>
            <div className='w-full flex items-center'>
                <div className='w-full h-[calc(735px/1.2)] flex flex-col gap-y-10 justify-start px-10'>
                    <div className='flex flex-col gap-y-2'>
                        <h1 className={`font-sym-title tracking-tight antialiased ${animatedGradientText} text-[4rem]`}>Superior Design</h1>
                        <p className='text-sym-text-secondary text-[1.3rem] text-balance'>With beautiful design, clear layouts, logical workflows, and responsive interactions, we make tasks easier and faster to complete.</p>
                    </div>

                    <motion.ul
                        className='text-sym-text-secondary text-[1.5rem] text-balance flex flex-col gap-y-5'>
                        {
                            bulletPoints.map((point) => (
                                <motion.li
                                    key={point.id}
                                    variants={childVariants}
                                    initial='hidden'
                                    animate='visible'
                                    className='flex gap-x-4 items-center'><div className={`w-2 h-2 ${animatedGradient} rounded-full`}>
                                        <div className='w-full h-full scale-[92%] rounded-full bg-black'></div>
                                    </div>{point.text}</motion.li>
                            ))
                        }
                    </motion.ul>
                </div>
            </div>
            <div className='w-full flex justify-center gap-x-5'>

                <IphoneCase theme={theme} size="sm">
                    <div className="w-full h-full">
                        <MobileMenu theme={theme} />
                    </div>
                </IphoneCase>

                <div className="flex flex-col justify-center gap-y-5">
                    <button onClick={() => { setTheme('dark') }}>
                        <MoonIcon className='w-6 h-6 text-sym-text-secondary hover:text-indigo-500 transition-color duration-300' />
                    </button>
                    <button onClick={() => { setTheme('light') }}>
                        <SunIcon className='w-6 h-6 text-sym-text-secondary hover:text-indigo-500 transition-color duration-300' />
                    </button>
                </div>
            </div>

        </motion.div>
    )
}
