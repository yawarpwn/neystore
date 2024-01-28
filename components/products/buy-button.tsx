import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
interface Props {
  title: string;
  id: string;
}
export function BuyButton({ title, id }: Props) {
  const url = `${siteConfig.url}/productos/${id}`;
  const message = `Hola, estoy interesado en adquirir ${title}, con enlace  ${url}`;
  const href = `https://wa.me/51971531018?text=${message}`;
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
  );
}
