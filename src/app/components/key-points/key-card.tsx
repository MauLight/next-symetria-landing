import { type ReactNode } from 'react'
import ScrollButton from '../ScrollButton'

interface KeyCardProps {
    item: {
        id: number
        title: string
        desc: string
        icon: ReactNode
    },
    buttonText: string
}

export default function KeyCard({ item, buttonText }: KeyCardProps) {
    return (
        <div key={item.id} className="col-span-1 w-full max-md:h-[350px] md:h-full flex flex-col justify-between py-12 px-2 sm:px-10 bg-black rounded-[25px] border border-sym-border z-20">
            <div className="flex flex-col gap-y-5">
                <div className="flex max-sm:justify-center items-center gap-x-2 sm:gap-x-5">
                    {
                        item.icon
                    }
                    <h2 className="text-card-header">{item.title}</h2>
                </div>
                <p className="text-card-subheader">{item.desc}</p>
            </div>
            <div className="flex justify-center">
                <ScrollButton text={buttonText} />
            </div>
        </div>
    )
}
