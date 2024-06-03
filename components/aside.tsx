import { HeaderLogo } from './header-logo'
import { Me } from './me'
import { Navigation } from './navigation'

export const Aside = () => {
  return (
    <aside className="min-h-screen w-[75px] lg:w-[300px] bg-foreground text-background p-4">
      <div className="h-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center lg:gap-x-16">
          <HeaderLogo />
          <Navigation />
        </div>
        <Me />
      </div>
    </aside>
  )
}
