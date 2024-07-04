'use client'

import { TaxInvoice } from '@/components/tax-invoice'
// import { TaxInvoice } from '@/components/email/tax-invoice'
import { Card } from '@/components/ui/card'

import { invoices } from '@/data/invoices'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { CodeHighlight } from '@/components/code-highlight'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { SuccessSample } from './success-sample'
import { FailedSample } from './failed-sample'

export default function InvoicePage() {
  const params = useParams<{ invoiceNumber: string }>()
  const { invoiceNumber } = params
  const invoice = invoices.find((inv) => inv.invoiceNumber === invoiceNumber)

  if (!invoice) {
    return <p>Invoice not found</p>
  }

  if (invoice.validationResult === 'valid') {
    return <SuccessSample invoice={invoice} />
  } else if (invoice.validationResult === 'invalid') {
    return <FailedSample invoice={invoice} />
  } else {
    return <p>Unknown validation result</p>
  }
}
