'use client'

import { useEffect, useRef, useState, type ReactElement } from 'react'
import { motion } from 'motion/react'

export const VideoDisplayHorizontal = (): ReactElement => {
  const [currentVideo, setCurrentVideo] = useState<number>(3)
  const [play, setPlay] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleSlider = (direction: number) => {
    setCurrentVideo((prev) => {
      if (direction === 1) {
        if (prev === 0) return 3 - 1
        return prev - 1
      }
      if (direction === 2) {
        if (prev === 3) return 1
        return prev + 1
      }
      return prev
    })
  }

  useEffect(() => {
    if (videoRef && videoRef.current) {
      setTimeout(() => {
        videoRef.current?.play()
        setPlay(true)
      }, 3600)
    }
  }, [])

  return (
    <div className="relative max-sm:h-[400px] flex justify-center items-center w-screen h-full">
      <div className="absolute top-0 left-0 bg-gradient-to-t from -black to-transparent w-full h-full"></div>
      <motion.video
        ref={videoRef}
        src={`/hero_video_${currentVideo}.webm`}
        onEnded={() => { handleSlider(2) }}
        autoPlay={play}
        muted className='sm:shrink-0 w-full h-full right-0 top-0 object-cover z-10 grayscale opacity-50' />

    </div>
  )
}
