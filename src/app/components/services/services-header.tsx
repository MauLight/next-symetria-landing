import { CursorArrowRippleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function ServicesHeader({ header, subHeader }: { header: string, subHeader: string }) {
    return (
        <div className='w-full'>
            <h1 className='w-full text-title max-md:text-center'>{header}</h1>
            <div className="flex max-md:justify-center items-center gap-x-2">
                <CursorArrowRippleIcon className='w-5 h-5 text-green-500' />
                <p className='text-sym-text-secondary text-[1rem]'>{subHeader}</p>
            </div>
        </div>
    )
}
