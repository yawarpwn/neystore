'use client'

import { createProduct, saveProduct } from '@/lib/actions/products'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState, useFormStatus } from 'react-dom'
import { SubmitButton } from './submit-button'
import { PreviewProduct } from './preview-product'
import CreateUpdateProduct from './create-update-product'

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
            <CreateUpdateProduct action={saveAction} data={state.data} isEdit />
          </>
        )}
      </div>
    </>
  )
}

export default CreateProductForm
