import Link from 'next/link'

import { cn } from '@/lib/utils'
// import { CommandMenu } from "@/components/command-menu"
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { buttonVariants } from '@/components/ui/button'
import { FaceIcon } from '@radix-ui/react-icons'
import { FacebookIcon } from 'lucide-react'
import { Logo } from './logo'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex items-center">
            <Link
              // href={siteConfig.links.github}
              href={'#'}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.facebook className="w-5 h-5 fill-current" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={'#'} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.tiktok className="w-5 h-5 fill-current" />
                <span className="sr-only">TikTok</span>
              </div>
            </Link>
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
