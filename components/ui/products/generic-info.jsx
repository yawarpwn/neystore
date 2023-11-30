import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
export function GenericInfo() {
  return (
    <Card className="bg-card-foreground text-card ">
      <ul className="list-disc p-2.5 text-center">
        <li>Todas las compras son contraentrega.</li>
        <li>7 días hábiles para devolver tu compra.</li>
        <li>Envíos 24/72 horas después de la compra.</li>
      </ul>
    </Card>
  )
}
