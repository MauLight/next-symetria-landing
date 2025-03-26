'use client'

import { useEffect, useState } from 'react'
import IpadCase from '../components/ipad-case'
import EmailClient from '../components/EmailClient'
import { animatedGradientText } from '../styles'
import { AnimatePresence, motion } from 'motion/react'

export default function DeveloperHub() {

    const [theme] = useState<'dark' | 'light'>('dark')
    const [sliderStep, setSliderStep] = useState<number>(1)

    useEffect(() => {
        console.log(sliderStep, 'The Step')
    }, [sliderStep])

    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="w-full max-w-[1440px] h-screen flex justify-center items-center">
                <IpadCase>
                    <AnimatePresence>
                        {
                            sliderStep === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <EmailClient setSliderStep={setSliderStep} theme={theme} />
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </IpadCase>
            </div>
            <div className='absolute top-100 left-0 z-50 w-full h-full flex justify-center pt-[280px] bg-radial from-black from-30% to-transparent to-90%'>
                <div className='flex flex-col items-center gap-y-2'>
                    <h1 className={`font-sym-title tracking-tight antialiased ${animatedGradientText} text-[4rem]`}>Performant Development</h1>
                    <p className='text-sym-text-secondary text-[1.3rem] text-balance w-full max-w-[900px]'>Our software solutions are fully tested and approved before going into production. We offer robust codebases developed by Ctlst to provide robust, efficient, and scalable software solutions.</p>
                </div>
            </div>
        </section>
    )
}
