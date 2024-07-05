import { TaxInvoice } from '@/components/tax-invoice'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { CodeHighlight } from '@/components/code-highlight'
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Invoice } from '@/data/invoices'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface Props {
  invoice: Invoice
}

export const FailedSample = ({ invoice }: Props) => {
  const jsonCode = `{
  "invoiceNumber": "INV-X8Y7Z6W5",
  "invoiceDate": "2024-05-30T14:26:00Z",
  "buyerName": "Jane Smith",
  "idType": "NRIC",
  "idValue": "990909-99-1234",
  "tin": "1234567"
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
        <cbc:ID schemeID="TIN">1234567</cbc:ID> 
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

  const xmlCodeBeforeConcession = `<cac:PartyIdentification>
  <cbc:ID schemeID="TIN">1234567</cbc:ID> 
</cac:PartyIdentification>`

  const xmlCodeAfterConcession = `<cac:PartyIdentification>
  <cbc:ID schemeID="TIN">E0000000000001</cbc:ID> 
</cac:PartyIdentification>`

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
            <h2 className="font-semibold text-lg">Compliance</h2>
            <Badge variant="destructive" className="capitalize">
              Failed
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <strong>IRBM-ERR-001</strong>: TIN validation failed
                    </p>
                    <p>Applied automatic resolution by using concession</p>
                  </div>
                  <Badge variant="default" className="capitalize">
                    Success
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h1>From</h1>
                    <CodeHighlight
                      code={xmlCodeBeforeConcession}
                      language="xml"
                    />
                  </div>

                  <div>
                    <h1>To</h1>
                    <CodeHighlight
                      code={xmlCodeAfterConcession}
                      language="xml"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      <strong>IRBM-ERR-002</strong>: NRIC validation failed
                    </p>
                    <p>
                      There&apos;s no automatic resolution available, please
                      amend the NRIC manually
                    </p>
                  </div>

                  <Badge variant="secondary" className="capitalize">
                    Pending
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full">Fix</Button>
                  </DialogTrigger>
                  <DialogContent className="pt-8">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="oldNric">Old NRIC</Label>
                      <Input
                        type="text"
                        id="oldNric"
                        placeholder="Old NRIC"
                        value="990909-99-1234"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="newNric">New NRIC</Label>
                      <Input
                        type="text"
                        id="newNric"
                        placeholder="NRIC"
                        autoFocus
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Visual Representation */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">Visual Representation</h2>
              <p>Pending invoice compliance check</p>
            </div>

            <Badge variant="secondary" className="capitalize">
              Pending
            </Badge>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}
