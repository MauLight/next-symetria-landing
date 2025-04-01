'use client'

import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function CartHub({ theme }: { theme: string }) {

    return (
        <Link className={`relative flex gap-x-2 items-center ${theme === 'dark' ? 'text-[#a1a1a1]' : 'text-gray-700'}`} href='/cart'>
            <div className="flex gap-x-2 relative">
                <div className="absolute flex justify-center items-center -top-2 -right-5 w-5 h-5 rounded-full bg-green-500">
                    <p className="text-black">{5}</p>
                </div>
                <ShoppingCartIcon className="w-4 h-4" />
                Your Cart
            </div>
        </Link>
    )
}
