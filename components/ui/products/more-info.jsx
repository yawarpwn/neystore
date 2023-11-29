import { ChevronDown } from 'lucide-react'
import { TableDetailsProduct } from './table-details'

export function MoreInfoProduct({ product }) {
  const { infoProduct, detailsProduct } = product
  const infoProductArray = Object.entries(infoProduct)
  return (
    <>
      <TableDetailsProduct
        title="Caracteristicas y Especificaciones"
        info={infoProductArray}
      />
    </>
  )
}
