import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import invoices from './invoices'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

const routes = app.route('/invoices', invoices)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes
