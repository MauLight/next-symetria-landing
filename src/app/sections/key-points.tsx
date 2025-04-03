import React from 'react'
import { useTranslations } from 'next-intl'

//* Components
import Wrapper from '../components/common/wrapper'
import Vignette from '../components/common/vignette'
import KeyCard from '../components/key-points/key-card'
import ContentWrapper from '../components/common/content-wrapper'
import ParallaxBackground from '../components/key-points/parallax-background'
import { CurrencyDollarIcon, RocketLaunchIcon, EyeIcon } from '@heroicons/react/24/outline'

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
        <Wrapper>
            <ContentWrapper>
                <div className="w-full md:h-[600px] grid md:grid-cols-3 max-md:gap-y-10 md:gap-x-10 max-md:px-5">
                    {
                        cardsText.map((item) => (
                            <KeyCard key={item.id} item={item} buttonText={text('button')} />
                        ))
                    }
                </div>

                <div className="absolute w-full h-full glass -z-10"></div>
                <Vignette />

                <ParallaxBackground />
            </ContentWrapper>
        </Wrapper>
    )
}
