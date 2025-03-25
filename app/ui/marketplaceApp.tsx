'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import IphoneCase from '../components/iphone-case'
import MobileMenu from '../components/mobile-menu'
import { animatedGradientText } from '../styles'

export default function MarketplaceApp() {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark')

    return (
        <div className='w-full h-screen flex justify-around gap-x-5'>
            <div className='flex items-center'>
                <div className='w-full h-[calc(735px/1.2)] flex flex-col gap-y-5 justify-start px-10'>
                    <h1 className={`font-sym-title tracking-tight antialiased ${animatedGradientText} text-[4rem]`}>Superior Design</h1>
                    <p className='text-sym-text-secondary text-[1.5rem] text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum sed, temporibus nam nesciunt quis! Praesentium optio nemo doloribus molestias, tempore quo, excepturi, hic eligendi animi quia quisquam velit recusandae?</p>
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

        </div>
    )
}
