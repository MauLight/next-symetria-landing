'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3
        }
    }
}

const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const brands = [
    {
        id: 1,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742957668/l3tp6m7vizuiplojjhc3.png'
    },
    {
        id: 2,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742982614/lfxi2atazrv0dw837fcq.png'
    },
    {
        id: 7,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742982742/qzyptfx2kxydali8am0j.png'
    },
    {
        id: 3,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742957809/dkgzae97t8627c3wlxyw.png'
    },
    {
        id: 4,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742981604/fsdhgmlp4j2v34wud68x.png'
    },
    {
        id: 5,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742981731/zth22an2f5ar8j79nlyr.png'
    },
    {
        id: 6,
        img: 'https://res.cloudinary.com/maulight/image/upload/v1742981837/gc8ek9k5zw8al0ti0l1s.png'
    },
]

export default function BrandsList() {
    const [startAnimation, setStartAnimation] = useState<boolean>(false)

    useEffect(() => {

        setTimeout(() => {
            setStartAnimation(true)
        }, 1200)

    }, [])

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView={startAnimation ? 'visible' : 'hidden'}
            viewport={{ once: true, amount: 0.8 }}
            className="w-full flex flex-col items-center gap-y-5">
            <h1 className="text-[2rem] text-sym-text-primary">Trusted by</h1>
            <div className="w-full max-w-[1440px] flex items-center justify-between max-md:px-5">
                {
                    brands.map((item) => (
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
