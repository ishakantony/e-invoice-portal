'use client'

import { TaxInvoice } from '@/components/tax-invoice'
// import { TaxInvoice } from '@/components/email/tax-invoice'
import { Card } from '@/components/ui/card'
import { invoices } from '@/data/invoices'
import { useParams } from 'next/navigation'

export default function InvoicePage() {
  const params = useParams<{ id: string }>()
  const { id } = params
  const invoice = invoices.find((inv) => inv.id === id)

  if (!invoice) {
    return <p>Invoice not found</p>
  }

  return (
    <div className="max-w-screen-2xl flex justify-center items-center min-h-screen mx-auto">
      <Card className="border-none drop-shadow-sm min-w-[700px] p-6">
        <TaxInvoice invoice={invoice} />
      </Card>
    </div>
  )
}
