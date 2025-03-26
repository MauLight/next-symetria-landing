'use client'

import { useState } from 'react'
import IpadCase from '../components/ipad-case'
import EmailClient from '../components/EmailClient'
import { animatedGradientText } from '../styles'

export default function DeveloperHub() {

    const [theme] = useState<'dark' | 'light'>('dark')

    return (
        <section className="relative w-full flex justify-center overflow-hidden">
            <div className="w-full max-w-[1440px] h-screen flex justify-center items-center">
                <IpadCase>
                    <EmailClient theme={theme} />
                </IpadCase>
            </div>
            <div className='absolute top-100 left-0 z-50 w-full h-full flex justify-center pt-[220px] bg-radial from-black from-40% to-transparent'>
                <div className='flex flex-col gap-y-2'>
                    <h1 className={`font-sym-title tracking-tight antialiased ${animatedGradientText} text-[4rem]`}>Performant Development</h1>
                    <p className='text-sym-text-secondary text-[1.3rem] text-balance w-full max-w-[900px]'>Our software solutions are fully tested and approved before going into production. We offer robust codebases developed by Ctlst to provide robust, efficient, and scalable software solutions.</p>
                </div>
            </div>
        </section>
    )
}
