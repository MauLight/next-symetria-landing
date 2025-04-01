'use client'

import { Divide as Hamburger } from 'hamburger-react'
import { Modal } from './Modal'
import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon, UserIcon, PowerIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import CartHub from './cart-hub'
import { ReactTyped } from "react-typed"
import { motion } from 'motion/react'
import Image from 'next/image'
import { Spinner } from './spinner'

interface ListItem {
    title: string
    id: string
    image: string
    price: string
}

const updatedList: ListItem[] = [
    {
        id: 'a1',
        title: 'Nothing® Ear earbuds',
        image: 'https://res.cloudinary.com/maulight/image/upload/v1742833120/no1l3qjx9kwngfar2sgu.png',
        price: '180'
    },
    {
        id: 'b2',
        title: 'Nothing® Ear(a) earbuds',
        image: 'https://res.cloudinary.com/maulight/image/upload/v1742833432/hmbwaxhk8pzyo19b1lsf.jpg',
        price: '120'
    },
    {
        id: 'c3',
        title: 'Mod® True Wireless Earbuds',
        image: 'https://res.cloudinary.com/maulight/image/upload/v1740072885/marketplace/arobgtzkgfquomgiyp2z.jpg',
        price: '80'
    },
    {
        id: 'd4',
        title: 'Airdopes 141 ANC',
        image: 'https://res.cloudinary.com/maulight/image/upload/v1740072236/marketplace/nu3mic1vo52hzepluotc.jpg',
        price: '80'
    },
]

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

