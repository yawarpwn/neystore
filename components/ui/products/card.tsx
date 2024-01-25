import { type Product } from "@/types";
import Link from "next/link";
import { PriceProduct } from "./price";
import { RankingProduct } from "./ranking";

interface Props {
  product: Product;
}
export function ProductCard(props: Props) {
  const { title, price, id, images, ranking } = props.product;
  const imageSrc = images[0].url;

  return (
    <div className="p-2">
      <Link href={`/productos/${id}`}>
        {/* Image Card */}
        <div className="h-0 pb-[100%] relative mb-2.5">
          <img
            src={imageSrc}
            className="absolute inset-0 z-10 object-contain w-full h-full p-2"
          />
          <div className="absolute inset-0 w-full bg-[rgba(15_17_17/0.01)] rounded-[8px]"></div>
        </div>
        {/* Info Card */}
        <div className="flex flex-col gap-1">
          {/* Title */}
          <div className="leading-[1]">
            <p className="text-truncate text-sm">{title}</p>
          </div>

          {/* Ranking */}
          <RankingProduct ranking={ranking} />

          {/* Price */}
          <PriceProduct price={price} />
        </div>
      </Link>
    </div>
  );
}