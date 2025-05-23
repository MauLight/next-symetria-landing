'use client'

import { type ReactNode } from "react"

export default function IpadCase({ children }: { children: ReactNode }) {
    return (
        <div className="w-[940px] h-[680px] rounded-[25px] bg-gradient-to-b from-[#292929] to-[#191919] overflow-hidden">
            <div className="w-full h-full scale-[99%] bg-black rounded-[20px] p-3">
                {
                    children
                }
            </div>
        </div>
    )
}
