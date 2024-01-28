import { cn } from "@/lib/utils";

import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

interface Props {
  ranking: number;
  isBig?: boolean;
}

export function ProductRanking({ ranking, isBig }: Props) {
  const TOTAL_STARS = 5;
  const Stars = Array.from({ length: TOTAL_STARS }, (_, index) => {
    return index + 1 < ranking
      ? (
        <StarFilledIcon
          key={index}
          className={cn("text-orange-500", isBig ? "w-6 h-6" : "w-4 h-4")}
        />
      )
      : <StarIcon key={index} className={cn("text-orange-500", isBig ? "w-6 h-6" : "w-4 h-4")} />;
  });

  return <div className="flex gap-1 py-1">{Stars}</div>;
}
