import { RankingProduct } from './ranking'
import { PriceProduct } from './price'
export function InfoProduct({ product }) {
  const { title, ranking, characteristics, descriptions } = product
  const chars = Object.entries(characteristics)
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">{title}</h1>
      <RankingProduct ranking={ranking} isBig />
      <PriceProduct price={product.price} offert={product.offert} isBig />
      <div className="">
        <table>
          <tbody>
            {chars.map(([key, value]) => (
              <tr className="" key={value}>
                <td className="p-1">
                  <span className="font-bold">{key}</span>
                </td>
                <td className="w-[70%] p-1">
                  <span className="ml-3">{value}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold">Sobre el producto:</h2>
        <ul className="list-disc m-0 p-5">
          {descriptions.map((description) => (
            <li className="py-2" key={description}>
              {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
