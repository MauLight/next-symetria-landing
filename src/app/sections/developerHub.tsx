'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion } from 'motion/react'

//* Components
import IpadCase from '../components/ipad-case'
import Multistep from '../components/Multistep'
import Wrapper from '../components/common/wrapper'
import EmailClient from '../components/EmailClient'
import ContentWrapper from '../components/common/content-wrapper'

export default function DeveloperHub() {

    const text = useTranslations('Developer')

    const [theme] = useState<'dark' | 'light'>('dark')
    const [sliderStep, setSliderStep] = useState<number>(1)

    return (
        <Wrapper>
            <ContentWrapper className='h-[1000px]'>
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
            </ContentWrapper>

            {/* Text */}
            <div className='absolute top-100 left-0 z-50 w-full h-full flex justify-center pt-[280px] bg-radial from-black from-30% to-transparent to-70%'>
                <div className='max-md:w-full flex flex-col items-center gap-y-10 md:gap-y-2'>
                    <h1 className='text-title max-sm:text-center'>{text('first')}</h1>
                    <div className="w-full max-w-[650px] flex flex-col items-center gap-y-2">
                        <p className='text-body text-center'>{text('second')}</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
