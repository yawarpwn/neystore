import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-80 md:w-[500px] h-80 md:h-[500px]" />
        {/* Thumbs Swiper */}
        <div className="w-full flex gap-2">
          <Skeleton className="w-16 h-16" />
          <Skeleton className="w-16 h-16" />
          <Skeleton className="w-16 h-16" />
          <Skeleton className="w-16 h-16" />
          <Skeleton className="w-16 h-16" />
        </div>
      </div>
      <Skeleton className="w-80 md:w-[500px] h-80 md:h-[500px]" />
    </div>
  );
}
