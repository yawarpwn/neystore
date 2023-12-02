import { siteConfig } from '@/config/site'
import { Button, buttonVariants } from '../button'
import { Icons } from '@/components/icons'
import Link from 'next/link'
export function BuyButton({ title, id, slug }) {
  const url = `${siteConfig.url}/productos/${slug}`
  const message = `Hola, estoy interesado en adquirir ${title}, con enlace  ${url}`
  const href = `https://wa.me/51971531018?text=${message}`
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={buttonVariants()}
    >
      Comprar por whatsapp
      <Icons.whatsapp className="ml-4" />
    </a>
  )
}
