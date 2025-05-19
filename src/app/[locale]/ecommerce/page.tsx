'use client'

import useMeasure from 'react-use-measure'
import Boxes from './components/boxes'

export default function Page() {

    const [ref, bounds] = useMeasure()

    return (
        <div className='w-full h-full flex justify-center items-center pt-[120px]'>
            <div ref={ref} className="w-full h-full max-w-[1440px] flex flex-col justify-center items-center">

                <div className='border-x border-sym-border'>
                    <Boxes width={bounds.width} />

                    <div className="flex items-center gap-y-2 w-full border-b border-sym-border">


                        <div className="flex flex-col">
                            {
                                Array.from({ length: 2 }).map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: `calc(${bounds.width}px / 10)`,
                                            height: `calc(${bounds.width}px / 10)`
                                        }}
                                        className={`border-sym-border ${i === 1 ? 'border-r' : 'border-r border-b'}`}></div>
                                ))
                            }
                        </div>
                        <div className="flex flex-col">
                            {
                                Array.from({ length: 2 }).map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: `calc(${bounds.width}px / 10)`,
                                            height: `calc(${bounds.width}px / 10)`
                                        }}
                                        className={`border-sym-border ${i === 1 ? 'border-r' : 'border-r border-b'}`}></div>
                                ))
                            }
                        </div>


                        <div className="flex flex-col items-center grow">
                            <h1 className='text-sym-text-primary text-[3rem]'>A complete <b className='text-hero-inside animated-background'>E-Commerce</b> solution.</h1>
                            <p className='text-sym-text-secondary text-[1.2rem] text-balance'>Deploy a fast, slick and secure platform powered by A.I. and start selling your products.</p>
                        </div>

                        <div className="flex flex-col">
                            {
                                Array.from({ length: 2 }).map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: `calc(${bounds.width}px / 10)`,
                                            height: `calc(${bounds.width}px / 10)`
                                        }}
                                        className={`border-sym-border ${i === 1 ? 'border-l' : 'border-l border-b'}`}></div>
                                ))
                            }
                        </div>
                        <div className="flex flex-col">
                            {
                                Array.from({ length: 2 }).map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: `calc(${bounds.width}px / 10)`,
                                            height: `calc(${bounds.width}px / 10)`
                                        }}
                                        className={`border-sym-border ${i === 1 ? 'border-l' : 'border-l border-b'}`}></div>
                                ))
                            }
                        </div>

                    </div>

                    <Boxes special width={bounds.width} />
                    <Boxes border='border-b' width={bounds.width} />
                </div>

            </div>
        </div>
    )
}
