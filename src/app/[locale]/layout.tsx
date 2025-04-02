import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from '@/src/i18n/routing'
import { Metadata } from 'next'
import '../globals.css'
import Topbar from '../components/topbar'

export const metadata: Metadata = {
  title: "Ctlst",
  description: "Define your online presence with superb design and software that delivers real results.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className='bg-black pb-22'>
        <Topbar />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}