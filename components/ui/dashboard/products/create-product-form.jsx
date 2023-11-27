'use client'
import { useState } from 'react'
import { createProduct } from '@/actions/products'

const initialState = {
  name: '',
  price: '',
  assets: [],
}

function CreateProductForm() {
  const [product, setProduct] = useState(initialState)
  return (
    <form className="flex flex-col gap-4 " action={createProduct}>
      <input placeholder="name" required name="name" />
      <input placeholder="10" required name="price" />
      <input type="text" required name="image_url_1" placeholder="imagen 1" />
      <input type="text" name="image_url_2" placeholder="imagen 2" />
      <input type="text" name="image_url_3" placeholder="imagen 3" />
      <input type="text" name="image_url_4" placeholder="imagen 4" />
      <input type="text" name="video_url" placeholder="video url" />
      <button>Enviar</button>
    </form>
  )
}

export default CreateProductForm
