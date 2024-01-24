import { fetchProducts } from '@/lib/products'
import { ProductCard } from '@/components/ui/products/card'
import { Button, buttonVariants } from '@/components/ui/button'
import { DeleteProductForm } from '@/components/ui/products/delete-product-form'
import Link from 'next/link'

async function ProductsPage() {
  const products = await fetchProducts()
  return (
    <main className="container">
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {/* {products.map((product) => ( */}
        {/*   <> */}
        {/*     <div className="flex flex-col gap-2"> */}
        {/*       <ProductCard key={product.id} product={product} /> */}
        {/*       <div className="flex justify-evenly"> */}
        {/*         <Link */}
        {/*           className={buttonVariants({ variant: 'outline' })} */}
        {/*           href={`/dashboard/products/edit/${product.id}`} */}
        {/*         > */}
        {/*           Editar */}
        {/*         </Link> */}
        {/*         <DeleteProductForm id={product.id} /> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </> */}
        {/* ))} */}
      </ul>
    </main>
  )
}

export default ProductsPage
