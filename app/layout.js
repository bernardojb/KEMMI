import './globals.css'
import * as React from 'react';
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import SmoothScroll from '@/components/smooth-scroll/SmoothScroll';

//Components
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { metaData } from '@/data/meta-data';

//Setup & Meta
const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: metaData.title,
  description: metaData.description,

  //Basic
  generator: metaData.title,
  applicationName: metaData.title,
  referrer: 'origin-when-cross-origin',
  keywords: metaData.keywords,
  authors: [{ name: 'Bernardo Braga' }, { name: 'Pedro H. Alencar' }, { name: 'hokup', url: 'https://hokup.com.br' }],
  creator: 'hokup',
  publisher: 'hokup',
  themeColor: metaData.themeColor,

  metadataBase: new URL('https://kemmifarma.com'),
  //Open Graph
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.url,
    siteName: metaData.subtitle,
    images: [
      {
        url: metaData.metaImage,
        width: 1200,
        height: 600,
      },
      {
        url: metaData.metaImage,
        width: 1800,
        height: 1600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Header />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
