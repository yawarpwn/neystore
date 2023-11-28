export function PriceProduct({ price, offert }) {
  return (
    <div className="inline-flex gap-2">
      <span className="line-through text-lg text-red-600">-23 %</span>
      <span className="">
        <span className="text-xs relative -top-1">S/</span>
        <span className="algin-top text-lg ">269</span>
        <span className="text-xs relative -top-1">00</span>
      </span>
    </div>
  )
}
