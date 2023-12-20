import { RankingProduct } from './ranking'
import { PriceProduct } from './price'
import { BuyButton } from './buy-button'
import { getOriginalPrice } from '@/lib/utils'

function TableInfo({ info }) {
  const infoArray = Object.entries(info)
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
  )
}
export function InfoProduct({ product }) {
  const { title, features, details, slug, price, starts } = product
  const originalPrice = getOriginalPrice(price)
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">{title}</h1>
      <RankingProduct ranking={starts} isBig />
      <PriceProduct price={originalPrice} offert={product.price} isBig />
      {details && <TableInfo info={details} />}
      <BuyButton slug={slug} title={title} />
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
  )
}
