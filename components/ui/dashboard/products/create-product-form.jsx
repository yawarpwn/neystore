'use client'

import { createProduct, saveProduct } from '@/lib/actions/products'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState, useFormStatus } from 'react-dom'
import { SubmitButton } from './submit-button'
import { PreviewProduct } from './preview-product'
import { Card, CardContent } from '../../card'

const initialState = {
  data: null,
  error: null,
}

function CreateProductForm() {
  const [state, dispatch] = useFormState(createProduct, initialState)
  const [productState, saveAction] = useFormState(saveProduct, undefined)
  return (
    <>
      <form className="flex flex-row gap-4 " action={dispatch}>
        <Input name="url" type="text" placeholder="url product" />
        <SubmitButton size="sm">Buscar</SubmitButton>
      </form>
      <div>
        {state.data && (
          <>
            <PreviewProduct product={state.data} />
            <Card>
              <CardContent className="py-8">
                <form action={saveAction} className="flex items-center">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="number"
                      placeholder="Tu precio"
                      name="price"
                      required
                    />
                    <input
                      type="hidden"
                      defaultValue={JSON.stringify(state.data)}
                      name="data"
                    />
                    <select
                      name="category"
                      defaultValue=""
                      aria-labelledby="category"
                      required
                    >
                      <option disabled value="">
                        Categoria
                      </option>
                      <option defaultValue="joy">Juguetes</option>
                      <option defaultValue="tech">Tecnologia</option>
                    </select>
                    <SubmitButton>Agregar </SubmitButton>
                  </div>
                </form>
              </CardContent>
            </Card>
          </>
        )}{' '}
      </div>
    </>
  )
}

export default CreateProductForm
