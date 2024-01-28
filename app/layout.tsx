import { cn } from '@/lib/utils'
import { type Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import React from 'react'
import './globals.css'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import { WhatsappPop } from '@/components/whatsapp-pop'
import { siteConfig } from '@/config/site'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
      },
    ],
    locale: 'en-ES',
    type: 'website',
  },
}

export default function RootLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning={true}
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider>
          <div className='relative flex min-h-screen flex-col'>
            <SiteHeader />
            <div className='flex-1'>{children}</div>
            <SiteFooter />
            <WhatsappPop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
