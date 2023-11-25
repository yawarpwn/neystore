import { createProduct } from '@/actions/products'

function CreatePage() {
  return (
    <div>
      CreatePage
      <form action={createProduct}>
        <input placeholder="name" name="name" />
        <input type="file" name="image" />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default CreatePage
