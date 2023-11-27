import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ProductCard({ product }) {
  const { title, media, id } = product
  const imageSrc = media[0].url
  return (
    <div className="table-cell p-2">
      <Link href={`/products/${id}`}>
        {/* Image Card */}
        <div className="min-h-[200px] flex items-center justify-center text-center relative p-0 m-auto">
          <img src={imageSrc} className="p-2 relative z-10" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-200 to-gray-50"></div>
        </div>
        {/* Info Card */}
        <div className="border flex flex-col gap-1">
          {/* Title */}
          <div className="leading-[1]">
            <p className="text-truncate text-sm">{title}</p>
          </div>

          {/* Ranking */}
          <div>starts</div>

          {/* Offert button  */}
          <div>
            <Button className="h-6 w-16" variant="destructive">
              Oferta
            </Button>
          </div>

          {/* Price */}
          <div className="inline-flex gap-2">
            <span className="line-through text-lg text-red-600">-23 %</span>
            <span className="">
              <span className="text-xs relative -top-1">S/</span>
              <span className="algin-top text-lg ">269</span>
              <span className="text-xs relative -top-1">00</span>
            </span>
          </div>

          {/* Recommend Price */}
          <div className="text-[11px] text-foreground/50">
            <span>Precio recomendado</span>
            <span className="ml-2 line-through text-foreground/80">
              S/ 50.00
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
