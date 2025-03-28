'use client'

import { Link } from 'react-scroll'

import React from 'react'

export default function ScrollButton() {
    return (
        <Link
            to="scrollTarget"
            smooth={true}
            duration={1000}
            className="h-10 w-[200px] flex justify-center items-center cursor-pointer px-2 border border-sym-border hover:border-green-500 rounded-[6px] text-sym-text-primary hover:text-green-500 transition-color duration-300 capitalize animate-pulse hover:animate-none"
        >

            Tell Me More
        </Link>
    )
}
