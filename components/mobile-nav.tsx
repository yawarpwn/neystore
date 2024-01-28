'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { docsConfig } from '@/config/docs'
import { cn } from '@/lib/utils'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { Logo } from './logo'

import { SocialIcons } from './social-icons'
import { ThemeToggle } from './theme-toggle'

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <HamburgerMenuIcon className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <MobileLink
          href='/'
          className='flex items-center'
          onOpenChange={setOpen}
        >
          <Logo />
        </MobileLink>
        <div className='h-[calc(100vh-10rem)]  flex flex-col justify-between pt-4'>
          <div className=' flex flex-col space-y-3'>
            {docsConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.title}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                ),
            )}
          </div>
          <div className='flex justify-between items-center'>
            <SocialIcons />
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink(
  { href, onOpenChange, className, children, ...props }: MobileLinkProps,
) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
