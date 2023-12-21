import './styles.css'
import Link from 'next/link'

export function Breadcrumbs({ breadcrumbs }) {
  return (
    <div className="py-2 max-sm:max-w-xs overflow-x-hidden">
      <nav className="breadcrumbs  text-xs md:text-sm ">
        <ul>
          {breadcrumbs.map(({ title, href, active }) => {
            if (active)
              return (
                <li className="font-bold" key={href}>
                  {title}
                </li>
              )
            return (
              <li key={href}>
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
