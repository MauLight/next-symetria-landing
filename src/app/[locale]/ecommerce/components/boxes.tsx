import React from 'react'

export default function Boxes({ width, border, special }: { width: number, border?: string, special?: boolean }) {
    return (
        <div className="flex">
            {
                special ? (
                    <>
                        {
                            Array.from({ length: 10 }).map((_, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: `calc(${width}px / 10)`,
                                        height: `calc(${width}px / 10)`
                                    }}
                                    className={`${border ? border : 'border-b'} border-sym-border ${i === 9 ? '' : 'border-r'}`}></div>
                            ))
                        }
                    </>
                )
                    :
                    (
                        <>
                            {
                                Array.from({ length: 10 }).map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: `calc(${width}px / 10)`,
                                            height: `calc(${width}px / 10)`
                                        }}
                                        className={`${border ? border : 'border-y'} border-sym-border ${i === 9 ? '' : 'border-r'}`}></div>
                                ))
                            }
                        </>
                    )
            }
        </div>
    )
}
