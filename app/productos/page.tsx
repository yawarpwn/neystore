import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductCard } from "@/components/ui/products/card";
import { fetchProducts } from "@/lib/products";

export const metadata = {
  title: "Productos",
};

async function ProductPage() {
  const products = await fetchProducts();
  return (
    <main className="container relative">
      <Breadcrumbs
        breadcrumbs={[
          {
            title: "Inicio",
            href: "/",
          },
          {
            title: "Productos",
            active: true,
          },
        ]}
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}

export default ProductPage;
