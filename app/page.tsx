'use client'

import useMeasure from "react-use-measure";
import ContactForm from "./components/contact-form";
import { useLayoutEffect } from "react";

export default function Home() {

  const [ref, bounds] = useMeasure()

  useLayoutEffect(() => {
    if (!document.querySelector('#recaptcha-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_GRECAPTCHA}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, [])

  return (
    <div className="w-full" ref={ref}>
      <ContactForm parent={bounds} />
    </div>
  );
}
