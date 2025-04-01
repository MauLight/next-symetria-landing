'use client'

import { useMotionValue, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame, motion, wrap } from "motion/react"
import { useRef } from "react"
import { animatedGradientText } from "../styles"

interface ParallaxProps {
    children: string
    baseVelocity: number
    initialDirection: 'left' | 'right'
}

export default function ParallaxText({ children, baseVelocity = 100, initialDirection = 'right' }: ParallaxProps) {
    const baseX = useMotionValue(0)
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    })

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-2, -22, v)}%`)

    const directionFactor = useRef<number>(1)
    useAnimationFrame((_, delta) => {
        let moveByRight = directionFactor.current * baseVelocity * (delta / 1000)
        let moveByLeft = directionFactor.current * baseVelocity / (delta * 10)

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1
        }

        if (initialDirection === 'right') {
            moveByLeft += directionFactor.current * moveByLeft * velocityFactor.get()
            baseX.set(baseX.get() + moveByLeft)
        } else {
            moveByRight += directionFactor.current * moveByRight * velocityFactor.get()
            baseX.set(baseX.get() + moveByRight)
        }
    })

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax -z-20">
            <motion.div className={`scroller font-sym-title ${initialDirection === 'left' ? 'italic' : 'font-extralight'} ${animatedGradientText}`} style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    )
}