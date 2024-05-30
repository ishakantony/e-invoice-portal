import { InferResponseType } from 'hono'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { client } from '@/lib/hono'
import { toast } from 'sonner'

type ResponseType = InferResponseType<
  (typeof client.api.invoices)[':id']['send-email']['$post']
>
type RequestType = string

export const useSendEmail = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (id: string) => {
      const response = await client.api.invoices[':id']['send-email'].$post({
        param: { id },
      })
      return await response.json()
    },
    onSuccess: () => {
      toast.success('Email sent!')
    },
    onError: () => {
      toast.error('Failed to send email!')
    },
  })

  return mutation
}
