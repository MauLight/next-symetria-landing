

import React from 'react'
import ParallaxText from '../parallaxText'

export default function ParallaxWrapper({ direction }: { direction: 'left' | 'right' }) {
    return (
        <div className=''>
            <div
                className='w-full h-full flex justify-center items-center'>
                <ParallaxText initialDirection={direction} baseVelocity={-10}>
                    ctlst ctlst
                </ParallaxText>
            </div>
        </div>
    )
}
