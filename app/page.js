import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img src={'/neystore-white.svg'} />
      <img width={300} height={200} src="/ney.jpg" />
    </main>
  )
}
