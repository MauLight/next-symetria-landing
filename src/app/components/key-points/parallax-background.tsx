import { type ReactNode } from 'react'
import ParallaxWrapper from './parallax-wrapper'

export default function ParallaxBackground(): ReactNode {
    return (
        <div className="absolute top-0 left 0">
            <ParallaxWrapper direction="right" />
            <ParallaxWrapper direction="left" />
            <ParallaxWrapper direction="right" />
            <ParallaxWrapper direction="left" />
            <ParallaxWrapper direction="right" />
            <ParallaxWrapper direction="left" />
            <ParallaxWrapper direction="right" />
            <ParallaxWrapper direction="left" />
            <ParallaxWrapper direction="right" />
            <ParallaxWrapper direction="left" />
            <ParallaxWrapper direction="right" />
            <ParallaxWrapper direction="left" />
            <ParallaxWrapper direction="right" />
            <ParallaxWrapper direction="left" />
        </div>
    )
}
