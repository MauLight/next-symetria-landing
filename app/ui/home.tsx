'use client'

import useMeasure from "react-use-measure"
import ContactForm from "../components/contact-form"

export default function Home() {

    const [ref, bounds] = useMeasure()

    return (
        <div id="scrollTarget" className="w-full" ref={ref}>
            <ContactForm parent={bounds} />
        </div>
    )
}
