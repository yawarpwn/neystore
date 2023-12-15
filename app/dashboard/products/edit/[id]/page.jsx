import { fetchProductById } from '@/lib/products'
import { PreviewProduct } from '@/components/ui/dashboard/products/preview-product'
import CreateUpdateProduct from '@/components/ui/dashboard/products/create-update-product'
import { updateProduct } from '@/lib/actions/products'

export default async function EditProductPage({ params }) {
  const product = await fetchProductById({ id: params.id })

  return (
    <main className="container">
      <PreviewProduct product={product} />
      <CreateUpdateProduct action={updateProduct} data={product} isEdit />
    </main>
  )
}
