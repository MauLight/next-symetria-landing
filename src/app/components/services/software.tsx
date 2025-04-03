import React from 'react'
import { ReactTyped } from 'react-typed'
import ServiceVignette from './service-vignette'

export default function Software() {
    return (
        <>
            <ServiceVignette />
            <div className='absolute w-full scale-120 h-full flex flex-col items-between opacity-80'>
                <ReactTyped loop backSpeed={20} backDelay={6000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={100} strings={['const saas = 1 + 1']} typeSpeed={20} />
                <ReactTyped loop backSpeed={20} backDelay={7200} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={1200} strings={['if (saas === 2) { setSuccess(true) }']} typeSpeed={20} />
                <ReactTyped loop backSpeed={20} backDelay={10000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={2500} strings={['else { setSuccess(false) }']} typeSpeed={20} />
                <br />
                <ReactTyped loop backSpeed={20} backDelay={13500} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={3500} strings={['const ctlst = yourBusiness.filter((service) => !service.painpoints)']} typeSpeed={20} />
                <br />
                <ReactTyped loop backSpeed={20} backDelay={19000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={5500} strings={['useEffect(() => { if (window.revenue) { setHappyCustomer(true) } }, [])']} typeSpeed={20} />

                <ReactTyped loop backSpeed={20} backDelay={6000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={100} strings={['const ctlst = yourBusiness.filter((service) => !service.painpoints)']} typeSpeed={20} />
                <ReactTyped loop backSpeed={20} backDelay={7200} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={1200} strings={['useEffect(() => { if (window.revenue) { setHappyCustomer(true) } }, [])']} typeSpeed={20} />
                <ReactTyped loop backSpeed={20} backDelay={10000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={2500} strings={['else { setSuccess(false) }']} typeSpeed={20} />
                <br />
                <ReactTyped loop backSpeed={20} backDelay={13500} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={3500} strings={['const saas = 1 + 1']} typeSpeed={20} />
                <br />
                <ReactTyped loop backSpeed={20} backDelay={19000} showCursor={false} className={`text-[1rem] text-balance text-indigo-500 font-mono`} startDelay={5500} strings={['if (saas === 2) { setSuccess(true) }']} typeSpeed={20} />
            </div>
        </>
    )
}
