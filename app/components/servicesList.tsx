'use client'

import { animatedGradientText } from '../styles'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import { ReactTyped } from 'react-typed'
import useMeasure from 'react-use-measure'
import { ModularAgent, randRange } from '../classes'
import { CursorArrowRippleIcon } from '@heroicons/react/24/outline'

const containerVariants = {
    initial: {},
    hover: {}
}

const childVariants = {
    initial: { opacity: 0, scale: 0, borderRadius: '100%' },
    hover: { opacity: 1, scale: 2, borderRadius: '100%', transition: { duration: 0.5 } }
}

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

const services = [
    {
        id: 'a1',
        service: 'Modular Saas',
        description: ''
    },
    {
        id: 'b2',
        service: 'Software Development',
        description: ''
    },
    {
        id: 'c3',
        service: 'Ui/Ux Design',
        description: ''
    },
]

export default function ServicesList() {

    const [uiUxAnimate, setUiUxAnimate] = useState<string>('animate')

    //* Canvas state, calculate width using bounds.
    const [ref, bounds] = useMeasure()
    const [width] = useState(bounds.width > 0 ? bounds.width : 2000)
    const [height] = useState(700)

    const agents: ModularAgent[] = []

    //* Number of iterations equals number of dots on screen.
    for (let i = 0; i < 60; i++) {
        const x = randRange(0, width)
        const y = randRange(0, height)
        agents.push(new ModularAgent(x, y))
    }

    useEffect(() => {
        const canvas = document.getElementById('modular') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            for (let i = 0; i < agents.length; i++) {
                const agent = agents[i]

                for (let j = i + 1; j < agents.length; j++) {
                    const other = agents[j]
                    const dist = agent.pos.getDistance(other.pos)

                    //* Number indicates the max distance between two points to hold a line between them.
                    if (dist > 300) continue

                    ctx.lineWidth = 1 - dist / 200
                    ctx.beginPath()
                    ctx.moveTo(agent.pos.x, agent.pos.y)
                    ctx.lineTo(other.pos.x, other.pos.y)
                    ctx.stroke()
                    ctx.strokeStyle = '#6366F1'
                }
            }

            agents.forEach(agent => {
                agent.update()
                agent.draw(ctx)
                agent.bounce(width, height)
            })
        }

        const loop = () => {
            render()
            requestAnimationFrame(loop)
        }
        loop()
        return () => ctx.clearRect(0, 0, width, height)
    })

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
        <div className="w-full h-screen flex flex-col justify-start items-center gap-y-20">
            <div className="w-full max-w-[1440px]">
                <h1 className={`text-start font-sym-title tracking-tighter antialiased ${animatedGradientText} text-[4rem]`}>Our Services</h1>
                <div className="flex items-center gap-x-2">
                    <CursorArrowRippleIcon className='w-5 h-5 text-green-500' />
                    <p className='text-sym-text-secondary text-[1rem]'>{'Hover over the options to see details.'}</p>
                </div>
            </div>
            <div className="w-full h-1/2 max-w-[1440px] grid grid-cols-3 items-center gap-x-10">
                {
                    services.map((service) => (
                        <motion.div
                            variants={containerVariants}
                            initial='initial'
                            whileHover='hover'
                            key={`id-${service.id}`} className="relative overflow-hidden col-span-1 h-full border border-sym-border hover:border-indigo-500 transition-color duration-300 ease-out rounded-[25px]">
                            <div className="w-full h-full flex flex-col items-center px-10 py-24 gap-y-5">
                                <h1 className="text-sym-text-primary z-30 tracking-tight font-sym-title uppercase text-[1.9rem]">{service.service}</h1>

                                {
                                    service.id === 'c3' && (
                                        <>
                                            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% z-10' />
                                            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% z-10' />
                                            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% glass z-10' />
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
                                {
                                    service.id === 'b2' && (
                                        <>
                                            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% z-10' />
                                            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% z-10' />
                                            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% glass z-10' />

                                            <div className='absolute w-full scale-120 h-full flex flex-col items-between opacity-80'>
                                                <ReactTyped loop backSpeed={20} backDelay={6000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={100} strings={['const saas = 1 + 1']} typeSpeed={20} />
                                                <ReactTyped loop backSpeed={20} backDelay={7200} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={1200} strings={['if (saas === 2) { setSuccess(true) }']} typeSpeed={20} />
                                                <ReactTyped loop backSpeed={20} backDelay={10000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={2500} strings={['else { setSuccess(false) }']} typeSpeed={20} />
                                                <br />
                                                <ReactTyped loop backSpeed={20} backDelay={13500} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={3500} strings={['const ctlst = yourBusiness.filter((service) => !service.painpoints)']} typeSpeed={20} />
                                                <br />
                                                <ReactTyped loop backSpeed={20} backDelay={19000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={5500} strings={['useEffect(() => { if (window.revenue) { setHappyCustomer(true) } }, [])']} typeSpeed={20} />

                                                <ReactTyped loop backSpeed={20} backDelay={6000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={100} strings={['const ctlst = yourBusiness.filter((service) => !service.painpoints)']} typeSpeed={20} />
                                                <ReactTyped loop backSpeed={20} backDelay={7200} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={1200} strings={['useEffect(() => { if (window.revenue) { setHappyCustomer(true) } }, [])']} typeSpeed={20} />
                                                <ReactTyped loop backSpeed={20} backDelay={10000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={2500} strings={['else { setSuccess(false) }']} typeSpeed={20} />
                                                <br />
                                                <ReactTyped loop backSpeed={20} backDelay={13500} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={3500} strings={['const saas = 1 + 1']} typeSpeed={20} />
                                                <br />
                                                <ReactTyped loop backSpeed={20} backDelay={19000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={5500} strings={['if (saas === 2) { setSuccess(true) }']} typeSpeed={20} />
                                            </div>
                                        </>
                                    )
                                }

                                {
                                    service.id === 'a1' && (
                                        <div className='absolute top-0 left-0 w-full' ref={ref}>
                                            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% z-10' />
                                            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% z-10' />
                                            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% glass z-10' />
                                            <canvas className='w-full h-full opacity-80' width={bounds.width + 190} height={700} id='modular'></canvas>
                                        </div>
                                    )
                                }

                            </div>
                            <motion.div
                                variants={childVariants}
                                className={`absolute top-0 w-full h-full flex justify-center items-center bg-indigo-500 z-20`}>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 2 }}
                                    className='w-[190px] text-sym-text-primary text-[0.6rem] pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo nobis mollitia consequuntur nostrum ad magni. Ipsam quasi ullam dolore? Aliquid voluptate quas voluptatibus saepe consequatur. Laudantium vero corrupti expedita!</motion.p>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}
