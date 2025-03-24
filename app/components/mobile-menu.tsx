'use client'

import { Divide as Hamburger } from 'hamburger-react'
import { Modal } from './Modal'
import { useState } from 'react'
import { MagnifyingGlassIcon, UserIcon, PowerIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import CartHub from './cart-hub'
import { ReactTyped } from "react-typed"
import { motion } from 'motion/react'

export default function MobileMenu() {

    const [isOpen, setOpen] = useState(false)
    const [openList, setOpenList] = useState(false)

    function handleAfterType() {
        setTimeout(() => {
            setOpenList(true)
        }, 1000)
    }

    const list = ['earbuds 1', 'earbuds 2']

    return (
        <div className='relative w-full pt-10'>
            <div className='flex justify-end mb-5'>
                <Hamburger toggled={isOpen} toggle={setOpen} onToggle={() => { setOpenList(false) }} size={18} color='#ededed' />
            </div>
            <Modal bgColor='bg-black' width='w-[90%]' openModal={isOpen} handleOpenModal={() => { setOpen(!isOpen); setOpenList(false) }}>
                <>
                    <div className='flex flex-col justify-center gap-y-10 text-[0.9rem]'>

                        <div className='relative group '>
                            <input className='w-full h-10 border border-[#292929] rounded-[6px] text-[#ededed] outline-none pl-12' type="text" />
                            <MagnifyingGlassIcon className='absolute top-2 text-[#3e3e3e] group-hover:text-[#ededed] left-2 w-6 h-6 transition-color duration-300' />

                            <ReactTyped className={`absolute top-2 left-10 text-[1rem] text-balance text-sym-text-primary`} startDelay={800} strings={['Nothing earbuds']} typeSpeed={20} onComplete={handleAfterType} />

                            {
                                openList && (
                                    <motion.div
                                        initial={{ opacity: 0, top: 0 }}
                                        animate={{ opacity: 1, top: 35 }}
                                        transition={{ duration: 0.2, type: 'spring', bounce: 0.1 }}
                                        className='absolute top-9 left-0 z-20 w-full max-h-[200px] overflow-y-scroll border border-[#292929] rounded-b-[5px] shadow-xl shadow-black'>
                                        {
                                            list.map((item: string, i: number) => (
                                                <button key={`${item}-${i}`} className={`w-full h-9 bg-black text-[#a1a1a1] ring-0 focus:ring-0 focus:outline-none px-2 placeholder-[#292929] hover:text-[#ededed] active:text-[#ffffff] active:bg-[#10100e] transition-color duration-200`}>
                                                    {
                                                        item
                                                    }
                                                </button>
                                            ))
                                        }
                                    </motion.div>
                                )
                            }

                        </div>

                        <div className='flex flex-col gap-y-5'>
                            <Link className='flex gap-x-2 items-center text-[#a1a1a1] hover:text-[#ededed] transition-color duration-300' href='/profile'>
                                <UserIcon className="w-4 h-4" />
                                Profile
                            </Link>

                            <CartHub />

                            <div>
                                <button className="flex text-[#a1a1a1] hover:text-[#ededed] transition-color duration-300 items-center justify-center gap-x-2 cursor-pointer">
                                    <PowerIcon className="w-4 h-4" />
                                    <div className="text-[0.9rem]">Sign Out</div>
                                </button>
                            </div>
                        </div>

                    </div>
                </>
            </Modal>
        </div>
    )
}
