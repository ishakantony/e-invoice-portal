export interface Problem {
  id: number
  code: string
  name: string
}

export const problems: Problem[] = [
  {
    id: 1,
    code: 'IRBM-ERR-001',
    name: "Invalid Buyer's TIN",
  },
  {
    id: 2,
    code: 'IRBM-ERR-002',
    name: "Invalid Buyer's ID VALUE",
  },
  {
    id: 3,
    code: 'IRBM-ERR-003',
    name: 'Duplicated Invoice Number',
  },
]
