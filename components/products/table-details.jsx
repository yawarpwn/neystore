'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
export function TableDetailsProduct({ info, title }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <h4
        onClick={handleClick}
        className="flex bg-gray-100 items-center justify-between font-bold text-xl p-2.5 border-y  border-y-black"
      >
        <span>{title}:</span>
        <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </h4>
      <div className={cn(isOpen ? 'block' : ' hidden')}>
        <table>
          <tbody>
            {info.map(([key, value]) => {
              const isArray = Array.isArray(value)
              const values = isArray ? value.join(', ') : value
              return (
                <tr key={value}>
                  <td className="bg-gray-100 border-b border-b-black">
                    <span className="px-2 py-4">{key}</span>
                  </td>
                  <td className="border-b border-b-black">
                    <span className="px-2 py-4 ">{values}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
