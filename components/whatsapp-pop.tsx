'use client'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const team = [
  {
    name: 'Raquel Maldonado. ',
    job: 'Gerente Ventas',
    image: '/assets/team/raquel-maldonado.webp',
    phone: '900224005',
  },

  {
    name: 'Jesus Saavedra',
    job: 'Asistente Ventas',
    image:
      'https://img.freepik.com/premium-vector/cute-boy-avatar-illustration_637684-31.jpg',
    phone: '900224005',
  },

  {
    name: 'Milagros Saavedra.',
    job: 'Asistente Ventas',
    image:
      'https://img.freepik.com/vector-premium/cara-linda-chica-avatar-nina-retrato-ilustracion-plana-vectorial_192760-82.jpg?w=2000',
    phone: '900224005',
  },
]

export function WhatsappPop() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)
  return (
    <div className='wp__container fixed z-50 right-2.5 bottom-2.5 flex items-center justify-center '>
      <div
        className={cn(
          'wp__window fixed bottom-14 right-2 p-4 shadow-sm rounded-sm translate-x-1/2 invisible transition-transform bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
          isOpen && 'translate-x-0 translate-y-0 visible',
        )}
      >
        <p className='mb-2 text-center'>
          Contacte con nosotros vía <strong>WhatsApp</strong>
        </p>
        <div className='flex flex-col gap-2'>
          {team.map((member) => <Card key={member.name} member={member} />)}
        </div>
      </div>
      <Button
        variant='icon'
        aria-label='contacto via whatsapp boton'
        className={cn(
          'btn border w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[rgba(20_230_27/0.9)] to-[rgba(47_231_167/0.9)] transition-transform',
          isOpen && 'rotate-180',
        )}
        onClick={handleClick}
      >
        {isOpen ? <Icons.x /> : <Icons.whatsapp />}
      </Button>
    </div>
  )
}

function Card({ member }) {
  const { name, job, image, phone } = member
  const [firstName] = name.split(' ')
  const whatsappLink =
    `https://wa.me/51${phone}?text=Hola ${firstName}, vengo de la pagina. Estoy interesando en:`
  return (
    <a
      className='wp__card flex items-center gap-4 p-2 hover:bg-popover hover:shadow-sm rounded-sm cursor-pointer transition'
      href={whatsappLink}
      target='_blank'
    >
      <img
        className='rounded-sm'
        alt='Foto de raquel Raquel Maldonado Ramirez'
        title='Raquel Maldonado Ramirez'
        width='60'
        height='80'
        src={image}
      />
      <div className='wap__texts flex-1'>
        <div className='name text-sm'>{name}</div>
        <div className='post text-xs font-bold'>{job}</div>
        <div className='online text-xs text-[rgb(20,230,27)]'>online</div>
      </div>
      <div className='whatsapp-wrap'>
        <Icons.whatsapp fill='rgb(20,230,27)' />
      </div>
    </a>
  )
}
