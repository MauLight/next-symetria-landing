'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import IphoneCase from '../components/iphone-case'
import MobileMenu from '../components/mobile-menu'

export default function MarketplaceApp() {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark')

    return (
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
    )
}
