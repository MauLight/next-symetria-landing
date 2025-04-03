'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import IphoneCase from '../components/iphone-case'
import MobileMenu from '../components/mobile-menu'
import { animatedGradient, animatedGradientText } from '../styles'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import Wrapper from '../components/common/wrapper'
import ContentWrapper from '../components/common/content-wrapper'

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

export default function MarketplaceApp() {

    const text = useTranslations('Design')

    const [theme, setTheme] = useState<'dark' | 'light'>('dark')

    const bulletPoints = [
        {
            id: 1,
            text: text('bullet1')
        },
        {
            id: 2,
            text: text('bullet2')
        },
        {
            id: 3,
            text: text('bullet3')
        },
    ]

    return (
        <Wrapper>
            <ContentWrapper>

                {/* Web version */}
                <motion.div
                    variants={parentVariant}
                    initial='hidden'
                    animate='visible'
                    className='w-full h-screen hidden md:flex justify-around gap-x-5 max-md:px-5'>

                    <section className='w-full flex items-center'>
                        <div className='w-full h-[calc(735px/1.2)] flex flex-col gap-y-20 justify-start px-10'>
                            <div className='flex flex-col gap-y-5'>
                                <h1 className='text-title'>{text('first')}</h1>
                                <p className='text-body'>{text('second')}</p>
                            </div>

                            <motion.ul
                                className='flex flex-col gap-y-5'>
                                {
                                    bulletPoints.map((point) => (
                                        <motion.li
                                            key={point.id}
                                            variants={childVariants}
                                            initial='hidden'
                                            animate='visible'
                                            className='flex gap-x-4 items-center'>
                                            <div className={`w-2 h-2 ${animatedGradient} rounded-full`}>
                                                <div className='w-full h-full scale-[92%] rounded-full bg-black' />
                                            </div>
                                            <p className='text-body'>
                                                {point.text}
                                            </p>
                                        </motion.li>
                                    ))
                                }
                            </motion.ul>
                        </div>
                    </section>


                    <section className='w-full flex justify-center gap-x-5'>

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

                    </section>

                </motion.div>

                <motion.div
                    variants={parentVariant}
                    initial='hidden'
                    animate='visible'
                    className='w-full md:hidden flex flex-col pb-20'>


                    <div className='w-full flex max-sm:flex-col justify-center gap-x-5 max-sm:pb-10'>

                        <IphoneCase theme={theme} size="sm">
                            <div className="w-full h-full">
                                <MobileMenu theme={theme} />
                            </div>
                        </IphoneCase>

                        <div className="flex sm:flex-col justify-center max-sm:gap-x-5 gap-y-5">
                            <button onClick={() => { setTheme('dark') }}>
                                <MoonIcon className='w-6 h-6 text-sym-text-secondary hover:text-indigo-500 transition-color duration-300' />
                            </button>
                            <button onClick={() => { setTheme('light') }}>
                                <SunIcon className='w-6 h-6 text-sym-text-secondary hover:text-indigo-500 transition-color duration-300' />
                            </button>
                        </div>

                    </div>

                    <div className='w-full flex items-center'>
                        <div className='w-full flex flex-col gap-y-10 justify-start px-10'>
                            <div className='flex flex-col items-center gap-y-2'>
                                <h1 className={`font-sym-title tracking-tight antialiased ${animatedGradientText} max-sm:text-center text-[2rem] sm:text-[3rem] lg:text-[4rem] capitalize`}>{text('first')}</h1>
                                <p className='text-sym-text-secondary max-md:text-center text-[1rem] sm:text-[1.3rem] text-balance max-sm:pt-5'>{text('second')}</p>
                            </div>

                            <motion.ul
                                className='text-sym-text-secondary text-[1.2rem] sm:text-[1.5rem] text-balance flex flex-col gap-y-5'>
                                {
                                    bulletPoints.map((point) => (
                                        <motion.li
                                            key={point.id}
                                            variants={childVariants}
                                            initial='hidden'
                                            animate='visible'
                                            className='flex gap-x-4 items-center'>
                                            <div className={`w-2 h-2 ${animatedGradient} rounded-full`}>
                                                <div className='w-full h-full scale-[92%] rounded-full bg-black' />
                                            </div>
                                            {point.text}
                                        </motion.li>
                                    ))
                                }
                            </motion.ul>
                        </div>
                    </div>

                </motion.div>
            </ContentWrapper>
        </Wrapper>
    )
}
