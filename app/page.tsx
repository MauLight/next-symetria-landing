'use client'

import useMeasure from "react-use-measure";
import ContactForm from "./components/contact-form";
import { useEffect } from "react";

export default function Home() {

  const [ref, bounds] = useMeasure()

  useEffect(() => {
    if (!document.querySelector('#recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_GRECAPTCHA}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [])

  return (
    <div className="w-full min-h-screen" ref={ref}>
      <ContactForm parent={bounds} />
    </div>
  );
}
