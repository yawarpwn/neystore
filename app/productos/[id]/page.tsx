import { ProductSkeleton } from "@/components/skeletons/product";
import { ProductsSkeleton } from "@/components/skeletons/products";
import { Breadcrumbs } from "@/components/ui/breadcrumbs/index";
import { CarouselProducts } from "@/components/ui/products/carousel";
import { InfoProduct } from "@/components/ui/products/info";
import { ProductViewer } from "@/components/ui/products/product-viewer";
import { siteConfig } from "@/config/site";
import { fetchProductById, fetchProducts } from "@/lib/products";
import { Suspense } from "react";

export async function generateMetadata({ params }: { params: { id?: string } }) {
  const product = await fetchProductById(params.id);

  const [title] = product.title.split(",");
  const description = product.title;
  const ogImageUrl = product.images[0].url;
  const ogUrl = `${siteConfig.url}/productos/${product.id}`;

  return {
    metadataBase: new URL("https://m.media-amazon.com"),
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: ogUrl,
      siteName: siteConfig.name,
      images: [ogImageUrl],
    },
  };
}

async function CarouselProductsServer() {
  const products = await fetchProducts();
  return (
    <CarouselProducts
      products={products}
      title="Productos similares sugeridos"
    />
  );
}

async function ViewProductServer({ id }: { id: string }) {
  const product = await fetchProductById(id);
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
      <ProductViewer
        title={product.title}
        images={product.images}
        video={product.video}
      />
      <InfoProduct product={product} />
    </div>
  );
}

async function ProductPage({ params }: { params?: { id?: string } }) {
  const id = params?.id;

  return (
    <main className="container max-w-5xl">
      <Breadcrumbs
        breadcrumbs={[
          {
            title: "Inicio",
            href: "/",
          },
          {
            title: "Productos",
            href: "/productos",
          },
          {
            title: "producto",
            active: true,
          },
        ]}
      />
      <Suspense fallback={<ProductsSkeleton />}>
        <ViewProductServer id={id} />
      </Suspense>
      <CarouselProductsServer />
      {/* <GenericInfo /> */}
    </main>
  );
}

export default ProductPage;
