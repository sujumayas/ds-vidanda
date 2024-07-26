import Image from 'next/image'

export default function Logo() {
  return (
    <div className="w-32">
      <Image src="/images/logo.png" alt="E-commerce Logo" width={128} height={32} />
    </div>
  )
}