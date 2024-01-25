import { Breadcrumbs } from "@/components/ui/breadcrumbs/index";
import { CarouselProducts } from "@/components/ui/products/carousel";
import { InfoProduct } from "@/components/ui/products/info";
import { ViewerProduct } from "@/components/ui/products/viewer";
import { siteConfig } from "@/config/site";
import { fetchProductById, fetchProducts } from "@/lib/products";

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

async function ProductPage({ params }: { params?: { id?: string } }) {
  const products = await fetchProducts();
  const product = await fetchProductById(params.id);
  const [slug] = product.title.split(",");

  return (
    <main className="container">
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
            title: slug,
            active: true,
          },
        ]}
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        <ViewerProduct
          title={product.title}
          images={product.images}
          video={product.video}
        />
        <InfoProduct product={product} />
      </div>
      <CarouselProducts
        products={products}
        title="Productos similares sugeridos"
      />
      {/* <GenericInfo /> */}
    </main>
  );
}

export default ProductPage;
