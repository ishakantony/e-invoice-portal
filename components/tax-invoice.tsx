import Image from 'next/image'
import { Invoice } from '@/data/invoices'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './ui/table'

type Props = {
  invoice: Invoice
}

export const TaxInvoice = ({ invoice }: Props) => (
  <div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" width={72} height={72} alt="logo" />
        <h2 className="text-3xl font-extrabold tracking-tight">Test Company</h2>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="text-xl uppercase font-semibold">Tax Invoice</h2>
        <p className="text-xs">
          <span className="font-bold">Invoice #:</span> {invoice.invoiceNumber}
        </p>
        <p className="text-xs">
          <span className="font-bold">Invoice date:</span> {invoice.invoiceDate}
        </p>
      </div>
    </div>
    <div className="flex justify-between mt-6">
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-semibold">Provided by:</h2>
        <p className="text-xs">Test Company Sdn. Bhd.</p>
        <p className="text-xs">Jalan Emas No. 1</p>
        <p className="text-xs">Kuala Lumpur</p>
        <p className="text-xs">99999</p>
        <p className="text-xs">Malaysia</p>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="text-lg font-semibold">Provided to:</h2>
        <p className="text-xs">{invoice.buyerName}</p>
      </div>
    </div>
    <div className="mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoice.items.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell className="text-right">MYR {item.price}</TableCell>
              <TableCell className="text-right">
                MYR {item.price * item.quantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
)
