import { cn } from '@/lib/utils'
export function PriceProduct({ price, offert, isBig = false }) {
  const getDiscountPercentage = ({ price, offert }) => {
    return Math.round(((price - offert) / price) * 100)
  }

  const discoucountPercent = getDiscountPercentage({ price, offert })

  return (
    <>
      <div className={cn('inline-flex', isBig ? 'gap-4' : 'gap-2')}>
        <span
          className={cn(
            'line-through  text-red-600',
            isBig ? 'text-5xl' : 'text-lg',
          )}
        >
          -{discoucountPercent} %
        </span>
        <span className="">
          <span
            className={cn(
              'relative ',
              isBig ? 'text-xl -top-4' : 'text-xs -top-1',
            )}
          >
            S/
          </span>
          <span className={cn('algin-top', isBig ? 'text-5xl' : 'text-xl')}>
            {offert}
          </span>
          <span
            className={cn(
              'text-xs relative ',
              isBig ? 'text-lg -top-4' : 'text-xs -top-1',
            )}
          >
            00
          </span>
        </span>
      </div>

      <div
        className={cn(
          'text-[11px] text-foreground/50',
          isBig ? 'text-base' : 'text-[11px]',
        )}
      >
        <span>Precio recomendado</span>
        <span className="ml-2 line-through text-foreground/50">
          S/ {price}.00
        </span>
      </div>
    </>
  )
}
