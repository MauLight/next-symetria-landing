import { type ReactNode } from 'react'

export default function ServiceVignette(): ReactNode {
    return (
        <>
            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% z-10' />
            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% z-10' />
            <div className='absolute top-0 w-full h-full bg-radial from-transparent from-50%  to-black to-90% glass z-10' />
        </>
    )
}
