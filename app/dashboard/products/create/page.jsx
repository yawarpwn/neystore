import CreateProductForm from '@/components/ui/dashboard/products/create-product-form'

export const metadata = {
  title: 'Crear Producto',
}
function CreatePage() {
  return (
    <main className="container">
      <h1 className="text-3xl font-bold">CreatePage</h1>
      <CreateProductForm />
    </main>
  )
}

export default CreatePage
