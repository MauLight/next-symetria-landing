import React, { ReactNode } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-scroll'

interface ServiceCardProps {
    service: {
        id: string
        service: string
        subHeader: string
        description: string
    },
    buttonText: string
    children: ReactNode
}

const containerVariants = {
    initial: {},
    hover: {}
}

const childVariants = {
    initial: { opacity: 0, scale: 0, borderRadius: '100%' },
    hover: { opacity: 1, scale: 2, borderRadius: '100%', transition: { duration: 0.5 } }
}

export default function ServiceCard({ service, buttonText, children }: ServiceCardProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial='initial'
            whileHover='hover'
            key={`id-${service.id}`} className="relative group overflow-hidden col-span-1 md:h-full h-[500px] border border-sym-border hover:border-indigo-500 transition-color duration-300 ease-out rounded-[25px]">
            <div className="w-full h-full flex flex-col items-center justify-between transition-all duration-300 px-10 py-20 gap-y-5">
                <div className='z-30'>
                    <h2 className="text-card-header">{service.service}</h2>
                    <h3 className="text-card-subheader">{service.subHeader}</h3>
                </div>

                <Link
                    to="scrollTarget"
                    smooth={true}
                    duration={1000}
                    className="z-30"
                >
                    <button className='h-10 rounded-[6px] border border-green-500 group-hover:border-sym-text-primary px-4 group-hover:text-sym-text-primary text-green-500 cursor-pointer capitalize'>{buttonText}</button>
                </Link>


                {
                    children
                }

            </div>
            <motion.div
                variants={childVariants}
                className={`absolute top-0 w-full h-full flex justify-center items-center bg-indigo-500 pb-5 z-20`}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='text-card-description'>{service.description}</motion.p>
            </motion.div>
        </motion.div>
    )
}
