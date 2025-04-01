import Image from 'next/image'
import { ReactElement, type JSX } from 'react'

export default function IphoneCase({ size = 'md', children, theme }: { size: string, children?: ReactElement, theme: string }): JSX.Element {

    let iphoneSize = ''

    switch (size) {
        case 'sm':
            iphoneSize = 'w-[calc(350px/1.2)] h-[calc(735px/1.2)]'
            break

        case 'md':
            iphoneSize = 'w-[350px] h-[735px]'
            break

        case 'lg':
            iphoneSize = 'w-[calc(350px*1.2)] h-[calc(735px*1.2)]'
            break

        case 'lg':
            iphoneSize = 'w-[calc(350px*1.5)] h-[calc(735px*1.5)]'
            break
    }

    return (
        <div className='flex justify-center items-center pt-20 pb-5 sm:py-20'>
            <div className={`${iphoneSize} bg-gradient-to-b from-[#292929] to-[#191919] rounded-[25px]`}>
                <div className='relative w-full h-full scale-x-[98%] scale-y-[99%] bg-black rounded-[22px] overflow-hidden px-1 py-1'>

                    {/* Camera */}
                    <div className="absolute top-0 left-0 w-full flex justify-center items-center pt-3 z-20">
                        <div className='bg-black rounded-full w-[100px] h-6 border border-[#292929]'></div>
                    </div>
                    {
                        children ? (
                            <div className={`w-full h-full ${theme === 'light' ? 'bg-[#fff] rounded-[15px]' : ''}`}>
                                {children}
                            </div>
                        )
                            :
                            (
                                <Image className='h-full w-full rounded-[15px] object-cover' width={350} height={735} alt='placeholder' src='https://i.pinimg.com/736x/f1/9a/eb/f19aeb8a319acd7ca07724c42d6b97cd.jpg' />
                            )
                    }
                </div>
            </div>
        </div>
    )
}
