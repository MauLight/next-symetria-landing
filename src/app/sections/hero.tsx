'use client'

import { motion } from "motion/react"
import { ReactTyped } from "react-typed"
import { useTranslations } from 'next-intl'

//* Components
import Vignette from "../components/common/vignette"
import Wrapper from "../components/common/wrapper"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import ContentWrapper from "../components/common/content-wrapper"
import { VideoDisplayHorizontal } from "../components/VideoDisplayHorizontal"

export default function Hero() {

    const text = useTranslations('Hero')

    return (
        <Wrapper>
            <ContentWrapper>

                {/* Main text */}
                <div className='w-full col-span-1 sm:col-span-2'>

                    <motion.div
                        className=""
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } }}
                    >
                        <h1 className='text-hero animated-background'>
                            {text('title')}<small className="text-[5rem] sm:text-[10rem]">.</small>
                        </h1>
                    </motion.div>


                    <div className='flex flex-col gap-y-10 z-20'>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className='sm:min-h-[80px] max-sm:flex max-sm:justify-center pl-8'>
                            <ReactTyped className='text-subheader' startDelay={800} strings={[text('subtitle')]} typeSpeed={10} />
                        </motion.div>

                        <div className="w-full flex justify-start pl-5">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 2.8 }}
                                className="flex items-center gap-x-2 sm:pr-12 w-[528px]">

                                <p className='text-[1rem] max-sm:text-center sm:text-[1.2rem] italic px-2 text-balance font-light leading-tight text-sym-text-secondary'>{text('third')}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </ContentWrapper>


            <div className='absolute bottom-0 left-0 w-screen z-50 py-5 flex justify-center items-start'>
                <ChevronDownIcon className="w-8 h-8 text-sym-text-primary animate-pulse" />
            </div>

            {/* Background */}
            <Vignette />
            <div className="z-0 absolute top-0 right-0 opacity-60">
                <VideoDisplayHorizontal />
            </div>
        </Wrapper>
    )
}