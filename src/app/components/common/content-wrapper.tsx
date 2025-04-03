import { type ReactNode } from 'react'

export default function ContentWrapper({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={`w-full max-w-[1440px] z-20 flex flex-col justify-center items-center ${className}`}>
            {children}
        </div>
    )
}
