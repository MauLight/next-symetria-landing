'use client'

import { useLayoutEffect } from "react"
import Hero from "../ui/hero"
import AwarenessText from "../ui/awareness-text"
import DeveloperHub from "../ui/developerHub"
import MarketplaceApp from "../ui/marketplaceApp"
import ServicesList from "../components/servicesList"
import StackList from "../components/stackList"
import BrandsList from "../components/brandsList"
import Home from "../ui/home"
import KeyPoints from "../ui/key-points"

export default function Page() {

  //const t = useTranslations('Hero')

  useLayoutEffect(() => {
    if (!document.querySelector('#recaptcha-script')) {
      const script = document.createElement('script')
      script.id = 'recaptcha-script'
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_GRECAPTCHA}`
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <>
      {/* Hero part */}
      <Hero />

      {/* Awareness part */}
      <AwarenessText />

      {/* Performant development part */}
      <DeveloperHub />

      <div className="h-[100px]"></div>

      {/* Superior design part */}
      <section className="w-full flex justify-center">
        <div className="w-full max-w-[1440px]">
          <MarketplaceApp />
        </div>
      </section>

      <div className="h-[100px]"></div>

      <ServicesList />

      <div className="h-[100px]"></div>

      <div className="flex flex-col gap-y-44">

        <StackList />

        <BrandsList />

      </div>

      <div className="h-[300px]"></div>

      {/* Key points Access, Optimize and Stand Out */}
      <KeyPoints />

      <div className="h-[200px]"></div>

      <Home />
    </>
  )
}
