import React from 'react'
import ScrollButton from '../components/ScrollButton'
import Techstack from './techstack'
import { CurrencyDollarIcon, RocketLaunchIcon, EyeIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

export default function KeyPoints() {

    const text = useTranslations('keyPoints')

    const cardsText = [
        {
            id: 4,
            title: text("point1.title"),
            desc: text("point1.description"),
            icon: <CurrencyDollarIcon className="w-10 h-10 text-green-500" />
        },
        {
            id: 1,
            title: text("point2.title"),
            desc: text("point2.description"),
            icon: <RocketLaunchIcon className="w-10 h-10 text-green-500" />
        },
        {
            id: 2,
            title: text("point3.title"),
            desc: text("point3.description"),
            icon: <EyeIcon className="w-10 h-10 text-green-500" />
        },
    ]

    return (
        <div className="relative w-full max-md:h-full h-screen max-md:py-20 flex justify-center items-center z-20 bg-transparent overflow-hidden">
            <div className="w-full max-w-[1440px] md:h-[600px] grid md:grid-cols-3 max-md:gap-y-10 md:gap-x-10 max-md:px-5">
                {
                    cardsText.map((item) => (
                        <div key={item.id} className="col-span-1 w-full max-md:h-[350px] md:h-full flex flex-col justify-between py-12 px-2 sm:px-10 bg-black rounded-[25px] border border-sym-border z-20">
                            <div className="flex flex-col gap-y-5">
                                <div className="flex max-sm:justify-center items-center gap-x-2 sm:gap-x-5">
                                    {
                                        item.icon
                                    }
                                    <h1 className="text-sym-text-primary tracking-tight font-sym-title text-[2rem] sm:text-[2.5rem] md:max-xl:text-[2rem] xl:text-[3.2rem]">{item.title}</h1>
                                </div>
                                <p className="text-sym-text-secondary max-sm:text-center text-[1rem] md:max-xl:text-[1.2rem] xl:text-[1.4rem] text-balance">{item.desc}</p>
                            </div>
                            <div className="flex justify-center">
                                <ScrollButton text={text('button')} />
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="absolute w-full h-full glass -z-10"></div>

            <div className='absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-black  to-transparent to-20% opacity-90'></div>
            <div className='absolute top-0 left-0 w-full h-full z-0 bg-radial from-transparent  to-black opacity-20'></div>
            <div className='absolute top-0 left-0 w-full h-full z-0 bg-radial from-transparent  to-black'></div>

            <div className="absolute top-0 left 0">
                <Techstack direction="right" />
                <Techstack direction="left" />
                <Techstack direction="right" />
                <Techstack direction="left" />
                <Techstack direction="right" />
                <Techstack direction="left" />
                <Techstack direction="right" />
                <Techstack direction="left" />
                <Techstack direction="right" />
                <Techstack direction="left" />
                <Techstack direction="right" />
                <Techstack direction="left" />
                <Techstack direction="right" />
                <Techstack direction="left" />
            </div>
        </div>
    )
}
