import React from 'react'

const text = {
    first: 'If you’re building the next version of your software, you don’t just want it to be faster and more efficient—you want it to stand out.',
    second: 'You want an experience that’s',
    third: 'elegant, eye-catching,',
    fourth: 'seamless'
}


export default function AwarenessText() {
    return (
        <div className='flex h-[600px] flex-col justify-center gap-y-10'>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>

                <div className="hidden md:flex col-span-1 lg:col-span-2"></div>

                <div className="col-span-1 flex flex-col gap-y-10 max-md:px-5">
                    <h1 className='text-sym-text-secondary max-md:text-center text-balance text-[1rem] sm:text-[1.5rem]'>{text.first}</h1>
                </div>

                <div className="hidden md:flex col-span-1 lg:col-span-2"></div>

            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>

                <div className="hidden md:flex col-span-1 lg:col-span-2"></div>

                <h1 className='col-span-1 text-sym-text-secondary text-balance text-[1rem] sm:text-[1.5rem] max-md:text-center md:w-[400px] max-md:px-5'>
                    {text.second} <b className='text-indigo-500'>{text.third}</b> and <b className='text-indigo-500'>{text.fourth}</b>.
                </h1>

                <div className="hidden md:flex col-span-1 lg:col-span-2"></div>

            </div>

        </div>
    )
}
