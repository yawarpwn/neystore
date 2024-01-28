import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from './icons'
import { buttonVariants } from './ui/button'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className='site-footer container max-w-5xl mt-10'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        <div>
          <span className=' font-bold'>Nosotros</span>
          <div className='text-sm'>
            Somos una empresa dedicada a la importación juegos didácticos para
            niños y artículos relacionados.
          </div>
        </div>
        <div className=''>
          <span className='font-bold'>Atención al cliente</span>
          <div className='text-sm'>
            <ul>
              <li>
                <a href='#'>Nuestra política</a>
              </li>
              <li>
                <a href='#'>Preguntas frecuentes</a>
              </li>
              <li>
                <a href='#'>Terminos y condiciones</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div id='text-8' className='widget widget_text'>
          <span className='font-bold'>Contacto</span>
          <div className='textwidget'>
            <ul>
              <li>
                <a href='mailto:contacto@intelikidsperu.pe'>
                  ventas.neystore@gmail.com
                </a>
              </li>
              <li>
                <a href='tel:+51900224005'>900 224 005</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className=' font-bold'>Síguenos:</span>
          <div className='flex  mt-4'>
            {Object.entries(siteConfig.links).map(([social, url]) => (
              <a
                className={cn(buttonVariants({ variant: 'ghost' }))}
                href={url}
                target='_blank'
                key={social}
              >
                {Icons[social]()}
                <span className='sr-only'>{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='py-6 md:px-8 md:py-0'>
        <div className='container flex flex-col items-center justify-center mb-8'>
          <p className='text-center mt-4 text-sm'>
            ©{year}{' '}
            {siteConfig.name}. Todos los derechos reservados. Hecho con mucho ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
