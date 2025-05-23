'use client'

import axios from 'axios'
import validator from 'validator'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import useMeasure, { RectReadOnly } from 'react-use-measure'
import { motion, MotionConfig, AnimatePresence } from 'motion/react'

//* Components
import Form from './form'
import ErrorComponent from './ErrorComponent'
import { Agent, randRange } from '../classes'

const recaptchaSiteKey = process.env.NEXT_PUBLIC_GRECAPTCHA

interface GoogleReCaptcha {
    execute: (siteKey: string, options: { action: string }) => Promise<string>
    ready: (callback: () => void) => void
}

declare global {
    interface Window {
        grecaptcha: GoogleReCaptcha
    }
}

const containerVariants = {
    initial: {},
    hover: {}
}

const childVariants = {
    initial: { opacity: 1, scale: 0, borderRadius: '100%' },
    hover: { opacity: 1, scale: 2, borderRadius: '100%', transition: { duration: 0.2 } },
    exit: { opacity: 0 }
}

export default function ContactForm({ parent }: { parent: RectReadOnly }) {

    const text = useTranslations('Form')

    const [email, setEmail] = useState<string>('')
    const [honeyPot, setHoneyPot] = useState<string>('')
    const [status, setStatus] = useState("idle")

    const [{ hasError }, setApiState] = useState<{ isLoading: boolean, hasError: boolean, fulfilled: boolean }>({
        isLoading: false,
        hasError: false,
        fulfilled: false
    })

    async function handleSubmitContact(token: string) {

        if (!validator.isEmail(email)) {
            return
        }

        if (honeyPot.length > 0) {
            return
        }

        setApiState(prev => ({
            ...prev,
            isLoading: true
        }))

        try {
            const { data } = await axios.post('https://symetria-landing.netlify.app/.netlify/functions/send-contact', { email, token })
            if (data.message) {

                setApiState(prev => ({
                    ...prev,
                    isLoading: false
                }))

                setStatus("success")
            } else {

                setApiState(prev => ({
                    ...prev,
                    hasError: true
                }))
            }

        } catch (error) {

            setApiState(prev => ({
                ...prev,
                hasError: true
            }))

            console.log(error)
        }
    }

    async function handleSubmitRecaptcha(): Promise<void> {
        if (!window.grecaptcha) {
            console.error('reCAPTCHA not available')
            return
        }

        try {
            const token = await window.grecaptcha.execute(recaptchaSiteKey as string, { action: 'contact_form' })
            await handleSubmitContact(token)
        } catch (error) {
            console.error(error)
        }
    }

    //* Canvas state, calculate width using bounds.
    const [ref, bounds] = useMeasure()
    const [width] = useState(bounds.width > 0 ? bounds.width : 2000)
    const [height] = useState(700)

    const agents: Agent[] = []

    //* Number of iterations equals number of dots on screen.
    for (let i = 0; i < 30; i++) {
        const x = randRange(0, width)
        const y = randRange(0, height)
        agents.push(new Agent(x, y))
    }

    useEffect(() => {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            for (let i = 0; i < agents.length; i++) {
                const agent = agents[i]

                for (let j = i + 1; j < agents.length; j++) {
                    const other = agents[j]
                    const dist = agent.pos.getDistance(other.pos)

                    //* Number indicates the max distance between two points to hold a line between them.
                    if (dist > 250) continue

                    ctx.lineWidth = 1 - dist / 200
                    ctx.beginPath()
                    ctx.moveTo(agent.pos.x, agent.pos.y)
                    ctx.lineTo(other.pos.x, other.pos.y)
                    ctx.stroke()
                    ctx.strokeStyle = '#a9a9a9'
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


    const transition = { type: "ease", ease: "easeInOut", duration: 1 }

    return (
        <MotionConfig transition={transition}>
            <div className="relative w-full h-[700px] flex flex-col items-start pt-44 px-5">
                <div className="mx-auto w-full max-w-lg z-20">
                    <div className="rounded-[25px] border border-sym-border bg-sym-card overflow-hidden">
                        {
                            hasError && (
                                <ErrorComponent theme='dark' />
                            )
                        }
                        {
                            !hasError && (
                                <>
                                    <div className="px-8 pt-8">
                                        <p className="text-form-header">{status === "idle" || status === "saving" ? text('first') : text('second')}</p>
                                    </div>

                                    <motion.div
                                        animate={{ height: bounds.height > 0 ? bounds.height : '' }}
                                        transition={{ type: 'spring', bounce: 0.1, duration: 0.8 }}
                                    >
                                        <div ref={ref}>
                                            <AnimatePresence mode='popLayout'>
                                                {status === "idle" || status === "saving" ? (

                                                    <motion.div
                                                        key={1}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ ...transition, duration: 0.3 }}
                                                        className='p-8'>
                                                        <Form
                                                            email={email}
                                                            onSubmit={handleSubmitRecaptcha}
                                                            className=""
                                                        >
                                                            <p className="text-form-main">
                                                                {text('third')}
                                                            </p>
                                                            <div className="mt-3">
                                                                <input
                                                                    value={email}
                                                                    onChange={({ target }) => { setEmail(target.value) }}
                                                                    className="block h-10 w-full px-2 text-indigo-500 border border-sym-border rounded-[6px] outline-0"
                                                                    placeholder="your@email.com"
                                                                />
                                                            </div>
                                                            <div className="mt-3 hidden">
                                                                <input
                                                                    value={honeyPot}
                                                                    onChange={({ target }) => { setHoneyPot(target.value) }}
                                                                    className="block w-full px-2 rounded border-none h-10 bg-[#fff] text-slate-900 outline-0"
                                                                    placeholder="your@email.com"
                                                                />
                                                            </div>

                                                            <div className='mt-4 flex gap-x-2 items-center'>
                                                                <input className='mt-[2px]' type="checkbox" id="privacyConsent" name="privacyConsent" required />
                                                                <label className='text-form-small' htmlFor="privacyConsent">
                                                                    I agree to the <a className='text-indigo-500 underline' href="/terms" target="_blank">terms & conditions</a> and <a className='text-indigo-500 underline' href="/privacy" target="_blank">privacy policy</a>
                                                                </label>
                                                            </div>

                                                            <div className="mt-8 flex justify-end">
                                                                <motion.div
                                                                    variants={containerVariants}
                                                                    initial='initial'
                                                                    whileHover='hover'
                                                                    exit='exit'
                                                                    className="relative group overflow-hidden w-[120px] rounded-[6px] border border-indigo-500 px-4 py-2">
                                                                    <Form.Button className='w-full flex justify-center text-[1rem] text-indigo-500 group-hover:text-black z-20'>
                                                                        {text('fourth')}
                                                                    </Form.Button>
                                                                    <motion.div
                                                                        variants={childVariants}
                                                                        className='absolute -top-10 left-0 w-[120px] h-[120px] flex justify-center items-center bg-indigo-500'></motion.div>
                                                                </motion.div>
                                                            </div>
                                                        </Form>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ ...transition, duration: 0.4, delay: 0.3 }}
                                                    >
                                                        <p className="p-8 text-sm text-zinc-400">
                                                            {text('fifth')}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className='absolute top-0 left-0 w-full h-full z-10 bg-radial from-transparent to-black'></div>
                <div className='absolute top-0 left-0 w-full h-full z-10 bg-radial from-transparent to-black'></div>
                <canvas className='absolute top-0 left-0 h-full' width={parent.width} height={700} id='canvas'></canvas>
            </div>
        </MotionConfig>
    );
}