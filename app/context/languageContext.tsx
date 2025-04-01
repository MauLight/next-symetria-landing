'use client'

import { usePathname } from "next/navigation"
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useLayoutEffect } from "react"

interface LanguageContextProps {
    language: string
    setLanguage: Dispatch<SetStateAction<string>>
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname()
    const [language, setLanguage] = useState<string>('en')

    useLayoutEffect(() => {
        // Check if the pathname starts with /es
        if (pathname.startsWith("/es")) {
            setLanguage("es")
        } else {
            setLanguage("en")
        }
    }, [pathname])

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }

    return context
}