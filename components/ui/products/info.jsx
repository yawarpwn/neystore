import { RankingProduct } from './ranking'
import { PriceProduct } from './price'
export function InfoProduct({ product }) {
  const { title, ranking, characteristics } = product
  const chars = Object.entries(characteristics)
  return (
    <div>
      <h1 className="text-xl">{title}</h1>
      InfoProduct
      <RankingProduct ranking={ranking} />
      <div className="py-4">
        <PriceProduct />
      </div>
      <div className="">
        <table>
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
        </table>
      </div>
    </div>
  )
}
