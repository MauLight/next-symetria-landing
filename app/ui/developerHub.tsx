'use client'

import { useState } from 'react'
import IpadCase from '../components/ipad-case'
import EmailClient from '../components/EmailClient'
import { animatedGradientText } from '../styles'
import { AnimatePresence, motion } from 'motion/react'
import Multistep from '../components/Multistep'

export default function DeveloperHub() {

    const [theme] = useState<'dark' | 'light'>('dark')
    const [sliderStep, setSliderStep] = useState<number>(1)

    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="w-full max-w-[1440px] h-screen flex justify-center items-center">
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
            <div className='absolute top-100 left-0 z-50 w-full h-full flex justify-center pt-[300px] bg-radial from-black from-30% to-transparent to-70%'>
                <div className='flex flex-col items-center gap-y-2'>
                    <h1 className={`font-sym-title tracking-tight antialiased ${animatedGradientText} text-[4rem]`}>Performant Development</h1>
                    <p className='text-sym-text-secondary text-[1.3rem] text-balance w-full max-w-[900px]'>Our software solutions are fully tested and approved before going into production. We offer robust codebases developed by Ctlst to provide robust, efficient, and scalable software solutions.</p>
                    <p className='text-sym-text-secondary text-[1.3rem] text-balance w-full max-w-[900px]'>WordPress was great… in 2005. The future of the web is React & Next.js—trusted by the world’s top brands for speed, flexibility, and performance.</p>
                </div>
            </div>
        </section>
    )
}
