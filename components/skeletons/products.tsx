import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="p-2">
      {/* Image Card */}
      <Skeleton className="h-40 w-[160px] mb-2" />
      {/* Info Card */}
      <div className="flex flex-col gap-1">
        {/* Title */}
        <Skeleton className="w-40 h-8" />
        {/* Ranking */}
        <Skeleton className="w-40 h-4" />
        {/* Price */}
        <Skeleton className="w-40 h-4" />
      </div>
    </div>
  );
}
export function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
      {Array.from({ length: 24 }).map((_, index) => <ProductCardSkeleton key={index} />)}
    </div>
  );
}
