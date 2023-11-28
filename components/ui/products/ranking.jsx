import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons'
export function RankingProduct({ ranking }) {
  const TOTAL_STARS = 5
  const Stars = Array.from({ length: TOTAL_STARS }, (_, index) => {
    return index + 1 < ranking ? (
      <StarFilledIcon className="w-3 h-3" />
    ) : (
      <StarIcon className="w-3 h-3" />
    )
  })

  return <div className="flex gap-1 py-1">{Stars}</div>
}
