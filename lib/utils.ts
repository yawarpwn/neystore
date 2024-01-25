import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberToLocal(num: number) {
  return new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" }).format(num);
}

export function slugify(value: string, maxLength: number) {
  // Convertir a minúsculas
  value = value.toLowerCase();

  // Eliminar acentos
  value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Reemplazar espacios con guiones
  value = value.replace(/\s+/g, "-");

  // Eliminar caracteres no válidos
  value = value.replace(/[^a-z0-9\s-_]/g, "");

  // Eliminar guiones y guiones bajos al final
  value = value.replace(/[-_]+$/g, "");

  // Reemplazar ocurrencias dobles de guiones o guiones bajos
  value = value.replace(/([-_]){2,}/g, "$1");

  return maxLength ? value.substring(0, maxLength) : value;
}

export function getOriginalPrice(currentPrice: number) {
  const randomPorcent = Math.floor(Math.random() * (20 - 10) + 10);
  return currentPrice + (currentPrice * randomPorcent) / 100;
}
