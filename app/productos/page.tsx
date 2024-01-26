import { ProductsSkeleton } from "@/components/skeletons/products";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductCard } from "@/components/ui/products/card";
import { fetchProducts } from "@/lib/products";
import { Suspense } from "react";

export const metadata = {
  title: "Productos",
};

async function ProductosList() {
  const products = await fetchProducts();
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}

async function ProductPage() {
  return (
    <main className="container max-w-5xl relative">
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
      <Suspense fallback={<ProductsSkeleton />}>
        <ProductosList />
      </Suspense>
    </main>
  );
}

export default ProductPage;
