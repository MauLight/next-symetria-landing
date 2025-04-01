import { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "./context/languageContext";

export const metadata: Metadata = {
  title: "Ctlst",
  description: "Define your online presence with superb design and software that delivers real results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-black pb-22'>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
