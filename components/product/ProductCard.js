import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'shared-ecommerce-components';
console.log(Button)

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {product.cyberWow && (
        <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block">
          Cyber Wow
        </div>
      )}
      <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-contain mb-4" />
      <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
      <p className="text-xs text-gray-500 mb-2">{product.description}</p>
      <p className="text-lg font-bold text-red-600 mb-2">S/ {product.price.toFixed(2)}</p>
      <Button variant="primary" fullWidth>AGREGAR</Button>
    </div>
  )
}
