import { type ReactNode } from 'react'

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <main className='relative h-screen flex flex-col items-center justify-center overflow-hidden px-5'>
            {children}
        </main>
    )
}
