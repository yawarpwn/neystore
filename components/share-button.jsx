'use client'
import { Icons } from './icons'
export function ShareButton() {
  const share = async () => {
    try {
      navigator.share({
        url: window.location.href,
        title: window.document.title,
        text: 'Neystore - Productos',
      })
    } catch (err) {
      console.log('Error sharing')
    }
  }

  const handleShare = () => {
    share()
  }

  return (
    <button onClick={handleShare} className="absolute top-4 right-4 z-50">
      <Icons.share />
    </button>
  )
}