export default function MobileMenu({ theme }: { theme: string }) {

    //* Controls hamburger state
    const [isOpen, setOpen] = useState(false)
    //* Controls spinner state
    const [searching, setSearching] = useState(false)
    //* Controls dropdown list state
    const [openList, setOpenList] = useState(false)
    //* Controls cycling through list values by index (starts at 4 which is outside the index)
    const [highlightedItem, setHighlightedItem] = useState<number>(4)

    //* Control rendering of second screen, individual product.
    const [clickItem, setClickItem] = useState<boolean>(false)
    const [individualProductScreen, setIndividualProductScreen] = useState<boolean>(false)

    function handleAfterType() {
        setTimeout(() => {
            setSearching(true)
        }, 500)
        setTimeout(() => {
            setSearching(false)
            setOpenList(true)
            setTimeout(() => {
                setHighlightedItem(0)
                setTimeout(() => {
                    setHighlightedItem(1)
                    setTimeout(() => {
                        setClickItem(true)
                    }, 1000)
                }, 2000)
            }, 1000)
        }, 1500)
    }

    function handleResetAnimation() {
        setOpenList(false)
        setHighlightedItem(3)
    }

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 2000)
    }, [setOpen])

    //* Total time of first run is 6200

    useEffect(() => {

        if (clickItem) {
            setOpen(false)
            setIndividualProductScreen(true)
            setTimeout(() => {
                setIndividualProductScreen(false)
                setHighlightedItem(4)
                setOpenList(false)
                setClickItem(false)
                setTimeout(() => {
                    setOpen(true)
                }, 2000)
            }, 3000)
        }

    }, [clickItem])

    return (
        <div className='relative w-full pt-10'>
            <>
                <div className='flex justify-end mb-5'>
                    <Hamburger toggled={isOpen} toggle={setOpen} onToggle={handleResetAnimation} size={18} color={theme === 'dark' ? '#ededed' : '#000'} />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                >
                    {
                        !individualProductScreen && updatedList.map((item, i) => (
                            <motion.div
                                variants={childVariants}
                                initial='hidden'
                                animate='visible'
                                key={item.id} className={`w-full grid grid-cols-3 gap-x-2 ${i === 0 ? 'border-y' : 'border-b'} ${theme === 'dark' ? 'border-sym-border' : 'border-gray-200'}`}>

                                <div className='col-span-1 bg-white'>
                                    <Image width={100} height={100} src={item.image} className='w-[100px] h-[100px] object-cover' alt='product' />
                                </div>

                                <div className="col-span-2 flex flex-col justify-center gap-y-1">
                                    <h1 className={`${theme === 'dark' ? 'text-sym-text-primary' : 'text-black'} text-[1rem] w-full`}>{item.title}</h1>
                                    <p className={`${theme === 'dark' ? 'text-sym-text-secondary' : 'text-gray-800'} text-[0.9rem]`}>{`$${item.price}`}</p>
                                </div>

                            </motion.div>
                        ))
                    }
                </motion.div>

                <>
                    {
                        individualProductScreen && (
                            <motion.div
                                variants={containerVariants}
                                initial='hidden'
                                animate='visible'
                                key={updatedList[1].id} className='w-full grid grid-cols-1 px-2 gap-y-5'>

                                <motion.div
                                    variants={childVariants}
                                    className='col-span-1 bg-white rounded-[6px] overflow-hidden'>
                                    <Image width={100} height={100} src={updatedList[1].image} className='w-full h-[260px] object-cover' alt='product' />
                                </motion.div>

                                <div className="col-span-2 flex flex-col justify-center gap-y-1">
                                    <motion.h1
                                        variants={childVariants}
                                        className={`${theme === 'dark' ? 'text-sym-text-primary' : 'text-black'} text-[1.4rem] w-full pb-1`}>{updatedList[1].title}</motion.h1>
                                    <div className="flex items-center justify-between">
                                        <p className={`${theme === 'dark' ? 'text-sym-text-secondary' : 'text-gray-800'} text-[1.1rem] leading-2`}>{`$${updatedList[1].price}`}</p>
                                        <button className={`border ${theme === 'dark' ? 'border-green-500 text-green-500' : 'bg-green-500 text-[#fff] py-1'} rounded-[6px] px-2 text-[0.9rem]`}>Add to Cart</button>
                                    </div>
                                    <div className='border-b border-[#292929] mt-3'></div>
                                    <motion.p
                                        variants={childVariants}
                                        className={`text-[0.9rem] ${theme === 'dark' ? 'text-sym-text-secondary' : 'text-gray-800'} mt-5`}>Nothing Ear(2): Superior sound.  Active noise cancellation.  Crystal-clear calls.  Lightweight & comfortable design.</motion.p>
                                </div>

                            </motion.div>
                        )
                    }
                </>

                <Modal theme={theme} bgColor='bg-black' width='w-[90%]' openModal={isOpen} handleOpenModal={() => { setOpen(!isOpen); setOpenList(false) }}>
                    <>
                        <div className='flex flex-col justify-center gap-y-10 text-[0.9rem]'>

                            <div className='relative group z-20'>
                                <input className={`w-full h-10 border ${theme === 'dark' ? 'border-[#292929]' : 'border-gray-400'} rounded-[6px] text-[#ededed] outline-none pl-12`} type="text" />
                                <MagnifyingGlassIcon className='absolute top-2 text-[#3e3e3e] group-hover:text-[#ededed] left-2 w-6 h-6 transition-color duration-300' />

                                <ReactTyped className={`absolute top-2 left-10 text-[1rem] text-balance text-sym-text-primary`} startDelay={1200} strings={['Nothing earbuds']} typeSpeed={20} onComplete={handleAfterType} />

                                {
                                    searching && (
                                        <div className='absolute top-3 right-2 text-white h-5'>
                                            <Spinner className='' />
                                        </div>
                                    )
                                }

                                {
                                    openList && (
                                        <motion.div
                                            initial={{ opacity: 0, top: 0 }}
                                            animate={{ opacity: 1, top: 35 }}
                                            transition={{ duration: 0.5, type: 'spring', bounce: 0.1 }}
                                            className={`absolute top-9 left-0 z-20 w-full max-h-[200px] overflow-y-scroll border ${theme === 'dark' ? 'border-[#292929]' : 'border-gray-400'} rounded-b-[5px] shadow-xl ${theme === 'dark' ? 'shadow-black' : 'shadow-xl'}`}>
                                            {
                                                updatedList.slice(0, 2).map((item: ListItem, i: number) => (
                                                    <button key={`${item}-${i}`} className={`w-full h-10 ${theme === 'dark' ? 'bg-black' : 'bg-[#ededed]'} ${highlightedItem === i ? theme === 'dark' ? 'text-[#ededed]' : 'text-black' : theme === 'dark' ? 'text-[#a1a1a1]' : 'text-gray-500'} text-start capitalize ring-0 focus:ring-0 focus:outline-none px-2 placeholder-[#292929] active:bg-[#10100e] transition-color duration-200`}>
                                                        {
                                                            item.title
                                                        }
                                                    </button>
                                                ))
                                            }
                                        </motion.div>
                                    )
                                }

                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className='flex flex-col gap-y-5 z-10'>
                                <Link className={`flex gap-x-2 items-center ${theme === 'dark' ? 'text-[#a1a1a1]' : 'text-gray-700'}`} href='/profile'>
                                    <UserIcon className="w-4 h-4" />
                                    Profile
                                </Link>

                                <CartHub theme={theme} />

                                <div>
                                    <button className={`flex ${theme === 'dark' ? 'text-[#a1a1a1]' : 'text-gray-700'} items-center justify-center gap-x-2 cursor-pointer`}>
                                        <PowerIcon className="w-4 h-4" />
                                        <div className="text-[0.9rem]">Sign Out</div>
                                    </button>
                                </div>
                            </motion.div>

                        </div>
                    </>
                </Modal>
            </>
        </div>
    )
}
