'use client'

import { useState } from 'react'
import IpadCase from '../components/ipad-case'
import EmailClient from '../components/EmailClient'
import { animatedGradientText } from '../styles'
import { AnimatePresence, motion } from 'motion/react'
import Multistep from '../components/Multistep'

const text = {
    first: 'Performant Development',
    second: 'Our software solutions are fully tested and approved before going into production. We offer robust codebases developed by Ctlst to provide robust, efficient, and scalable software solutions.',
    third: 'WordPress was great… in 2005. The future of the web is React & Next.js—trusted by the world’s top brands for speed, flexibility, and performance.'
}

export default function DeveloperHub() {

    const [theme] = useState<'dark' | 'light'>('dark')
    const [sliderStep, setSliderStep] = useState<number>(1)

    return (
        <section className="relative w-full flex justify-center overflow-hidden  max-md:px-5">
            <div className="w-full max-w-[1440px] h-[1000px] py-20 flex justify-center items-start">
                <IpadCase>
                    <AnimatePresence>
                        {
                            sliderStep === 1 && (
                                <motion.div
                                    key={1}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <EmailClient setSliderStep={setSliderStep} theme={theme} />
                                </motion.div>
                            )
                        }
                        {
                            sliderStep === 2 && (
                                <motion.div
                                    key={2}
                                    className='h-full'
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Multistep setSliderStep={setSliderStep} />
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </IpadCase>
            </div>
            <div className='absolute top-100 left-0 z-50 w-full h-full flex justify-center pt-[280px] bg-radial from-black from-30% to-transparent mdto-70%'>
                <div className='max-md:w-full flex flex-col items-center gap-y-10 md:gap-y-2'>
                    <h1 className={`font-sym-title tracking-tight antialiased ${animatedGradientText} max-sm:text-center text-[2rem] sm:text-[3rem] lg:text-[4rem]`}>{text.first}</h1>
                    <p className='text-sym-text-secondary text-[1rem] sm:text-[1.3rem] text-center text-balance w-full max-w-[900px] pt-5'>{text.second}</p>
                    <p className='text-sym-text-secondary text-[1rem] sm:text-[1.3rem] text-center text-balance w-full max-w-[900px]'>{text.third}</p>
                </div>
            </div>
        </section>
    )
}
