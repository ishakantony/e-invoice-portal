export type ValidationResult = 'valid' | 'invalid'

export interface Item {
  id: string
  name: string
  price: number
  quantity: number
}

export interface Invoice {
  id: string
  invoiceNumber: string
  invoiceDate: string
  buyerName: string
  items: Item[]
  validationResult: ValidationResult
}

export const invoices: Invoice[] = [
  {
    id: 'ckquuefqa000001l2ab9y2jd3',
    invoiceNumber: 'INV-A1B2C3D4',
    invoiceDate: '2024-05-30T14:25:00Z',
    buyerName: 'John Doe',
    items: [
      {
        id: 'item12345',
        name: 'Apple',
        price: 0.5,
        quantity: 10,
      },
      {
        id: 'item67890',
        name: 'Banana',
        price: 0.3,
        quantity: 5,
      },
    ],
    validationResult: 'valid',
  },
  {
    id: 'ckquuefqa000002m3cd3e5fg6h',
    invoiceNumber: 'INV-X8Y7Z6W5',
    invoiceDate: '2024-05-30T14:26:00Z',
    buyerName: 'Jane Smith',
    items: [
      {
        id: 'item54321',
        name: 'Orange',
        price: 0.6,
        quantity: 8,
      },
      {
        id: 'item98765',
        name: 'Grapes',
        price: 2.0,
        quantity: 2,
      },
    ],
    validationResult: 'invalid',
  },
  {
    id: 'ckquuefqa000003n4ef6hi7jk',
    invoiceNumber: 'INV-L4M3N2P1',
    invoiceDate: '2024-05-30T14:27:00Z',
    buyerName: 'Alice Johnson',
    items: [
      {
        id: 'item11111',
        name: 'Milk',
        price: 1.2,
        quantity: 3,
      },
      {
        id: 'item22222',
        name: 'Bread',
        price: 1.0,
        quantity: 4,
      },
    ],
    validationResult: 'valid',
  },
  {
    id: 'ckquuefqa000004o5gh7ij8kl',
    invoiceNumber: 'INV-Q1R2S3T4',
    invoiceDate: '2024-05-30T14:28:00Z',
    buyerName: 'Bob Brown',
    items: [
      {
        id: 'item33333',
        name: 'Eggs',
        price: 2.5,
        quantity: 1,
      },
      {
        id: 'item44444',
        name: 'Cheese',
        price: 3.0,
        quantity: 2,
      },
    ],
    validationResult: 'invalid',
  },
  {
    id: 'ckquuefqa000005p6ij8kl9mn',
    invoiceNumber: 'INV-U7V8W9X0',
    invoiceDate: '2024-05-30T14:29:00Z',
    buyerName: 'Charlie Davis',
    items: [
      {
        id: 'item55555',
        name: 'Chicken',
        price: 5.0,
        quantity: 2,
      },
      {
        id: 'item66666',
        name: 'Beef',
        price: 7.0,
        quantity: 1,
      },
    ],
    validationResult: 'valid',
  },
]
