'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

//* Components
import UiUx from './services/ui-ux'
import Wrapper from './common/wrapper'
import Software from './services/software'
import ModularSaas from './services/modular-saas'
import ServiceCard from './services/service-card'
import ContentWrapper from './common/content-wrapper'
import ServicesHeader from './services/services-header'

export default function ServicesList() {

    const text = useTranslations('Services')

    const services = [
        {
            id: 'a1',
            service: 'Modular Saas',
            subHeader: text('card1.subHeader'),
            description: text('card1.description')
        },
        {
            id: 'b2',
            service: 'Software Development',
            subHeader: text('card2.subHeader'),
            description: text('card2.description')
        },
        {
            id: 'c3',
            service: 'Ui/Ux Design',
            subHeader: text('card3.subHeader'),
            description: text('card3.description')
        },
    ]

    const [uiUxAnimate, setUiUxAnimate] = useState<string>('animate')

    useEffect(() => {
        if (uiUxAnimate === 'initial') {
            setTimeout(() => {
                setUiUxAnimate('animate')
            }, 1000)
        } else {
            setTimeout(() => {
                setUiUxAnimate('initial')
            }, 5000)
        }
    }, [uiUxAnimate])

    return (
        <Wrapper>
            <ContentWrapper className='min-h-screen gap-y-20'>
                <ServicesHeader header={text('first')} subHeader={text('second')} />
                <div className="w-full md:h-1/2 grid md:grid-cols-3 items-center max-md:gap-y-10 md:gap-x-10 md:mb-20">
                    {
                        services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                buttonText={text('third')}
                            >


                                {
                                    service.id === 'a1' && (
                                        <ModularSaas />
                                    )
                                }
                                {
                                    service.id === 'b2' && (
                                        <Software />
                                    )
                                }
                                {
                                    service.id === 'c3' && (
                                        <UiUx />
                                    )
                                }


                            </ServiceCard>

                        ))
                    }
                </div>
            </ContentWrapper>
        </Wrapper>
    )
}
