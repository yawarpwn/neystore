'use client'
import { useState } from 'react'
import { createProduct } from '@/lib/actions/products'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '../../button'

const initialState = {
  name: '',
  price: '',
  assets: [],
}

function CreateProductForm() {
  const [product, setProduct] = useState(initialState)
  return (
    <form className="flex flex-col gap-4 " action={createProduct}>
      <Label>Url </Label>
      <Input name="url" type="text" placeholder="url product" />
      <Button type="submit">Buscar</Button>
    </form>
  )
}

export default CreateProductForm
