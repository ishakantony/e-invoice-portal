import { Aside } from '@/components/aside'

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <Aside />
      <main className="w-full">{children}</main>
    </div>
  )
}

export default DashboardLayout
