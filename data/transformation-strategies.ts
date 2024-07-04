export interface TransformationStrategy {
  id: number
  code: string
  name: string
}

export const transformationStrategies: TransformationStrategy[] = [
  {
    id: 1,
    code: 'XYZ-JSON-v1',
    name: 'XYZ JSON Transformer V1',
  },
  {
    id: 2,
    code: 'Z-XML-v1',
    name: 'Z XML Transformer V1',
  },
  {
    id: 1,
    code: 'Local-CSV-v1',
    name: 'Local CSV File Transformer V1',
  },
]
