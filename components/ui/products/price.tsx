import { cn } from "@/lib/utils";
import { formatNumberToLocal } from "@/lib/utils";
interface Props {
  price: number;
  isBig?: boolean;
}
export function PriceProduct({ price, isBig = false }: Props) {
  const getDiscountPercentage = ({ price, offert }) => {
    return Math.round(((price - offert) / price) * 100);
  };
  const formatedPrice = formatNumberToLocal(price);

  return (
    <>
      <div className={cn("inline-flex", isBig ? "gap-4" : "gap-2")}>
        {/* <span */}
        {/*   className={cn( */}
        {/*     'line-through  text-red-600', */}
        {/*     isBig ? 'text-5xl' : 'text-lg', */}
        {/*   )} */}
        {/* > */}
        {/*   -{discoucountPercent} % */}
        {/* </span> */}
        <span className="">
          <span className={cn("algin-top", isBig ? "text-5xl" : "text-xl")}>
            {formatedPrice}
          </span>
          {/* <span */}
          {/*   className={cn( */}
          {/*     'text-xs relative ', */}
          {/*     isBig ? 'text-lg -top-4' : 'text-xs -top-1', */}
          {/*   )} */}
          {/* > */}
          {/*   00 */}
          {/* </span> */}
        </span>
      </div>

      {/* Precio recomendando */}
      {/* <div */}
      {/*   className={cn( */}
      {/*     'text-[11px] text-foreground/50', */}
      {/*     isBig ? 'text-base' : 'text-[11px]', */}
      {/*   )} */}
      {/* > */}
      {/*   <span>Precio recomendado</span> */}
      {/*   <span className="ml-2 line-through text-foreground/50"> */}
      {/*     S/ {price}.00 */}
      {/*   </span> */}
      {/* </div> */}
    </>
  );
}
