/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from 'motion/react'
import { Dispatch, JSX, SetStateAction, useEffect, useState, type SVGProps } from 'react'

type CheckIconProps = SVGProps<SVGSVGElement>

export function CheckIcon(props: CheckIconProps): JSX.Element {
    return (
        <svg
            {...props}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
        >
            <motion.path
                initial={{
                    pathLength: 0
                }}
                animate={{
                    pathLength: 1
                }}
                transition={{
                    delay: 0.1,
                    type: 'tween',
                    ease: 'easeOut'
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
            />
        </svg>
    );
}

function Step({ step, currentStep }: { step: number, currentStep: number }) {

    //* If step equals currentStep, then step is active. If currentStep is less than step, then step is inactive (hasn't been done yet). If currentStep is more than step, it means that step is completed.
    const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete'

    return (
        <motion.div animate={status} className='relative'>
            <motion.div
                variants={{
                    inactive: {
                        scale: 1
                    },
                    active: {
                        scale: 1,
                        transition: {
                            delay: 0,
                            duration: 0.2
                        }
                    },
                    complete: {
                        scale: 1.15
                    }
                }}
                transition={{
                    duration: 0.5,
                    delay: 0.2,
                    type: 'tween',
                    ease: 'circOut'
                }}
                className="absolute inset-0 bg-blue-600 rounded-full">
            </motion.div>
            <motion.div
                initial={false}
                transition={{ duration: 0.5 }}
                variants={{
                    inactive: {
                        backgroundColor: '#000',
                        borderColor: '#292929',
                        color: '#a1a1a1'
                    },
                    active: {
                        backgroundColor: '#000',
                        borderColor: '#2563EB',
                        color: '#2563EB'
                    },
                    complete: {
                        backgroundColor: '#2563EB',
                        borderColor: '#2563EB',
                        color: '#fff'

                    }
                }}
                className={`relative w-10 h-10 flex justify-center items-center rounded-full border-2 font-semibold ${status === 'active' ? 'border-blue-500 bg-[#fff] text-blue-500' : status === 'complete' ? 'border-blue-500 bg-blue-500' : 'border-slate-200 bg-[#fff] text-slate-400'}`}>
                <div className="flex items-center justify-center">
                    {
                        status === 'complete' ? (
                            <CheckIcon className='w-6 h-6 text-[#ffffff]' />
                        )
                            :
                            (
                                <span>{step}</span>
                            )
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}

function Multistep({ setSliderStep }: { setSliderStep: Dispatch<SetStateAction<number>> }) {

    const [step, setStep] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => {
            setStep(1)
            setTimeout(() => {
                setStep(2)
                setTimeout(() => {
                    setStep(3)
                    setTimeout(() => {
                        setStep(4)
                        setTimeout(() => {
                            setSliderStep(1)
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, [])

    return (
        <div className='relative w-full h-full bg-black flex items-start justify-center rounded-[18px]'>

            <div className='absolute w-full h-full flex justify-center pt-[100px] z-20'>
                <main className="w-[400px] h-[350px] bg-black rounded-[12px] flex flex-col justify-center border border-sym-border">
                    <section className="flex justify-between rounded p-8">
                        {
                            Array.from({ length: 4 }).map((_, i) => (
                                <Step key={i} step={i} currentStep={step} />
                            ))
                        }
                    </section>

                    <section className='px-8 pb-8'>
                        <div>
                            <div className="mt-2 h-6 w-40 rounded bg-sym-border" />
                            <div className="mt-4 space-y-2">
                                <div className="h-4 w-5/6 rounded bg-sym-border" />
                                <div className="h-4 rounded bg-sym-border" />
                                <div className="h-4 w-4/6 rounded bg-sym-border" />
                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-10'>
                            {/* If step is less than 2, step (eg. 1), if not, step is step minus 1 (4 => 3, 3 => 2, 2 => 1) */}
                            <button onClick={() => setStep(step < 1 ? step : step - 1)} className='rounded px-2 py-1 text-sym-text-secondary hover:text-slate-700 transition-color duration-200 cursor-pointer'>
                                Back
                            </button>
                            <button onClick={() => setStep(step < 4 ? step + 1 : step)} className={`${step < 4 ? '' : 'pointer-events-none opacity-50'} h-10 flex justify-center items-center rounded-[6px] border px-4 font-medium tracking-tight text-blue-500 hover:bg-blue-400 active:bg-blue-700 transition-color duration-200 z-50`}>Continue</button>
                        </div>
                    </section>
                </main>
            </div>

            <div className={`flex-1 rounded-[18px] overflow-hidden opacity-60`}>
                <h1 className={`h-8 rounded bg-sym-border text-2xl font-bold`} />
                <div className="mt-8 space-y-6">
                    {[...Array(9).keys()].map((i) => (
                        <div key={i} className="space-y-2 text-sm">
                            <p className={`h-4 w-5/6 rounded bg-sym-border`} />
                            <p className={`h-4 rounded bg-sym-border`} />
                            <p className={`h-4 w-4/6 rounded bg-sym-border`} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Multistep