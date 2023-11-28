import { cn } from '@/lib/utils'

import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons'
export function RankingProduct({ ranking, isBig }) {
  const TOTAL_STARS = 5
  const Stars = Array.from({ length: TOTAL_STARS }, (_, index) => {
    return index + 1 < ranking ? (
      <StarFilledIcon className={cn(isBig ? 'w-6 h-6' : 'w-3 h-3')} />
    ) : (
      <StarIcon className={cn(isBig ? 'w-6 h-6' : 'w-3 h-3')} />
    )
  })

  return <div className="flex gap-1 py-1">{Stars}</div>
}
