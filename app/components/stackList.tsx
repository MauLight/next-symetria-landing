'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3
        }
    }
}

const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const stack = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742984404/km6xpwc9rp5mn7z4ipwv.png'
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742984318/poahde116lmvaszvcrnw.png'
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742984455/higckhyglb2uwqim2p8e.png'
    },
]

export default function StackList() {
    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className="w-full flex flex-col items-center gap-y-5">
            <h1 className="text-[2rem] text-sym-text-primary">Our Stack</h1>
            <div className="w-full max-w-[700px] flex items-center justify-around">
                {
                    stack.map((item) => (
                        <motion.div
                            variants={childVariants}
                            key={item.id}>
                            <Image className='w-[50px] sm:w-[70px] md:w-[100px]' src={item.img} width={100} height={100} alt="logo" />
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}
