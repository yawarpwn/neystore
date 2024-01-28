import { type Product } from "@/types";
import { BuyButton } from "./buy-button";
import { ProductPrice } from "./product-price";
import { ProductRanking } from "./product-ranking";

function TableInfo({ details }: { details: Record<string, string> }) {
  const infoArray = Object.entries(details);
  return (
    <div className="">
      <table>
        <tbody>
          {infoArray.map(([key, value], index) => (
            <tr className="" key={index}>
              <td className="p-1">
                <span className="font-bold">{key}</span>
              </td>
              <td className="w-[50%] p-1">
                <span className="ml-3">{value}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function ProductInfo({ product }: { product: Product }) {
  const { title, features, details, price, ranking, id } = product;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">{title}</h1>
      <ProductRanking ranking={ranking} isBig />
      <ProductPrice price={price} isBig />
      {details && <TableInfo details={details} />}
      <BuyButton id={id} title={title} />
      <div className="">
        <h2 className="text-2xl font-bold">Sobre el producto:</h2>
        <ul className="list-disc m-0 p-5">
          {features.map((description, index) => (
            <li className="py-2" key={index}>
              {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
