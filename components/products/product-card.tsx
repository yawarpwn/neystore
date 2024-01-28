import { ProductPrice } from '@/components/products/product-price'
import { ProductRanking } from '@/components/products/product-ranking'
import { type Product } from '@/types'
import Link from 'next/link'

interface Props {
  product: Product
}
export function ProductCard(props: Props) {
  const { title, price, id, images, ranking } = props.product
  const imageSrc = images[0].url

  return (
    <div className='p-2'>
      <Link href={`/productos/${id}`}>
        {/* Image Card */}
        <div className='h-0 pb-[100%] relative mb-2.5'>
          <img
            src={imageSrc}
            className='absolute inset-0 z-10 object-contain w-full h-full p-2'
          />
          <div className='absolute inset-0 w-full bg-[#fff] rounded-[8px]'>
          </div>
        </div>
        {/* Info Card */}
        <div className='flex flex-col gap-1'>
          {/* Title */}
          <div className='leading-[1]'>
            <p className='text-truncate text-sm'>{title}</p>
          </div>

          {/* Ranking */}
          <ProductRanking ranking={ranking} />

          {/* Price */}
          <ProductPrice price={price} />
        </div>
      </Link>
    </div>
  )
}
