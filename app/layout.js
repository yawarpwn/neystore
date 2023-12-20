import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappPop } from '@/components/whatsapp-pop'
import { siteConfig } from '@/config/site'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
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
  twitter: {
    card: 'summary_large_image',
    site: '@eMartiiin94',
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: siteConfig.ogImage,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
          <WhatsappPop />
        </div>
      </body>
    </html>
  )
}
