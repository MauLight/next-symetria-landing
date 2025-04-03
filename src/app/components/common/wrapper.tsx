import { type ReactNode } from 'react'

export default function Wrapper({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <main className={`relative md:h-screen flex flex-col items-center justify-center overflow-hidden px-5 ${className}`}>
            {children}
        </main>
    )
}