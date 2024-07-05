import { TaxInvoice } from '@/components/tax-invoice'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { CodeHighlight } from '@/components/code-highlight'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Invoice } from '@/data/invoices'

interface Props {
  invoice: Invoice
}

export const SuccessSample = ({ invoice }: Props) => {
  const jsonCode = `{
  "invoiceNumber": "INV-X8Y7Z6W5",
  "invoiceDate": "2024-05-30T14:26:00Z",
  "buyerName": "Jane Smith",
  "idType": "NRIC",
  "idValue": "990909-99-1234"
}`

  const xmlCode = `<Invoice xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" 
xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" 
xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
  <cbc:ID>INV-X8Y7Z6W5</cbc:ID> 
  <cbc:IssueDate>2024-05-30</cbc:IssueDate> 
  <cbc:IssueTime>14:26:00Z</cbc:IssueTime> 
  <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode> 
  <cbc:DocumentCurrencyCode>MYR</cbc:DocumentCurrencyCode> 
  <cac:AccountingCustomerParty> 
    <cac:Party>
      <cac:PartyIdentification>
        <cbc:ID schemeID="TIN">NA</cbc:ID> 
      </cac:PartyIdentification>
      <cac:PartyIdentification>
        <cbc:ID schemeID="NRIC">990909-99-1234</cbc:ID> 
      </cac:PartyIdentification>
      <cac:PartyIdentification>
        <cbc:ID schemeID="SST">NA</cbc:ID>
      </cac:PartyIdentification>
    </cac:Party> 
  </cac:AccountingCustomerParty> 
</Invoice>`

  return (
    <div className="max-w-screen-2xl flex flex-col justify-center mx-auto gap-4 py-6">
      {/* Header */}
      <Card className="p-4 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" width={72} height={72} alt="logo" />
            <h2 className="text-3xl font-extrabold tracking-tight">
              Test Company
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <h2 className="text-xl uppercase font-semibold">Tax Invoice</h2>
            <p className="text-xs">
              <span className="font-bold">Invoice #:</span>{' '}
              {invoice.invoiceNumber}
            </p>
            <p className="text-xs">
              <span className="font-bold">Invoice date:</span>{' '}
              {invoice.invoiceDate}
            </p>
          </div>
        </div>
      </Card>

      {/* Transformation */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg">Transformation</h2>
            <Badge variant="default" className="capitalize">
              Success
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <h1>From</h1>
              <CodeHighlight code={jsonCode} language="json" />
            </div>

            <div className="w-full">
              <h1>To</h1>
              <CodeHighlight code={xmlCode} language="xml" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">Compliance</h2>
              <p>Invoice successfully validated by IRBM without any issue</p>
            </div>
            <Badge variant="default" className="capitalize">
              Success
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Visual Representation */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">Visual Representation</h2>
              <p>
                Invoice successfully converted to visual representation with QR
                Code
              </p>
            </div>

            <Badge variant="default" className="capitalize">
              Success
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">View</Button>
            </DialogTrigger>
            <DialogContent className="min-w-[700px] pt-8">
              <TaxInvoice invoice={invoice} />
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}
