import { ChevronDown } from 'lucide-react'
import { TableDetailsProduct } from './table-details'

export function MoreInfoProduct({ product }) {
  const { infoProduct, detailsProduct } = product
  const infoProductArray = Object.entries(infoProduct)
  const detailsProductArray = Object.entries(detailsProduct)
  return (
    <>
      <TableDetailsProduct
        title="Caracteristicas y Especificaciones"
        info={infoProductArray}
      />
      <TableDetailsProduct
        title="Detalles del producto"
        info={detailsProductArray}
      />
    </>
  )
}
