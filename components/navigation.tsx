'use client'

import { usePathname, useRouter } from 'next/navigation'
import { NavButton } from './nav-button'
import { useState } from 'react'
import { useMedia } from 'react-use'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/invoices',
    label: 'Invoices',
  },
]

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const pathname = usePathname()
  const router = useRouter()
  const isMobile = useMedia('(max-width: 1024px)', false)

  const onClick = (href: string) => {
    router.push(href)
    setIsOpen(false)
  }

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                variant={route.href === pathname ? 'secondary' : 'ghost'}
                key={route.href}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav className="hidden mt-10 lg:flex flex-col items-center gap-y-2 overflow-y-auto w-full">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  )
}
