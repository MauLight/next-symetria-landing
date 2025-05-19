'use client'

import Link from 'next/link'
import { useScroll, motion, AnimatePresence } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import useClickOutside from '../hooks/useClickOutside'
import { usePathname } from 'next/navigation'

export default function Topbar() {

    const pathname = usePathname()
    const { scrollY } = useScroll()
    const [yPos, setYPos] = useState<number>(0)
    const [hoverProducts, setHoverProducts] = useState<boolean>(false)
    const dropRef = useRef(null)

    //@ts-expect-error nullable initialization
    useClickOutside(dropRef, () => { setHoverProducts(false) })

    useEffect(() => {
        const unsubscribe = scrollY.on('change', (value) => {
            setYPos(value)
        })

        return () => unsubscribe()
    }, [scrollY])

    useEffect(() => {
        console.log(pathname)
    }, [pathname])

    return (
        <>
            {
                yPos > 480 ? (
                    <motion.div
                        key={1}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: yPos > 485 ? 1 : 0 }}
                        transition={{
                            duration: 0.2
                        }}
                        className='fixed top-0 left-0 z-60 w-screen h-[60px] bg-black
            '>
                        <motion.div
                            key={2}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: yPos > 485 ? 1 : 0 }}
                            transition={{
                                duration: 0.4,
                            }}
                            className="absolute bottom-0 left-0 border-b border-sym-border w-full" />
                        <div className="h-full w-full max-w-[1440px] mx-auto flex items-center justify-between px-10">

                            {
                                yPos > 480 && (
                                    <AnimatePresence>
                                        <motion.div
                                            key={3}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: yPos > 485 ? 1 : 0, y: yPos > 485 ? 0 : 10 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.4
                                            }}
                                        >
                                            <Link href={'/'} className='text-logo animated-background'>
                                                Ctlst
                                            </Link>
                                        </motion.div>
                                        <div className="relative flex gap-x-10 items-center">
                                            <button
                                                onMouseEnter={() => { setHoverProducts(true) }}
                                                onClick={() => { setHoverProducts(!hoverProducts) }}
                                                className={`group flex items-center gap-x-2 ${hoverProducts ? 'text-sym-text-primary' : 'text-sym-text-secondary hover:text-sym-text-primary'}`}>Products
                                                <ChevronDownIcon className={`w-4 h-4 pt-[3px] group-hover:rotate-180 transition-all duration-200 ${hoverProducts ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                                            </button>
                                            <button className='text-sym-text-secondary hover:text-sym-text-primary px-4 py-1 border border-sym-border hover:border-sym-text-secondary rounded-[6px]'>Contact</button>
                                            {
                                                hoverProducts && (
                                                    <AnimatePresence>
                                                        <motion.div
                                                            ref={dropRef}
                                                            key={'product-menu'}
                                                            initial={{ y: -10 }}
                                                            animate={{ y: 6 }}
                                                            exit={{ y: -10 }}
                                                            className='w-[200px] h-[250px] absolute top-9 -left-16 flex flex-col gap-y-3 p-5 bg-black border-sym-border border rounded-[6px]'>
                                                            <Link onClick={() => { setHoverProducts(false) }} href={'/ecommerce'}>
                                                                <p className='text-white'>E-Commerce</p>
                                                            </Link>
                                                            <p className='text-white'>E-Learning</p>
                                                        </motion.div>
                                                    </AnimatePresence>
                                                )
                                            }
                                        </div>
                                    </AnimatePresence>
                                )
                            }

                        </div>
                    </motion.div>
                )
                    :
                    (
                        <motion.div
                            key={'short-menu'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.2
                            }}
                            className='fixed top-0 left-0 z-60 w-screen h-[60px]
            '>

                            <div className="h-full w-full max-w-[1440px] mx-auto">
                                <div className='relative h-full flex items-center justify-end px-10 gap-x-10'>
                                    <button
                                        onMouseEnter={() => { setHoverProducts(true) }}
                                        onClick={() => { setHoverProducts(!hoverProducts) }}
                                        className={`group flex items-center gap-x-2 ${hoverProducts ? 'text-sym-text-primary' : 'text-sym-text-secondary hover:text-sym-text-primary'}`}>Products
                                        <ChevronDownIcon className={`w-4 h-4 pt-[3px] group-hover:rotate-180 transition-all duration-200 ${hoverProducts ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                                    </button>
                                    <button className='text-sym-text-secondary hover:text-sym-text-primary px-4 py-1 border border-sym-border hover:border-sym-text-secondary rounded-[6px]'>Contact</button>
                                    {
                                        hoverProducts && (
                                            <AnimatePresence>
                                                <motion.div
                                                    ref={dropRef}
                                                    key={'product-menu'}
                                                    initial={{ y: -10 }}
                                                    animate={{ y: 12 }}
                                                    exit={{ y: -10 }}
                                                    className='w-[200px] h-[250px] absolute top-9 right-30 flex flex-col gap-y-3 p-5 bg-black border-sym-border border rounded-[6px]'>
                                                    <Link href={'/ecommerce'}>
                                                        <p className='text-white'>E-Commerce</p>
                                                    </Link>
                                                    <p className='text-white'>E-Learning</p>
                                                </motion.div>
                                            </AnimatePresence>
                                        )
                                    }
                                </div>
                            </div>
                        </motion.div>
                    )
            }
        </>
    )
}
