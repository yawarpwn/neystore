import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
export function PreviewProduct({ product }) {
  const {
    title,
    details,
    images,
    features,
    videos,
    amazonPrice,
    slug,
    starts,
  } = product
  return (
    <article>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Titulo: </TableCell>
            <TableCell>{title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>imagenes</TableCell>
            <TableCell>
              <div className="overflow-x-auto">
                <ul className="flex gap-2">
                  {images.map((img) => (
                    <img key={img.hiRes} src={img.thumb} />
                  ))}
                </ul>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Estrellas</TableCell>
            <TableCell>{starts}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Detalles</TableCell>
            <TableCell>Si</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Caracteristicas</TableCell>
            <TableCell>Si</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Precio en Amazon</TableCell>
            <TableCell>S/ {amazonPrice}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Slug</TableCell>
            <TableCell>{slug}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Video</TableCell>
            <TableCell>{videos ? videos.length : 'No'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </article>
  )
}
