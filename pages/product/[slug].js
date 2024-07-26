import { useRouter } from 'next/router'
import Layout from '../../components/layout/Layout'
import Image from 'next/image'
import Button from '../../components/Button'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query

  // In a real application, you would fetch the product data based on the slug
  const product = {
    name: 'Example Product',
    price: 99.99,
    description: 'This is an example product description.',
    image: '/images/example-product.jpg',
  }

  return (
    <Layout showSidebar={false}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <Image src={product.image} alt={product.name} width={500} height={500} className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <Button variant="primary" disabled>Comprar</Button>
        </div>
      </div>
    </Layout>
  )
}