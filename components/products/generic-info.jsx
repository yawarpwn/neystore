import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
export function GenericInfo() {
  return (
    <Card className="bg-card-foreground text-card ">
      <ul className=" p-2.5 text-center">
        <li>Todas las compras en Lima son contraentrega.</li>
        <li>Envío por agencia sugerida a nivel nacional </li>
        <li>7 días hábiles para devolver tu compra.</li>
        <li>Envíos en 24H una vez aceptada la compra.</li>
      </ul>
    </Card>
  )
}
