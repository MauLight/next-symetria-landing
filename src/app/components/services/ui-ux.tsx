import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import ServiceVignette from './service-vignette'

const uiVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3
        }
    }
}

const childUiVariants = {
    initial: { scaleX: 0 },
    animate: { scaleX: 1, transition: { duration: 0.5 } }
}

export default function UiUx() {

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
        <>
            <ServiceVignette />
            <motion.div
                variants={uiVariants}
                initial='initial'
                animate={uiUxAnimate}
                className='absolute top-0 left-0 w-full h-full flex flex-col'>
                <motion.div
                    variants={childUiVariants}
                    className='w-[100px] h-[50px] border border-indigo-500'></motion.div>
                <motion.div
                    variants={childUiVariants}
                    className='w-[200px] h-[50px] border border-indigo-500'></motion.div>
                <motion.div
                    variants={childUiVariants}
                    className='w-full h-[100px] border border-indigo-500'></motion.div>
                <div className="flex">
                    <div className='w-full h-[50px] border border-black'></div>
                    <motion.div
                        variants={childUiVariants}
                        className='w-[200px] h-[50px] border border-indigo-500'></motion.div>
                </div>
                <motion.div
                    variants={childUiVariants}
                    className='w-full h-[50px] border border-indigo-500'></motion.div>
                <motion.div
                    variants={childUiVariants}
                    className='w-[100px] h-[100px] border border-indigo-500'></motion.div>
                <motion.div
                    variants={childUiVariants}
                    className='w-[200px] h-[50px] border border-indigo-500'></motion.div>
                <motion.div
                    variants={childUiVariants}
                    className='w-full h-[50px] border border-indigo-500'></motion.div>
                <div className="flex">
                    <div className='w-full h-[50px] border border-black'></div>
                    <motion.div
                        variants={childUiVariants}
                        className='w-[200px] h-[50px] border border-indigo-500'></motion.div>
                </div>
                <motion.div
                    variants={childUiVariants}
                    className='w-full h-[50px] border border-indigo-500'></motion.div>
            </motion.div>
        </>
    )
}
