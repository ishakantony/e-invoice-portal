'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { isValidURL } from '@/lib/utils'
import { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'

export default function QrGeneratorPage() {
  const [link, setLink] = useState<string>('')
  const [validUrl, setValidUrl] = useState<string>('')

  useEffect(() => {
    setValidUrl(isValidURL(link) ? link : '')
  }, [link])

  return (
    <div className="max-w-lg mx-auto min-h-screen flex justify-center items-center">
      <Card className="min-w-[500px]">
        <CardHeader>
          <h1 className="text-4xl font-bold text-center">QR Code Generator</h1>
        </CardHeader>
        <CardContent>
          <div className="w-[200px] h-[200px] mx-auto mb-8 border border-dashed rounded-lg flex items-center justify-center">
            {!!validUrl ? (
              <QRCode value="https://einvoice.ishakantony.dev" size={175} />
            ) : (
              <p className="text-xs">Please provide valid URL</p>
            )}
          </div>

          <Input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter link"
          />
        </CardContent>
      </Card>
    </div>
  )
}
