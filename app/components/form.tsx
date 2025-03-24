'use client'

import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { createContext, ReactNode, useContext, useState } from "react"
import validator from 'validator'
import { CheckIcon } from '@heroicons/react/solid'

async function delay(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

const transition = { type: "ease", ease: "easeInOut", duration: 1 }

export default function Form({ email, onSubmit, children, ...props }: { email: string, onSubmit: () => Promise<void>, className: string, children: ReactNode }) {
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState<boolean>(false)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (validator.isEmail(email)) {
            setError(false)
            setStatus("saving")
            await delay(1250)
            await onSubmit()
        } else {
            setError(true)
        }
    }

    return (
        <formContext.Provider value={{ status, error }}>
            <form onSubmit={handleSubmit} {...props}>
                <fieldset disabled={status !== "idle"}>{children}</fieldset>
            </form>
        </formContext.Provider>
    );
}

const formContext = createContext({ status: '', error: false });

Form.Button = function FormButton({ children, className, ...rest }: { children: ReactNode, className: string }) {
    const { status, error } = useContext(formContext)

    const disabled = status !== "idle"

    return (
        <MotionConfig transition={{ ...transition, duration: 0.15 }}>
            <button
                type="submit"
                disabled={disabled}
                className={`${className} ${error ? 'bg-red-500' : ''} relative transition duration-200 ${disabled ? "bg-opacity-80" : "hover:bg-opacity-80"
                    }`}
                {...rest}
            >
                <AnimatePresence mode="wait">
                    {status === "saving" && (
                        <motion.div
                            key="a"
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex justify-center py-2"
                        >
                            <Spinner className={''} />
                        </motion.div>
                    )}

                    {status === "success" && (
                        <motion.div
                            key="b"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 flex justify-center py-2"
                        >
                            <CheckIcon className="h-full" />
                        </motion.div>
                    )}
                </AnimatePresence>
                <span className={status === "idle" ? "" : "invisible"}>{children}</span>
            </button>
        </MotionConfig>
    );
};

function Spinner({ className, ...rest }: { className: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={`${className} h-full w-auto animate-spin`}
            style={{
                animationTimingFunction: "steps(8, end)",
                animationDuration: ".75s",
            }}
            {...rest}
        >
            <rect
                style={{ opacity: 0.4 }}
                x={11}
                y={2}
                width={2}
                height={6}
                rx={1}
                fill="currentColor"
            />
            <rect
                style={{ opacity: 0.4 }}
                x={18.364}
                y={4.22183}
                width={2}
                height={6}
                rx={1}
                transform="rotate(45 18.364 4.222)"
                fill="currentColor"
            />
            <rect
                x={22}
                y={11}
                width={2}
                style={{ opacity: 0.4 }}
                height={6}
                rx={1}
                transform="rotate(90 22 11)"
                fill="currentColor"
            />
            <rect
                x={19.7782}
                y={18.364}
                width={2}
                style={{ opacity: 0.4 }}
                height={6}
                rx={1}
                transform="rotate(135 19.778 18.364)"
                fill="currentColor"
            />
            <rect
                x={13}
                y={22}
                width={2}
                style={{ opacity: 0.4 }}
                height={6}
                rx={1}
                transform="rotate(-180 13 22)"
                fill="currentColor"
            />
            <rect
                x={5.63603}
                y={19.7782}
                width={2}
                style={{ opacity: 0.6 }}
                height={6}
                rx={1}
                transform="rotate(-135 5.636 19.778)"
                fill="currentColor"
            />
            <rect
                x={2}
                y={13}
                width={2}
                style={{ opacity: 0.8 }}
                height={6}
                rx={1}
                transform="rotate(-90 2 13)"
                fill="currentColor"
            />
            <rect
                x={4.22183}
                y={5.63603}
                width={2}
                height={6}
                rx={1}
                transform="rotate(-45 4.222 5.636)"
                fill="currentColor"
            />
        </svg>
    );
}