/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { Dispatch, SetStateAction, useEffect, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArchiveBoxIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const titles = [
    ["Apple's newest iPhone is here", "Watch our July event"],
    [
        "Nintendo's Newsletter for July",
        "Introducing Strike, a 5-on-5 soccer game",
    ],
    ["Your funds have been processed", "See your latest deposit online"],
    ["This Week in Sports", "The finals are heating up"],
    ["Changelog update", "Edge subroutines and more"],
    ["React Hawaii is here!", "Time for fun in the sun"],
    ["Upgrade Your Security with Our New VPN", "Experience safer browsing today"],
    ["Your Website, Faster Than Ever", "Boost speed with our latest optimization tools"],
    ["Exclusive Discount for Loyal Customers", "Save big on your next subscription renewal"],
    ["Meet the Future of Cloud Storage", "Secure, scalable, and now even more affordable"],
    ["New Features Just Dropped!", "Explore our latest update and supercharge your workflow"]
]

function EmailClient({ theme, setSliderStep }: { theme: string, setSliderStep: Dispatch<SetStateAction<number>> }): ReactNode {
    const [messages, setMessages] = useState([...Array(1).keys()])
    const [selectedMessages, setSelectedMessages] = useState<number[]>([])
    const [finishAnimation, setFinishAnimation] = useState<boolean>(false)
    const [pressButton, setPressButton] = useState<boolean>(false)

    function toggleMessage(mid: number) {
        if (selectedMessages.includes(mid)) {
            setSelectedMessages((messages) => messages.filter((id) => id !== mid))
        } else {
            setSelectedMessages((messages) => [mid, ...messages])
        }
    }

    function addMessage() {
        const newId = (messages.at(-1) || 0) + 1
        setMessages((messages) => [...messages, newId])
    }

    function archiveMessages() {
        setMessages((messages) =>
            messages.filter((id) => !selectedMessages.includes(id))
        )
        setSelectedMessages([])
    }

    useEffect(() => {
        setTimeout(() => {
            setMessages([...Array(2).keys()])
            setTimeout(() => {
                setMessages([...Array(3).keys()])
                setTimeout(() => {
                    setMessages([...Array(5).keys()])
                    setTimeout(() => {
                        setMessages([...Array(8).keys()])
                        setTimeout(() => {
                            setMessages([...Array(9).keys()])
                            setTimeout(() => {
                                setMessages([...Array(9).keys()])
                                setTimeout(() => {
                                    toggleMessage(8)
                                    setTimeout(() => {
                                        toggleMessage(7)
                                        setTimeout(() => {
                                            setPressButton(true)
                                            setTimeout(() => {
                                                setFinishAnimation(true)
                                            }, 200)
                                        }, 1000)
                                    }, 1000)
                                }, 2000)
                            }, 1000)
                        }, 1000)
                    }, 2000)
                }, 1000)
            }, 2000)
        }, 2000)
    }, [])

    useEffect(() => {
        if (finishAnimation) {
            archiveMessages()
            setPressButton(false)
            setTimeout(() => {
                setSliderStep(2)
            }, 1000)
        }
    }, [finishAnimation])

    return (
        <div className="flex w-full h-full">
            <div className={`mx-auto h-full flex w-full flex-1 overflow-hidden rounded-[12px] ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                <div className={`flex sm:w-[45%] w-full flex-col py-2 ${theme === 'dark' ? 'bg-sym-card' : 'bg-slate-50'}`}>

                    {/* Header */}
                    <div className={`border-b px-5 ${theme === 'dark' ? 'border-sym-border' : 'border-gray-300 '}`}>
                        <div className="flex justify-between py-2 text-right">
                            <button
                                onClick={addMessage}
                                className={`-mx-2 rounded px-2 py-1 ${theme === 'dark' ? 'text-sym-text-secondary hover:text-blue-500 active:text-sym-text-secondary' : 'text-slate-400 hover:text-slate-500 active:bg-slate-200'}`}
                            >
                                <EnvelopeIcon className="h-5 w-5 " />
                            </button>
                            <button
                                onClick={archiveMessages}
                                className={`-mx-2 rounded px-2 py-1 ${theme === 'dark' ? `${pressButton ? 'text-blue-500' : 'text-sym-text-secondary'} hover:text-blue-500 active:text-sym-text-secondary` : 'text-slate-400 hover:text-slate-500 active:bg-slate-200'}`}
                            >
                                <ArchiveBoxIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <ul className="overflow-y-scroll px-3 pt-2">
                        <AnimatePresence initial={false}>
                            {[...messages].reverse().map((mid) => (
                                <motion.li
                                    key={mid}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{
                                        ease: 'circOut',
                                        duration: 0.3
                                    }}
                                    exit={{
                                        opacity: 0,
                                        height: 0
                                    }}
                                    className={`relative ${theme === 'dark' ? 'bg-black' : ''}`}
                                >
                                    <div className="py-0.5">
                                        <button
                                            onClick={() => toggleMessage(mid)}
                                            className={`${theme == 'dark' ? `${selectedMessages.includes(mid)
                                                ? "border-blue-500 border"
                                                : "hover:border-sym-border border"
                                                }` : `${selectedMessages.includes(mid)
                                                    ? "bg-blue-500"
                                                    : "hover:bg-slate-200"
                                                }`} block w-full cursor-pointer truncate rounded py-3 px-3 text-left transition-color duration-200`}
                                        >
                                            <p
                                                className={`${theme === 'dark' ? `${selectedMessages.includes(mid)
                                                    ? "text-sym-text-primary"
                                                    : "text-sym-text-secondary"
                                                    }` : `${selectedMessages.includes(mid)
                                                        ? "text-white"
                                                        : "text-slate-500"
                                                    }`} truncate text-sm font-medium`}
                                            >
                                                {titles[mid % titles.length][0]}
                                            </p>
                                            <p
                                                className={`${theme === 'dark' ? `${selectedMessages.includes(mid)
                                                    ? "text-sym-text-secondary"
                                                    : "text-gray-500"
                                                    }` : `${selectedMessages.includes(mid)
                                                        ? "text-blue-200"
                                                        : "text-slate-400"
                                                    }`} truncate text-xs`}
                                            >
                                                {titles[mid % titles.length][1]}
                                            </p>
                                        </button>
                                    </div>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>

                </div>

                {/* Body */}
                <div className={`max-sm:hidden flex-1 overflow-y-scroll border-l ${theme === 'dark' ? 'border-sym-border' : 'border-gray-300'} px-8 py-8`}>
                    <h1 className={`h-8 rounded ${theme === 'dark' ? 'bg-sym-border' : 'bg-slate-100'} text-2xl font-bold`} />
                    <div className="mt-8 space-y-6">
                        {[...Array(9).keys()].map((i) => (
                            <div key={i} className="space-y-2 text-sm">
                                <p className={`h-4 w-5/6 rounded ${theme === 'dark' ? 'bg-sym-border' : 'bg-slate-100'}`} />
                                <p className={`h-4 rounded ${theme === 'dark' ? 'bg-sym-border' : 'bg-slate-100'}`} />
                                <p className={`h-4 w-4/6 rounded ${theme === 'dark' ? 'bg-sym-border' : 'bg-slate-100'}`} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmailClient
