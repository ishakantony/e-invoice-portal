import { Card, CardHeader, CardContent } from '@/components/ui/card'

export default function Dashboard() {
  return (
    <div className="max-w-screen-2xl mx-auto flex items-center justify-center min-h-full">
      <Card className="border-none drop-shadow-sm">
        <CardHeader>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Features Overview
          </h1>
        </CardHeader>
        <CardContent>
          <div>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              View Invoices
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              See invoices available in the system in table view. You can also
              view individual invoices by clicking the &quot;View&quot; button.
              In order to do this, you must be authenticated. Simply login to
              authenticate yourself. Obviously you have logged in before this,
              otherwise you won&apos;t be able to see this page 😆.
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              View Individual Invoice
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              In the invoice itself, there&apos;s a QR code, you can scan it and
              it will redirect you to the public version of the invoice. This
              public version does not require you to login.
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Send Invoice via Email
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              In the invoices table, you can see a &quot;Email Me&quot; button
              that will send the invoice to your email. The email address will
              use the email address that you use to login to this platform.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
