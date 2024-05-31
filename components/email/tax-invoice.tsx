import QRCode from 'react-qr-code'
import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'
import { Invoice } from '@/data/invoices'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '../ui/table'

type Props = {
  invoice: Invoice
}

export const TaxInvoice = ({ invoice }: Props) => {
  const baseUrl: string = process.env.NEXT_PUBLIC_APP_URL!
  const invoicePublicUrl: string = `${baseUrl}/invoices/${invoice.id}`

  return (
    <Html>
      <Head />
      <Preview>Tax Invoice [{invoice.invoiceNumber}]</Preview>

      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Section>
            <Row>
              <Column>
                <Row>
                  <Column className="w-[80px]">
                    <Img
                      src={`${baseUrl}/logo.svg`}
                      width={72}
                      height={72}
                      alt="logo"
                    />
                  </Column>
                  <Column>
                    <Text className="text-3xl font-extrabold tracking-tight">
                      Test Company
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="text-right">
                <Row>
                  <Text className="text-xl uppercase font-semibold m-0">
                    Tax Invoice
                  </Text>
                </Row>
                <Row className="text-xs">
                  <Column>
                    <Text className="font-bold m-0">Invoice #:</Text>
                  </Column>
                  <Column className="w-[110px]">
                    <Text className="m-0">{invoice.invoiceNumber}</Text>
                  </Column>
                </Row>
                <Row className="text-xs">
                  <Column>
                    <Text className="font-bold m-0">Invoice date:</Text>
                  </Column>
                  <Column className="w-[170px]">
                    <Text className="m-0">{invoice.invoiceDate}</Text>
                  </Column>
                </Row>
              </Column>
              <Column></Column>
            </Row>
          </Section>
          <Section className="mt-6">
            <Row>
              <Column>
                <Row>
                  <Text className="text-lg font-semibold m-0">
                    Provided by:
                  </Text>
                </Row>
                <Row>
                  <Text className="text-xs m-0">Test Company Sdn. Bhd.</Text>
                </Row>
                <Row>
                  <Text className="text-xs m-0">Jalan Emas No. 1</Text>
                </Row>
                <Row>
                  <Text className="text-xs m-0">Kuala Lumpur</Text>
                </Row>
                <Row>
                  <Text className="text-xs m-0">99999</Text>
                </Row>
                <Row>
                  <Text className="text-xs m-0">Malaysia</Text>
                </Row>
              </Column>
              <Column className="text-right">
                <Row>
                  <Text className="text-lg font-semibold m-0">
                    Provided to:
                  </Text>
                </Row>
                <Row>
                  <Text className="text-xs m-0">{invoice.buyerName}</Text>
                </Row>
              </Column>
            </Row>
          </Section>

          <Section className="mt-6">
            <Row className="text-muted-foreground text-center text-sm font-semibold">
              <Column className="w-[30px]">#</Column>
              <Column className="w-[100px]">Name</Column>
              <Column className="w-[50px]">Quantity</Column>
              <Column className="w-[50px] text-right">Price</Column>
              <Column className="w-[50px] text-right">Total</Column>
            </Row>
            <Row className="my-2">
              <Hr />
            </Row>
            {invoice.items.map((item, index) => (
              <Row key={item.id}>
                <Row className="text-center text-sm">
                  <Column className="w-[30px]">{index + 1}</Column>
                  <Column className="w-[100px] text-left pl-8">
                    {item.name}
                  </Column>
                  <Column className="w-[50px] text-left pl-8">
                    {item.quantity}
                  </Column>
                  <Column className="w-[50px] text-right">
                    MYR {item.price}
                  </Column>
                  <Column className="w-[50px] text-right">
                    MYR {item.price * item.quantity}
                  </Column>
                </Row>
                <Row className="my-2">
                  <Hr />
                </Row>
              </Row>
            ))}
          </Section>

          <Section className="mt-6 text-right">
            <QRCode value={invoicePublicUrl} size={100} />
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
