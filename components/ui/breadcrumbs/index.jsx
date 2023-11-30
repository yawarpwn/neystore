import './styles.css'
import Link from 'next/link'

export function Breadcrumbs({ breadcrumbs }) {
  return (
    <div className="py-2">
      <nav className="breadcrumbs text-xs md:text-sm">
        <ul>
          {breadcrumbs.map(({ title, href, active }) => (
            <li className={active ? 'font-bold' : ''} key={href}>
              <span>
                <Link href={href}>{title}</Link>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
