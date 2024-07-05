import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidURL(url: string): boolean {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      "((([a-zA-Z0-9$\\-_.+!*'(),;:&=]+)(:[a-zA-Z0-9$\\-_.+!*'(),;:&=]+)?@)?" + // authentication
      '((\\d{1,3}\\.){3}\\d{1,3}|([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}))' + // hostname or IP
      '(:\\d+)?' + // port
      '(\\/[-a-zA-Z0-9%_.~+]*)*' + // path
      '(\\?[;&a-zA-Z0-9%_.~+=-]*)?' + // query string
      '(\\#[-a-zA-Z0-9_]*)?$',
    'i' // fragment locator
  )
  return !!pattern.test(url)
}
