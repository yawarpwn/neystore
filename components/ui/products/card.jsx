import { Button } from '@/components/ui/button'
import { RankingProduct } from './ranking'
import { PriceProduct } from './price'
import Link from 'next/link'

export function ProductCard({ product }) {
  const { title, media, id, ranking } = product
  const imageSrc = media[0].url
  return (
    <div className="p-2">
      <Link href={`/productos/${id}`}>
        {/* Image Card */}
        <div className="min-h-[200px] flex items-center justify-center text-center relative p-0 m-auto">
          <img src={imageSrc} className="p-2 relative z-10" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-200 to-gray-50"></div>
        </div>
        {/* Info Card */}
        <div className="flex flex-col gap-1">
          {/* Title */}
          <div className="leading-[1]">
            <p className="text-truncate text-sm">{title}</p>
          </div>

          {/* Ranking */}
          <RankingProduct ranking={ranking} />

          {/* Offert button  */}
          <div>
            <Button className="h-6 w-16">Oferta</Button>
          </div>

          {/* Price */}
          <PriceProduct />

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
