'use client'

import { ClerkLoaded, ClerkLoading, UserButton, useUser } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import { Skeleton } from './ui/skeleton'
import { useMedia } from 'react-use'

export const Me = () => {
  const { user, isLoaded } = useUser()
  const isMobile = useMedia('(max-width: 1024px)', false)

  if (isMobile) {
    return (
      <>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="size-8 animate-spin text-slate-400" />
        </ClerkLoading>
      </>
    )
  }

  return (
    <>
      <ClerkLoaded>
        <div className="flex gap-2 items-center w-full">
          <UserButton afterSignOutUrl="/" />
          <span className="text-sm">{user?.fullName}</span>
        </div>
      </ClerkLoaded>
      <ClerkLoading>
        <div className="flex gap-2 items-center">
          <Loader2 className="size-8 animate-spin text-slate-400" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-2 w-24" />
            <Skeleton className="h-2 w-32" />
          </div>
        </div>
      </ClerkLoading>
    </>
  )
}
