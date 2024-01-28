import './styles.css'
import { type Route } from 'next'
import Link from 'next/link'

// interface Props<T> {
//   breadcrumbs: {
//     title: string;
//     href?: Route<T> | URL;
//     active?: boolean;
//   }[];
// }
type Breadcrumbs = {
  title: string
  href?: Route<string> | URL
  active?: boolean
}[]

interface Props {
  breadcrumbs: Breadcrumbs
}

export function Breadcrumbs({ breadcrumbs }: Props) {
  return (
    <div className='py-2 max-sm:max-w-xs overflow-x-hidden'>
      <nav className='breadcrumbs  text-xs md:text-sm '>
        <ul>
          {breadcrumbs.map(({ title, href, active }) => {
            if (active) {
              return (
                <li className='font-bold' key={title}>
                  {title}
                </li>
              )
            }
            return (
              <li key={title}>
                <span>
                  <Link href={href}>{title}</Link>
                </span>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
