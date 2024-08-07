'use client'

import { TaxInvoice } from '@/components/tax-invoice'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { invoices } from '@/data/invoices'
import { useConfirm } from '@/hooks/use-confirm'
import { useSendEmail } from '@/hooks/use-send-email'
import Link from 'next/link'
import { toast } from 'sonner'

export default function InvoicesPage() {
  const sendEmailMutation = useSendEmail()
  const [ConfirmDialog, confirm] = useConfirm(
    'You will receive an email',
    "This invoice will be sent to your email. If you couldn't find it in your inbox, please do check the same folder."
  )

  const isPending = sendEmailMutation.isPending

  const handleEmailMe = async (id: string) => {
    const ok = await confirm()

    if (ok) {
      sendEmailMutation.mutate(id)
    }
  }

  return (
    <>
      <ConfirmDialog />
      <div className="max-w-screen-2xl mx-auto flex justify-center min-h-full">
        <Card className="border-none drop-shadow-sm w-full">
          <CardHeader>
            <h1 className="text-4xl font-extrabold tracking-tight">Invoices</h1>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Invoice #</TableHead>
                  <TableHead>Buyer</TableHead>
                  <TableHead className="w-[150px]">Result</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="w-[200px] text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">
                      {invoice.invoiceNumber}
                    </TableCell>
                    <TableCell>{invoice.buyerName}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          invoice.validationResult === 'valid'
                            ? 'default'
                            : 'destructive'
                        }
                        className="capitalize"
                      >
                        {invoice.validationResult}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      MYR{' '}
                      {invoice.items.reduce((total, item) => {
                        return total + item.price * item.quantity
                      }, 0)}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2 justify-center">
                        <Link href={`/invoices/${invoice.invoiceNumber}`}>
                          <Button size="sm">View</Button>
                        </Link>
                        <Button
                          disabled={isPending}
                          onClick={() => {
                            handleEmailMe(invoice.id)
                          }}
                          size="sm"
                          variant="outline"
                        >
                          Email Me
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
