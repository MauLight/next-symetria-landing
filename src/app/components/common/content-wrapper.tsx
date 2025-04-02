import { type ReactNode } from 'react'

export default function ContentWrapper({ children }: { children: ReactNode }) {
    return (
        <div className='w-full max-w-[1440px] z-20 flex flex-col justify-center items-center'>
            {children}
        </div>
    )
}
