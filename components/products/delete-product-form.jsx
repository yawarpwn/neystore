'use client'

import { Button } from '@/components/ui/button'
import { deleteProduct } from '@/lib/actions/products'
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button variant="destructive" disabled={pending}>
      {pending ? 'Eliminando...' : 'Eliminar'}
    </Button>
  )
}

export function DeleteProductForm({ id }) {
  return (
    <form action={deleteProduct}>
      <input type="hidden" name="id" value={id} required />
      <SubmitButton />
    </form>
  )
}
