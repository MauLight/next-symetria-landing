'use client'

import { motion } from "motion/react"
import { ReactTyped } from "react-typed"
import { animatedGradientText } from "../styles"
import { VideoDisplayHorizontal } from "../components/VideoDisplayHorizontal"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export default function Hero() {

    return (
        <main className="h-screen flex flex-col relative overflow-hidden">
            <div className="w-full h-full flex justify-center z-20">

                <section className="w-full max-w-[1440px] flex flex-col justify-center items-start gap-x-10">

                    <div className='w-full col-span-1 sm:col-span-2'>

                        <motion.div
                            className=""
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{ opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }}
                        >
                            <h1 className={`w-full font-sym-title ${animatedGradientText} text-[22rem] leading-none tracking-tighter`}>
                                Ctlst<small className="text-[10rem]">.</small>
                            </h1>
                        </motion.div>


                        <div className='flex flex-col gap-y-10 z-20'>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className='sm:min-h-[80px] max-sm:flex max-sm:justify-center pl-8'>
                                <ReactTyped className={`text-[2.5rem] text-balance tracking-normal max-sm:text-center leading-5 sm:leading-8 text-sym-text-primary`} startDelay={800} strings={['If you can imagine it, you can make it real.']} typeSpeed={10} />
                            </motion.div>

                            <div className="w-full flex justify-start pl-5">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 2.8 }}
                                    className="flex items-center gap-x-2 sm:pr-12 w-[528px]">

                                    <p className='text-[1.2rem] italic px-2 text-balance font-light leading-tight text-sym-text-secondary'>{'Define your online presence with superb design and software that delivers real results.'}</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='absolute bottom-0 w-full z-50 py-5 flex justify-center items-start'>
                <ChevronDownIcon className="w-8 h-8 text-sym-text-primary animate-pulse" />
            </div>

            <div className='absolute top-0 left-0 w-full h-[400px] sm:h-full z-10 bg-gradient-to-t from-black  to-transparent to-30% opacity-90'></div>
            <div className='absolute top-0 left-0 w-full h-[400px] sm:h-full z-10 bg-radial from-transparent  to-black opacity-20'></div>
            <div className='absolute top-0 left-0 w-full h-[400px] sm:h-full z-10 bg-radial from-transparent  to-black'></div>
            <div className='absolute top-0 left-0 w-full h-[400px] sm:h-full z-10 bg-radial from-transparent  to-black'></div>
            <div className="z-0 absolute top-0 right-0 opacity-60">
                <VideoDisplayHorizontal />
            </div>
        </main>
    )
}