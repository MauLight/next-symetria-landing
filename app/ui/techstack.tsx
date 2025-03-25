

import React from 'react'
import ParallaxText from '../components/parallaxText'

export default function Techstack({ direction }: { direction: 'left' | 'right' }) {
    return (
        <div className=''>
            <div
                className='w-full h-full flex justify-center items-center'>
                <ParallaxText initialDirection={direction} baseVelocity={-10}>
                    symetria
                </ParallaxText>
            </div>
        </div>
    )
}
