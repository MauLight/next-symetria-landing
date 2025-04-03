import { useTranslations } from 'next-intl'
import React from 'react'

export default function AwarenessText() {

    const text = useTranslations('Awareness')

    return (
        <section className='flex h-[600px] flex-col justify-center gap-y-10'>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>

                <div className="hidden md:flex col-span-1 lg:col-span-2"></div>

                <div className="col-span-1 flex flex-col gap-y-10 max-md:px-5">
                    <h1 className='text-body max-sm:text-center'>{text('first')}</h1>
                </div>

                <div className="hidden md:flex col-span-1 lg:col-span-2"></div>

            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>

                <div className="hidden md:flex col-span-1 lg:col-span-2"></div>

                <h1 className='col-span-1 text-body max-md:text-center md:w-[400px] max-md:px-5'>
                    {text('second')} <b className='text-indigo-500'>{text('third')}</b> {text('fourth').toLowerCase() === 'fluída' ? 'y' : 'and'} <b className='text-indigo-500'>{text('fourth')}</b>.
                </h1>

                <div className="hidden md:flex col-span-1 lg:col-span-2"></div>

            </div>

        </section>
    )
}
