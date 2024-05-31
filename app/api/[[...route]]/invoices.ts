import { Hono } from 'hono'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { Resend } from 'resend'
import { invoices } from '@/data/invoices'
import { TaxInvoice } from '@/components/email/tax-invoice'

const app = new Hono().post(
  '/:id/send-email',
  clerkMiddleware(),
  zValidator(
    'param',
    z.object({
      id: z.string().optional(),
    })
  ),
  async (c) => {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const auth = getAuth(c)
    const { id } = c.req.valid('param')

    if (!auth?.userId) {
      return c.json({ error: 'Unauthorized' }, 401)
    }

    if (!id) {
      return c.json({ error: 'Missing id' }, 400)
    }

    const invoice = invoices.find((inv) => inv.id === id)

    if (!invoice) {
      return c.json({ error: 'Invoice not found' }, 404)
    }

    const email: string = auth.sessionClaims?.email as string

    if (!email) {
      return c.json({ error: 'Missing email address' }, 400)
    }

    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : ''

    const { data, error } = await resend.emails.send({
      from: 'DO NOT REPLY <noreply@ishakantony.dev>',
      to: email,
      subject: `e-Invoice [${invoice.invoiceNumber}]`,
      react: TaxInvoice({ invoice }),
    })

    if (error) {
      console.error(error)
      return c.json({ error: 'Something went wrong while sending email' }, 500)
    }

    return c.json({ data })
  }
)

export default app
